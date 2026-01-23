[**esphome-client**](../README.md)

***

[Home](../README.md) / protocol/wire-types

# protocol/wire-types

Protocol buffer wire types for encoding and decoding ESPHome API messages.

## Enumerations

### WireType

Wire types used in protobuf encoding. These define how data is encoded on the wire in the protocol buffer format.

#### Enumeration Members

| Enumeration Member | Value |
| ------ | ------ |
| <a id="fixed32"></a> `FIXED32` | `5` |
| <a id="fixed64"></a> `FIXED64` | `1` |
| <a id="length_delimited"></a> `LENGTH_DELIMITED` | `2` |
| <a id="varint"></a> `VARINT` | `0` |
