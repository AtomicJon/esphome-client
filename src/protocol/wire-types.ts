/* Copyright(C) 2017-2026, HJD (https://github.com/hjdhjd). All rights reserved.
 *
 * wire-types.ts: Protocol buffer wire types for ESPHome API encoding/decoding.
 */

/**
 * Protocol buffer wire types for encoding and decoding ESPHome API messages.
 *
 * @module protocol/wire-types
 */

/**
 * Wire types used in protobuf encoding. These define how data is encoded on the wire in the protocol buffer format.
 */
export enum WireType {

  VARINT = 0,
  FIXED64 = 1,
  LENGTH_DELIMITED = 2,
  FIXED32 = 5
}
