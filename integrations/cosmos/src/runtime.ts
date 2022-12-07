import { DataItem, IRuntime, Validator, sha256 } from '@kyvejs/protocol';
import { name, version } from '../package.json';
import { fetchBlock } from './utils';

export default class Cosmos implements IRuntime {
  public name = name;
  public version = version;

  async getDataItem(
    v: Validator,
    source: string,
    key: string
  ): Promise<DataItem> {
    const headers = await this.generateCoinbaseCloudHeaders(v);
    const block = await fetchBlock(source, +key, headers);

    return { key, value: block };
  }

  async prevalidateDataItem(_: Validator, __: DataItem): Promise<boolean> {
    // TODO: return valid for now
    return true;
  }

  async transformDataItem(_: Validator, item: DataItem): Promise<DataItem> {
    // don't transform data item
    return item;
  }

  async validateDataItem(
    _: Validator,
    proposedDataItem: DataItem,
    validationDataItem: DataItem
  ): Promise<boolean> {
    const proposedDataItemHash = sha256(
      Buffer.from(JSON.stringify(proposedDataItem))
    );
    const validationDataItemHash = sha256(
      Buffer.from(JSON.stringify(validationDataItem))
    );

    return proposedDataItemHash === validationDataItemHash;
  }

  async summarizeDataBundle(_: Validator, bundle: DataItem[]): Promise<string> {
    return bundle.at(-1)?.value?.header?.app_hash ?? '';
  }

  async nextKey(_: Validator, key: string): Promise<string> {
    return (parseInt(key) + 1).toString();
  }

  private async generateCoinbaseCloudHeaders(v: Validator): Promise<any> {
    // requestSignature for coinbase cloud
    const address = v.client.account.address;
    const timestamp = new Date().valueOf().toString();
    const poolId = v.pool.id;

    const { signature, pub_key } = await v.client.signString(
      `${address}//${poolId}//${timestamp}`
    );

    return {
      'Content-Type': 'application/json',
      Signature: signature,
      'Public-Key': pub_key.value,
      'Pool-ID': poolId,
      Timestamp: timestamp,
    };
  }
}
