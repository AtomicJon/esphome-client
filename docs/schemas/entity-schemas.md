[**esphome-client**](../README.md)

***

[Home](../README.md) / schemas/entity-schemas

# schemas/entity-schemas

Centralized schema definitions for all 22 ESPHome entity types.

## Remarks

This module provides the message type IDs, field numbers, and wire types needed to encode commands and decode state responses. By centralizing these
definitions, we eliminate magic numbers scattered throughout the codebase and provide a single source of truth for protocol field mappings.

## Interfaces

### CommandSchema

Defines the command message structure for an entity type.

#### Properties

| Property | Type |
| ------ | ------ |
| <a id="deviceidfieldnumber"></a> `deviceIdFieldNumber` | `number` |
| <a id="enummappings"></a> `enumMappings?` | `Record`\<`string`, [`EnumMapping`](#enummapping)\> |
| <a id="fields"></a> `fields` | `Record`\<`string`, [`FieldSpec`](#fieldspec)\> |
| <a id="haspatternfields"></a> `hasPatternFields` | `Record`\<`string`, [`HasPatternField`](#haspatternfield)\> |
| <a id="keyfieldnumber"></a> `keyFieldNumber` | `number` |
| <a id="messagetype"></a> `messageType` | `number` |

***

### EntitySchema

Complete schema definition for a single entity type.

#### Properties

| Property | Type |
| ------ | ------ |
| <a id="command"></a> `command?` | [`CommandSchema`](#commandschema) |
| <a id="listentities"></a> `listEntities` | [`ListEntitiesSchema`](#listentitiesschema) |
| <a id="state"></a> `state` | [`StateSchema`](#stateschema) |
| <a id="type"></a> `type` | `string` |

***

### FieldSpec

Defines the wire format for a single protobuf field.

#### Properties

| Property | Type |
| ------ | ------ |
| <a id="fieldnumber"></a> `fieldNumber` | `number` |
| <a id="valuetype"></a> `valueType` | [`ValueType`](#valuetype-3) |
| <a id="wiretype"></a> `wireType` | [`WireType`](../protocol/wire-types.md#wiretype) |

***

### HasPatternField

Defines a field that uses the has_* pattern common in ESPHome commands. These fields have a boolean "has" field followed by the actual value field.

#### Properties

| Property | Type |
| ------ | ------ |
| <a id="hasfieldnumber"></a> `hasFieldNumber` | `number` |
| <a id="valuefieldnumber"></a> `valueFieldNumber` | `number` |
| <a id="valuetype-1"></a> `valueType` | [`ValueType`](#valuetype-3) |
| <a id="wiretype-1"></a> `wireType` | [`WireType`](../protocol/wire-types.md#wiretype) |

***

### ListEntitiesSchema

Defines the list entities response message structure for an entity type.

#### Properties

| Property | Type |
| ------ | ------ |
| <a id="deviceidfieldnumber-1"></a> `deviceIdFieldNumber` | `number` |
| <a id="fields-1"></a> `fields` | `Record`\<`string`, [`FieldSpec`](#fieldspec)\> |
| <a id="keyfieldnumber-1"></a> `keyFieldNumber` | `number` |
| <a id="messagetype-1"></a> `messageType` | `number` |
| <a id="namefieldnumber"></a> `nameFieldNumber` | `number` |
| <a id="objectidfieldnumber"></a> `objectIdFieldNumber` | `number` |
| <a id="repeatedfields"></a> `repeatedFields?` | `Record`\<`string`, [`RepeatedFieldSpec`](#repeatedfieldspec)\> |

***

### RepeatedFieldSpec

Defines the wire format for a repeated protobuf field containing multiple values of the same type.

#### Properties

| Property | Type |
| ------ | ------ |
| <a id="fieldnumber-1"></a> `fieldNumber` | `number` |
| <a id="valuetype-2"></a> `valueType` | `"string"` \| `"enum"` \| `"varint"` |
| <a id="wiretype-2"></a> `wireType` | [`WireType`](../protocol/wire-types.md#wiretype) |

***

### StateSchema

Defines the state response message structure for an entity type.

#### Properties

| Property | Type |
| ------ | ------ |
| <a id="deviceidfieldnumber-2"></a> `deviceIdFieldNumber` | `number` |
| <a id="fields-2"></a> `fields` | `Record`\<`string`, [`FieldSpec`](#fieldspec)\> |
| <a id="keyfieldnumber-2"></a> `keyFieldNumber` | `number` |
| <a id="messagetype-2"></a> `messageType` | `number` |

## Type Aliases

### EnumMapping

```ts
type EnumMapping = Record<string, number>;
```

Defines a mapping from user-friendly string values to protocol enum numbers. Used to transform string options into numeric values before encoding.

***

### ValueType

```ts
type ValueType = "bool" | "enum" | "fixed32" | "float" | "sint32" | "string" | "varint";
```

Value types that describe how to interpret and encode/decode field data.

## Variables

### ENTITY\_SCHEMAS

```ts
const ENTITY_SCHEMAS: Record<string, EntitySchema>;
```

Schema definitions for all 22 ESPHome entity types. Each schema provides the complete field mapping for encoding commands and decoding state responses.

***

### MESSAGE\_TYPES

```ts
const MESSAGE_TYPES: {
  ALARM_CONTROL_PANEL_COMMAND_REQUEST: 96;
  ALARM_CONTROL_PANEL_STATE_RESPONSE: 95;
  BINARY_SENSOR_STATE_RESPONSE: 21;
  BUTTON_COMMAND_REQUEST: 62;
  CAMERA_IMAGE_RESPONSE: 44;
  CLIMATE_COMMAND_REQUEST: 48;
  CLIMATE_STATE_RESPONSE: 47;
  COVER_COMMAND_REQUEST: 30;
  COVER_STATE_RESPONSE: 22;
  DATE_COMMAND_REQUEST: 102;
  DATE_STATE_RESPONSE: 101;
  DATETIME_COMMAND_REQUEST: 114;
  DATETIME_STATE_RESPONSE: 113;
  EVENT_RESPONSE: 108;
  FAN_COMMAND_REQUEST: 31;
  FAN_STATE_RESPONSE: 23;
  LIGHT_COMMAND_REQUEST: 32;
  LIGHT_STATE_RESPONSE: 24;
  LIST_ENTITIES_ALARM_CONTROL_PANEL_RESPONSE: 94;
  LIST_ENTITIES_BINARY_SENSOR_RESPONSE: 12;
  LIST_ENTITIES_BUTTON_RESPONSE: 61;
  LIST_ENTITIES_CAMERA_RESPONSE: 43;
  LIST_ENTITIES_CLIMATE_RESPONSE: 46;
  LIST_ENTITIES_COVER_RESPONSE: 13;
  LIST_ENTITIES_DATE_RESPONSE: 100;
  LIST_ENTITIES_DATETIME_RESPONSE: 112;
  LIST_ENTITIES_EVENT_RESPONSE: 107;
  LIST_ENTITIES_FAN_RESPONSE: 14;
  LIST_ENTITIES_LIGHT_RESPONSE: 15;
  LIST_ENTITIES_LOCK_RESPONSE: 58;
  LIST_ENTITIES_MEDIA_PLAYER_RESPONSE: 63;
  LIST_ENTITIES_NUMBER_RESPONSE: 49;
  LIST_ENTITIES_SELECT_RESPONSE: 52;
  LIST_ENTITIES_SENSOR_RESPONSE: 16;
  LIST_ENTITIES_SIREN_RESPONSE: 55;
  LIST_ENTITIES_SWITCH_RESPONSE: 17;
  LIST_ENTITIES_TEXT_RESPONSE: 97;
  LIST_ENTITIES_TEXT_SENSOR_RESPONSE: 18;
  LIST_ENTITIES_TIME_RESPONSE: 103;
  LIST_ENTITIES_UPDATE_RESPONSE: 116;
  LIST_ENTITIES_VALVE_RESPONSE: 109;
  LOCK_COMMAND_REQUEST: 60;
  LOCK_STATE_RESPONSE: 59;
  MEDIA_PLAYER_COMMAND_REQUEST: 65;
  MEDIA_PLAYER_STATE_RESPONSE: 64;
  NUMBER_COMMAND_REQUEST: 51;
  NUMBER_STATE_RESPONSE: 50;
  SELECT_COMMAND_REQUEST: 54;
  SELECT_STATE_RESPONSE: 53;
  SENSOR_STATE_RESPONSE: 25;
  SIREN_COMMAND_REQUEST: 57;
  SIREN_STATE_RESPONSE: 56;
  SWITCH_COMMAND_REQUEST: 33;
  SWITCH_STATE_RESPONSE: 26;
  TEXT_COMMAND_REQUEST: 99;
  TEXT_SENSOR_STATE_RESPONSE: 27;
  TEXT_STATE_RESPONSE: 98;
  TIME_COMMAND_REQUEST: 105;
  TIME_STATE_RESPONSE: 104;
  UPDATE_COMMAND_REQUEST: 118;
  UPDATE_STATE_RESPONSE: 117;
  VALVE_COMMAND_REQUEST: 111;
  VALVE_STATE_RESPONSE: 110;
};
```

#### Type Declaration

| Name | Type | Default value |
| ------ | ------ | ------ |
| <a id="alarm_control_panel_command_request"></a> `ALARM_CONTROL_PANEL_COMMAND_REQUEST` | `96` | `96` |
| <a id="alarm_control_panel_state_response"></a> `ALARM_CONTROL_PANEL_STATE_RESPONSE` | `95` | `95` |
| <a id="binary_sensor_state_response"></a> `BINARY_SENSOR_STATE_RESPONSE` | `21` | `21` |
| <a id="button_command_request"></a> `BUTTON_COMMAND_REQUEST` | `62` | `62` |
| <a id="camera_image_response"></a> `CAMERA_IMAGE_RESPONSE` | `44` | `44` |
| <a id="climate_command_request"></a> `CLIMATE_COMMAND_REQUEST` | `48` | `48` |
| <a id="climate_state_response"></a> `CLIMATE_STATE_RESPONSE` | `47` | `47` |
| <a id="cover_command_request"></a> `COVER_COMMAND_REQUEST` | `30` | `30` |
| <a id="cover_state_response"></a> `COVER_STATE_RESPONSE` | `22` | `22` |
| <a id="date_command_request"></a> `DATE_COMMAND_REQUEST` | `102` | `102` |
| <a id="date_state_response"></a> `DATE_STATE_RESPONSE` | `101` | `101` |
| <a id="datetime_command_request"></a> `DATETIME_COMMAND_REQUEST` | `114` | `114` |
| <a id="datetime_state_response"></a> `DATETIME_STATE_RESPONSE` | `113` | `113` |
| <a id="event_response"></a> `EVENT_RESPONSE` | `108` | `108` |
| <a id="fan_command_request"></a> `FAN_COMMAND_REQUEST` | `31` | `31` |
| <a id="fan_state_response"></a> `FAN_STATE_RESPONSE` | `23` | `23` |
| <a id="light_command_request"></a> `LIGHT_COMMAND_REQUEST` | `32` | `32` |
| <a id="light_state_response"></a> `LIGHT_STATE_RESPONSE` | `24` | `24` |
| <a id="list_entities_alarm_control_panel_response"></a> `LIST_ENTITIES_ALARM_CONTROL_PANEL_RESPONSE` | `94` | `94` |
| <a id="list_entities_binary_sensor_response"></a> `LIST_ENTITIES_BINARY_SENSOR_RESPONSE` | `12` | `12` |
| <a id="list_entities_button_response"></a> `LIST_ENTITIES_BUTTON_RESPONSE` | `61` | `61` |
| <a id="list_entities_camera_response"></a> `LIST_ENTITIES_CAMERA_RESPONSE` | `43` | `43` |
| <a id="list_entities_climate_response"></a> `LIST_ENTITIES_CLIMATE_RESPONSE` | `46` | `46` |
| <a id="list_entities_cover_response"></a> `LIST_ENTITIES_COVER_RESPONSE` | `13` | `13` |
| <a id="list_entities_date_response"></a> `LIST_ENTITIES_DATE_RESPONSE` | `100` | `100` |
| <a id="list_entities_datetime_response"></a> `LIST_ENTITIES_DATETIME_RESPONSE` | `112` | `112` |
| <a id="list_entities_event_response"></a> `LIST_ENTITIES_EVENT_RESPONSE` | `107` | `107` |
| <a id="list_entities_fan_response"></a> `LIST_ENTITIES_FAN_RESPONSE` | `14` | `14` |
| <a id="list_entities_light_response"></a> `LIST_ENTITIES_LIGHT_RESPONSE` | `15` | `15` |
| <a id="list_entities_lock_response"></a> `LIST_ENTITIES_LOCK_RESPONSE` | `58` | `58` |
| <a id="list_entities_media_player_response"></a> `LIST_ENTITIES_MEDIA_PLAYER_RESPONSE` | `63` | `63` |
| <a id="list_entities_number_response"></a> `LIST_ENTITIES_NUMBER_RESPONSE` | `49` | `49` |
| <a id="list_entities_select_response"></a> `LIST_ENTITIES_SELECT_RESPONSE` | `52` | `52` |
| <a id="list_entities_sensor_response"></a> `LIST_ENTITIES_SENSOR_RESPONSE` | `16` | `16` |
| <a id="list_entities_siren_response"></a> `LIST_ENTITIES_SIREN_RESPONSE` | `55` | `55` |
| <a id="list_entities_switch_response"></a> `LIST_ENTITIES_SWITCH_RESPONSE` | `17` | `17` |
| <a id="list_entities_text_response"></a> `LIST_ENTITIES_TEXT_RESPONSE` | `97` | `97` |
| <a id="list_entities_text_sensor_response"></a> `LIST_ENTITIES_TEXT_SENSOR_RESPONSE` | `18` | `18` |
| <a id="list_entities_time_response"></a> `LIST_ENTITIES_TIME_RESPONSE` | `103` | `103` |
| <a id="list_entities_update_response"></a> `LIST_ENTITIES_UPDATE_RESPONSE` | `116` | `116` |
| <a id="list_entities_valve_response"></a> `LIST_ENTITIES_VALVE_RESPONSE` | `109` | `109` |
| <a id="lock_command_request"></a> `LOCK_COMMAND_REQUEST` | `60` | `60` |
| <a id="lock_state_response"></a> `LOCK_STATE_RESPONSE` | `59` | `59` |
| <a id="media_player_command_request"></a> `MEDIA_PLAYER_COMMAND_REQUEST` | `65` | `65` |
| <a id="media_player_state_response"></a> `MEDIA_PLAYER_STATE_RESPONSE` | `64` | `64` |
| <a id="number_command_request"></a> `NUMBER_COMMAND_REQUEST` | `51` | `51` |
| <a id="number_state_response"></a> `NUMBER_STATE_RESPONSE` | `50` | `50` |
| <a id="select_command_request"></a> `SELECT_COMMAND_REQUEST` | `54` | `54` |
| <a id="select_state_response"></a> `SELECT_STATE_RESPONSE` | `53` | `53` |
| <a id="sensor_state_response"></a> `SENSOR_STATE_RESPONSE` | `25` | `25` |
| <a id="siren_command_request"></a> `SIREN_COMMAND_REQUEST` | `57` | `57` |
| <a id="siren_state_response"></a> `SIREN_STATE_RESPONSE` | `56` | `56` |
| <a id="switch_command_request"></a> `SWITCH_COMMAND_REQUEST` | `33` | `33` |
| <a id="switch_state_response"></a> `SWITCH_STATE_RESPONSE` | `26` | `26` |
| <a id="text_command_request"></a> `TEXT_COMMAND_REQUEST` | `99` | `99` |
| <a id="text_sensor_state_response"></a> `TEXT_SENSOR_STATE_RESPONSE` | `27` | `27` |
| <a id="text_state_response"></a> `TEXT_STATE_RESPONSE` | `98` | `98` |
| <a id="time_command_request"></a> `TIME_COMMAND_REQUEST` | `105` | `105` |
| <a id="time_state_response"></a> `TIME_STATE_RESPONSE` | `104` | `104` |
| <a id="update_command_request"></a> `UPDATE_COMMAND_REQUEST` | `118` | `118` |
| <a id="update_state_response"></a> `UPDATE_STATE_RESPONSE` | `117` | `117` |
| <a id="valve_command_request"></a> `VALVE_COMMAND_REQUEST` | `111` | `111` |
| <a id="valve_state_response"></a> `VALVE_STATE_RESPONSE` | `110` | `110` |

## Functions

### findSchemaByCommandMessageType()

```ts
function findSchemaByCommandMessageType(messageType): EntitySchema | undefined;
```

Look up an entity schema by its command message type ID.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `messageType` | `number` | The message type ID to look up. |

#### Returns

[`EntitySchema`](#entityschema) \| `undefined`

The matching entity schema, or undefined if not found.

***

### findSchemaByListEntitiesMessageType()

```ts
function findSchemaByListEntitiesMessageType(messageType): EntitySchema | undefined;
```

Look up an entity schema by its list entities message type ID.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `messageType` | `number` | The message type ID to look up. |

#### Returns

[`EntitySchema`](#entityschema) \| `undefined`

The matching entity schema, or undefined if not found.

***

### findSchemaByStateMessageType()

```ts
function findSchemaByStateMessageType(messageType): EntitySchema | undefined;
```

Look up an entity schema by its state message type ID.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `messageType` | `number` | The message type ID to look up. |

#### Returns

[`EntitySchema`](#entityschema) \| `undefined`

The matching entity schema, or undefined if not found.

## References

### WireType

Re-exports [WireType](../protocol/wire-types.md#wiretype)
