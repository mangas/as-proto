// Code generated by protoc-gen-as. DO NOT EDIT.
// Versions:
//   protoc-gen-as v1.3.0
//   protoc        v4.24.4

import { Writer, Reader } from "as-proto/assembly";
import { CryptoHash } from "./CryptoHash";
import { Direction } from "./Direction";

export class MerklePathItem {
  static encode(message: MerklePathItem, writer: Writer): void {
    const hash = message.hash;
    if (hash !== null) {
      writer.uint32(10);
      writer.fork();
      CryptoHash.encode(hash, writer);
      writer.ldelim();
    }

    writer.uint32(16);
    writer.int32(message.direction);
  }

  static decode(reader: Reader, length: i32): MerklePathItem {
    const end: usize = length < 0 ? reader.end : reader.ptr + length;
    const message = new MerklePathItem();

    while (reader.ptr < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.hash = CryptoHash.decode(reader, reader.uint32());
          break;

        case 2:
          message.direction = reader.int32();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  }

  hash: CryptoHash | null;
  direction: Direction;

  constructor(hash: CryptoHash | null = null, direction: Direction = 0) {
    this.hash = hash;
    this.direction = direction;
  }
}
