import test from "ava";
import {
  encode as encodeWasm,
  decode as decodeWasm,
  encodeProto3 as encodeWasm3,
  decodeProto3 as decodeWasm3,
} from "./assembly/test-all-types.js";
import {
  encode as encodeJs,
  decode as decodeJs,
  encodeProto3 as encodeJs3,
  decodeProto3 as decodeJs3,
} from "./js/test-all-types.js";

test("serializes to the same format as official implementation", (t) => {
  t.is(decodeJs(encodeWasm()), true);
});

test("deserializes from the same format as official implementation", (t) => {
  t.is(decodeWasm(encodeJs()), true);
});

test("encodes to the exactly the same bytes", (t) => {
  t.deepEqual(encodeWasm(), encodeJs());
});


test("serializes proto3 to the same format as official implementation", (t) => {
  t.is(decodeJs3(encodeWasm3()), true);
});

test("deserializes proto3 from the same format as official implementation", (t) => {
  t.is(decodeWasm3(encodeJs3()), true);
});

test("encodes proto3 to the exactly the same bytes", (t) => {
  t.deepEqual(encodeWasm3(), encodeJs3());
});

