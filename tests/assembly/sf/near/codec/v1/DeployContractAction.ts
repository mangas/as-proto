// Code generated by protoc-gen-as. DO NOT EDIT.
// Versions:
//   protoc-gen-as v1.3.0
//   protoc        v4.24.4

import { Writer, Reader } from "as-proto/assembly";

export class DeployContractAction {
  static encode(message: DeployContractAction, writer: Writer): void {
    writer.uint32(10);
    writer.bytes(message.code);
  }

  static decode(reader: Reader, length: i32): DeployContractAction {
    const end: usize = length < 0 ? reader.end : reader.ptr + length;
    const message = new DeployContractAction();

    while (reader.ptr < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.code = reader.bytes();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  }

  code: Uint8Array;

  constructor(code: Uint8Array = new Uint8Array(0)) {
    this.code = code;
  }
}