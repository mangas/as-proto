// Code generated by protoc-gen-as. DO NOT EDIT.
// Versions:
//   protoc-gen-as v1.3.0
//   protoc        v4.24.4

import { Writer, Reader } from "as-proto/assembly";
import { ExecutionOutcomeWithId } from "./ExecutionOutcomeWithId";
import { Receipt } from "./Receipt";

export class IndexerExecutionOutcomeWithReceipt {
  static encode(
    message: IndexerExecutionOutcomeWithReceipt,
    writer: Writer
  ): void {
    const executionOutcome = message.executionOutcome;
    if (executionOutcome !== null) {
      writer.uint32(10);
      writer.fork();
      ExecutionOutcomeWithId.encode(executionOutcome, writer);
      writer.ldelim();
    }

    const receipt = message.receipt;
    if (receipt !== null) {
      writer.uint32(18);
      writer.fork();
      Receipt.encode(receipt, writer);
      writer.ldelim();
    }
  }

  static decode(
    reader: Reader,
    length: i32
  ): IndexerExecutionOutcomeWithReceipt {
    const end: usize = length < 0 ? reader.end : reader.ptr + length;
    const message = new IndexerExecutionOutcomeWithReceipt();

    while (reader.ptr < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.executionOutcome = ExecutionOutcomeWithId.decode(
            reader,
            reader.uint32()
          );
          break;

        case 2:
          message.receipt = Receipt.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  }

  executionOutcome: ExecutionOutcomeWithId | null;
  receipt: Receipt | null;

  constructor(
    executionOutcome: ExecutionOutcomeWithId | null = null,
    receipt: Receipt | null = null
  ) {
    this.executionOutcome = executionOutcome;
    this.receipt = receipt;
  }
}