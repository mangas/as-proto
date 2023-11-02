// Code generated by protoc-gen-as. DO NOT EDIT.
// Versions:
//   protoc-gen-as v1.3.0
//   protoc        v4.24.4

import { Writer, Reader } from "as-proto/assembly";
import { BlockHeader } from "./BlockHeader";

export class HeaderOnlyBlock {
  static encode(message: HeaderOnlyBlock, writer: Writer): void {
    const header = message.header;
    if (header !== null) {
      writer.uint32(18);
      writer.fork();
      BlockHeader.encode(header, writer);
      writer.ldelim();
    }
  }

  static decode(reader: Reader, length: i32): HeaderOnlyBlock {
    const end: usize = length < 0 ? reader.end : reader.ptr + length;
    const message = new HeaderOnlyBlock();

    while (reader.ptr < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 2:
          message.header = BlockHeader.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  }

  header: BlockHeader | null;

  constructor(header: BlockHeader | null = null) {
    this.header = header;
  }
}