// Code generated by protoc-gen-as. DO NOT EDIT.
// Versions:
//   protoc-gen-as v1.3.0
//   protoc        v4.24.4

import { Writer, Reader } from "as-proto/assembly";
import { CryptoHash } from "./CryptoHash";

export class DataReceiver {
  static encode(message: DataReceiver, writer: Writer): void {
    const dataId = message.dataId;
    if (dataId !== null) {
      writer.uint32(10);
      writer.fork();
      CryptoHash.encode(dataId, writer);
      writer.ldelim();
    }

    writer.uint32(18);
    writer.string(message.receiverId);
  }

  static decode(reader: Reader, length: i32): DataReceiver {
    const end: usize = length < 0 ? reader.end : reader.ptr + length;
    const message = new DataReceiver();

    while (reader.ptr < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.dataId = CryptoHash.decode(reader, reader.uint32());
          break;

        case 2:
          message.receiverId = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  }

  dataId: CryptoHash | null;
  receiverId: string;

  constructor(dataId: CryptoHash | null = null, receiverId: string = "") {
    this.dataId = dataId;
    this.receiverId = receiverId;
  }
}
