// Code generated by protoc-gen-as. DO NOT EDIT.
// Versions:
//   protoc-gen-as v0.9.2
//   protoc        v3.20.3

import { Writer, Reader } from "as-proto/assembly";
import { Inner } from "./Test/Inner";

export class Test {
  static encode(message: Test, writer: Writer): void {
    writer.uint32(10);
    writer.string(message.string);

    writer.uint32(16);
    writer.uint32(message.uint32);

    const inner = message.inner;
    if (inner !== null) {
      writer.uint32(26);
      writer.fork();
      Inner.encode(inner, writer);
      writer.ldelim();
    }

    writer.uint32(37);
    writer.float(message.float);
  }

  static decode(reader: Reader, length: i32): Test {
    const end: usize = length < 0 ? reader.end : reader.ptr + length;
    const message = new Test();

    while (reader.ptr < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.string = reader.string();
          break;

        case 2:
          message.uint32 = reader.uint32();
          break;

        case 3:
          message.inner = Inner.decode(reader, reader.uint32());
          break;

        case 4:
          message.float = reader.float();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  }

  string: string;
  uint32: u32;
  inner: Inner | null;
  float: f32;

  constructor(
    string: string = "",
    uint32: u32 = 0,
    inner: Inner | null = null,
    float: f32 = 0.0
  ) {
    this.string = string;
    this.uint32 = uint32;
    this.inner = inner;
    this.float = float;
  }
}