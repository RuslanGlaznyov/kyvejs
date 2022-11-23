import _m0 from "protobufjs/minimal";
export declare const protobufPackage = "cosmos.orm.v1alpha1";
/** StorageType */
export declare enum StorageType {
    /**
     * STORAGE_TYPE_DEFAULT_UNSPECIFIED - STORAGE_TYPE_DEFAULT_UNSPECIFIED indicates the persistent
     * KV-storage where primary key entries are stored in merkle-tree
     * backed commitment storage and indexes and seqs are stored in
     * fast index storage. Note that the Cosmos SDK before store/v2alpha1
     * does not support this.
     */
    STORAGE_TYPE_DEFAULT_UNSPECIFIED = 0,
    /**
     * STORAGE_TYPE_MEMORY - STORAGE_TYPE_MEMORY indicates in-memory storage that will be
     * reloaded every time an app restarts. Tables with this type of storage
     * will by default be ignored when importing and exporting a module's
     * state from JSON.
     */
    STORAGE_TYPE_MEMORY = 1,
    /**
     * STORAGE_TYPE_TRANSIENT - STORAGE_TYPE_TRANSIENT indicates transient storage that is reset
     * at the end of every block. Tables with this type of storage
     * will by default be ignored when importing and exporting a module's
     * state from JSON.
     */
    STORAGE_TYPE_TRANSIENT = 2,
    /**
     * STORAGE_TYPE_INDEX - STORAGE_TYPE_INDEX indicates persistent storage which is not backed
     * by a merkle-tree and won't affect the app hash. Note that the Cosmos SDK
     * before store/v2alpha1 does not support this.
     */
    STORAGE_TYPE_INDEX = 3,
    /**
     * STORAGE_TYPE_COMMITMENT - STORAGE_TYPE_INDEX indicates persistent storage which is backed by
     * a merkle-tree. With this type of storage, both primary and index keys
     * will affect the app hash and this is generally less efficient
     * than using STORAGE_TYPE_DEFAULT_UNSPECIFIED which separates index
     * keys into index storage. Note that modules built with the
     * Cosmos SDK before store/v2alpha1 must specify STORAGE_TYPE_COMMITMENT
     * instead of STORAGE_TYPE_DEFAULT_UNSPECIFIED or STORAGE_TYPE_INDEX
     * because this is the only type of persistent storage available.
     */
    STORAGE_TYPE_COMMITMENT = 4,
    UNRECOGNIZED = -1
}
export declare function storageTypeFromJSON(object: any): StorageType;
export declare function storageTypeToJSON(object: StorageType): string;
/** ModuleSchemaDescriptor describe's a module's ORM schema. */
export interface ModuleSchemaDescriptor {
    schema_file: ModuleSchemaDescriptor_FileEntry[];
    /**
     * prefix is an optional prefix that precedes all keys in this module's
     * store.
     */
    prefix: Uint8Array;
}
/** FileEntry describes an ORM file used in a module. */
export interface ModuleSchemaDescriptor_FileEntry {
    /**
     * id is a prefix that will be varint encoded and prepended to all the
     * table keys specified in the file's tables.
     */
    id: number;
    /**
     * proto_file_name is the name of a file .proto in that contains
     * table definitions. The .proto file must be in a package that the
     * module has referenced using cosmos.app.v1.ModuleDescriptor.use_package.
     */
    proto_file_name: string;
    /**
     * storage_type optionally indicates the type of storage this file's
     * tables should used. If it is left unspecified, the default KV-storage
     * of the app will be used.
     */
    storage_type: StorageType;
}
export declare const ModuleSchemaDescriptor: {
    encode(message: ModuleSchemaDescriptor, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ModuleSchemaDescriptor;
    fromJSON(object: any): ModuleSchemaDescriptor;
    toJSON(message: ModuleSchemaDescriptor): unknown;
    fromPartial<I extends {
        schema_file?: {
            id?: number | undefined;
            proto_file_name?: string | undefined;
            storage_type?: StorageType | undefined;
        }[] | undefined;
        prefix?: Uint8Array | undefined;
    } & {
        schema_file?: ({
            id?: number | undefined;
            proto_file_name?: string | undefined;
            storage_type?: StorageType | undefined;
        }[] & ({
            id?: number | undefined;
            proto_file_name?: string | undefined;
            storage_type?: StorageType | undefined;
        } & {
            id?: number | undefined;
            proto_file_name?: string | undefined;
            storage_type?: StorageType | undefined;
        } & { [K in Exclude<keyof I["schema_file"][number], keyof ModuleSchemaDescriptor_FileEntry>]: never; })[] & { [K_1 in Exclude<keyof I["schema_file"], keyof {
            id?: number | undefined;
            proto_file_name?: string | undefined;
            storage_type?: StorageType | undefined;
        }[]>]: never; }) | undefined;
        prefix?: Uint8Array | undefined;
    } & { [K_2 in Exclude<keyof I, keyof ModuleSchemaDescriptor>]: never; }>(object: I): ModuleSchemaDescriptor;
};
export declare const ModuleSchemaDescriptor_FileEntry: {
    encode(message: ModuleSchemaDescriptor_FileEntry, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ModuleSchemaDescriptor_FileEntry;
    fromJSON(object: any): ModuleSchemaDescriptor_FileEntry;
    toJSON(message: ModuleSchemaDescriptor_FileEntry): unknown;
    fromPartial<I extends {
        id?: number | undefined;
        proto_file_name?: string | undefined;
        storage_type?: StorageType | undefined;
    } & {
        id?: number | undefined;
        proto_file_name?: string | undefined;
        storage_type?: StorageType | undefined;
    } & { [K in Exclude<keyof I, keyof ModuleSchemaDescriptor_FileEntry>]: never; }>(object: I): ModuleSchemaDescriptor_FileEntry;
};
type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;
export type DeepPartial<T> = T extends Builtin ? T : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial<T[K]>;
} : Partial<T>;
type KeysOfUnion<T> = T extends T ? keyof T : never;
export type Exact<P, I extends P> = P extends Builtin ? P : P & {
    [K in keyof P]: Exact<P[K], I[K]>;
} & {
    [K in Exclude<keyof I, KeysOfUnion<P>>]: never;
};
export {};
