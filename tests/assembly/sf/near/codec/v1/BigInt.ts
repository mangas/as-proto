// Code generated by protoc-gen-as. DO NOT EDIT.
// Versions:
//   protoc-gen-as v1.3.0
//   protoc        v4.24.4

import { Writer, Reader } from "as-proto/assembly";

export class BigInt {
  static encode(message: BigInt, writer: Writer): void {
    writer.uint32(10);
    writer.bytes(message.bytes);
  }

  static decode(reader: Reader, length: i32): BigInt {
    const end: usize = length < 0 ? reader.end : reader.ptr + length;
    const message = new BigInt();

    while (reader.ptr < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.bytes = reader.bytes();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  }

  bytes: Uint8Array;

  constructor(bytes: Uint8Array = new Uint8Array(0)) {
    this.bytes = bytes;
  }
}