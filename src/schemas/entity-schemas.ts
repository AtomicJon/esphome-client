/* Copyright(C) 2017-2026, HJD (https://github.com/hjdhjd). All rights reserved.
 *
 * entity-schemas.ts: Centralized entity schema definitions for ESPHome protocol.
 */

/**
 * Centralized schema definitions for all 22 ESPHome entity types.
 *
 * @remarks This module provides the message type IDs, field numbers, and wire types needed to encode commands and decode state responses. By centralizing these
 * definitions, we eliminate magic numbers scattered throughout the codebase and provide a single source of truth for protocol field mappings.
 *
 * @module schemas/entity-schemas
 */

import { WireType } from "../protocol/index.js";

// Re-export WireType so consumers can import it from this module.
export { WireType };

/**
 * Value types that describe how to interpret and encode/decode field data.
 */
export type ValueType = "bool" | "enum" | "fixed32" | "float" | "sint32" | "string" | "varint";

/**
 * Defines the wire format for a single protobuf field.
 */
export interface FieldSpec {

  fieldNumber: number;
  valueType: ValueType;
  wireType: WireType;
}

/**
 * Defines a field that uses the has_* pattern common in ESPHome commands. These fields have a boolean "has" field followed by the actual value field.
 */
export interface HasPatternField {

  hasFieldNumber: number;
  valueFieldNumber: number;
  valueType: ValueType;
  wireType: WireType;
}

/**
 * Defines a mapping from user-friendly string values to protocol enum numbers. Used to transform string options into numeric values before encoding.
 */
export type EnumMapping = Record<string, number>;

/**
 * Defines the command message structure for an entity type.
 */
export interface CommandSchema {

  deviceIdFieldNumber: number;
  enumMappings?: Record<string, EnumMapping>;
  fields: Record<string, FieldSpec>;
  hasPatternFields: Record<string, HasPatternField>;
  keyFieldNumber: number;
  messageType: number;
}

/**
 * Defines the state response message structure for an entity type.
 */
export interface StateSchema {

  deviceIdFieldNumber: number;
  fields: Record<string, FieldSpec>;
  keyFieldNumber: number;
  messageType: number;
}

/**
 * Defines the wire format for a repeated protobuf field containing multiple values of the same type.
 */
export interface RepeatedFieldSpec {

  fieldNumber: number;
  valueType: "enum" | "string" | "varint";
  wireType: WireType;
}

/**
 * Defines the list entities response message structure for an entity type.
 */
export interface ListEntitiesSchema {

  deviceIdFieldNumber: number;
  fields: Record<string, FieldSpec>;
  keyFieldNumber: number;
  messageType: number;
  nameFieldNumber: number;
  objectIdFieldNumber: number;
  repeatedFields?: Record<string, RepeatedFieldSpec>;
}

/**
 * Complete schema definition for a single entity type.
 */
export interface EntitySchema {

  command?: CommandSchema;
  listEntities: ListEntitiesSchema;
  state: StateSchema;
  type: string;
}

// Message type IDs from the ESPHome protocol. These values correspond to the message type enum in the protobuf specification.
export const MESSAGE_TYPES = {

  ALARM_CONTROL_PANEL_COMMAND_REQUEST: 96,
  ALARM_CONTROL_PANEL_STATE_RESPONSE: 95,
  BINARY_SENSOR_STATE_RESPONSE: 21,
  BUTTON_COMMAND_REQUEST: 62,
  CAMERA_IMAGE_RESPONSE: 44,
  CLIMATE_COMMAND_REQUEST: 48,
  CLIMATE_STATE_RESPONSE: 47,
  COVER_COMMAND_REQUEST: 30,
  COVER_STATE_RESPONSE: 22,
  DATETIME_COMMAND_REQUEST: 114,
  DATETIME_STATE_RESPONSE: 113,
  DATE_COMMAND_REQUEST: 102,
  DATE_STATE_RESPONSE: 101,
  EVENT_RESPONSE: 108,
  FAN_COMMAND_REQUEST: 31,
  FAN_STATE_RESPONSE: 23,
  LIGHT_COMMAND_REQUEST: 32,
  LIGHT_STATE_RESPONSE: 24,
  LIST_ENTITIES_ALARM_CONTROL_PANEL_RESPONSE: 94,
  LIST_ENTITIES_BINARY_SENSOR_RESPONSE: 12,
  LIST_ENTITIES_BUTTON_RESPONSE: 61,
  LIST_ENTITIES_CAMERA_RESPONSE: 43,
  LIST_ENTITIES_CLIMATE_RESPONSE: 46,
  LIST_ENTITIES_COVER_RESPONSE: 13,
  LIST_ENTITIES_DATETIME_RESPONSE: 112,
  LIST_ENTITIES_DATE_RESPONSE: 100,
  LIST_ENTITIES_EVENT_RESPONSE: 107,
  LIST_ENTITIES_FAN_RESPONSE: 14,
  LIST_ENTITIES_LIGHT_RESPONSE: 15,
  LIST_ENTITIES_LOCK_RESPONSE: 58,
  LIST_ENTITIES_MEDIA_PLAYER_RESPONSE: 63,
  LIST_ENTITIES_NUMBER_RESPONSE: 49,
  LIST_ENTITIES_SELECT_RESPONSE: 52,
  LIST_ENTITIES_SENSOR_RESPONSE: 16,
  LIST_ENTITIES_SIREN_RESPONSE: 55,
  LIST_ENTITIES_SWITCH_RESPONSE: 17,
  LIST_ENTITIES_TEXT_RESPONSE: 97,
  LIST_ENTITIES_TEXT_SENSOR_RESPONSE: 18,
  LIST_ENTITIES_TIME_RESPONSE: 103,
  LIST_ENTITIES_UPDATE_RESPONSE: 116,
  LIST_ENTITIES_VALVE_RESPONSE: 109,
  LOCK_COMMAND_REQUEST: 60,
  LOCK_STATE_RESPONSE: 59,
  MEDIA_PLAYER_COMMAND_REQUEST: 65,
  MEDIA_PLAYER_STATE_RESPONSE: 64,
  NUMBER_COMMAND_REQUEST: 51,
  NUMBER_STATE_RESPONSE: 50,
  SELECT_COMMAND_REQUEST: 54,
  SELECT_STATE_RESPONSE: 53,
  SENSOR_STATE_RESPONSE: 25,
  SIREN_COMMAND_REQUEST: 57,
  SIREN_STATE_RESPONSE: 56,
  SWITCH_COMMAND_REQUEST: 33,
  SWITCH_STATE_RESPONSE: 26,
  TEXT_COMMAND_REQUEST: 99,
  TEXT_SENSOR_STATE_RESPONSE: 27,
  TEXT_STATE_RESPONSE: 98,
  TIME_COMMAND_REQUEST: 105,
  TIME_STATE_RESPONSE: 104,
  UPDATE_COMMAND_REQUEST: 118,
  UPDATE_STATE_RESPONSE: 117,
  VALVE_COMMAND_REQUEST: 111,
  VALVE_STATE_RESPONSE: 110
} as const;

/**
 * Schema definitions for all 22 ESPHome entity types. Each schema provides the complete field mapping for encoding commands and decoding state responses.
 */
/* eslint-disable camelcase */
export const ENTITY_SCHEMAS: Record<string, EntitySchema> = {

  alarm_control_panel: {

    command: {

      deviceIdFieldNumber: 4,
      enumMappings: {

        command: { arm_away: 1, arm_custom_bypass: 5, arm_home: 2, arm_night: 3, arm_vacation: 4, disarm: 0, trigger: 6 }
      },
      fields: {

        code: { fieldNumber: 3, valueType: "string", wireType: WireType.LENGTH_DELIMITED },
        command: { fieldNumber: 2, valueType: "enum", wireType: WireType.VARINT }
      },
      hasPatternFields: {},
      keyFieldNumber: 1,
      messageType: MESSAGE_TYPES.ALARM_CONTROL_PANEL_COMMAND_REQUEST
    },
    listEntities: {

      deviceIdFieldNumber: 11,
      fields: {

        disabledByDefault: { fieldNumber: 6, valueType: "bool", wireType: WireType.VARINT },
        entityCategory: { fieldNumber: 7, valueType: "enum", wireType: WireType.VARINT },
        icon: { fieldNumber: 5, valueType: "string", wireType: WireType.LENGTH_DELIMITED },
        requiresCode: { fieldNumber: 9, valueType: "bool", wireType: WireType.VARINT },
        requiresCodeToArm: { fieldNumber: 10, valueType: "bool", wireType: WireType.VARINT },
        supportedFeatures: { fieldNumber: 8, valueType: "varint", wireType: WireType.VARINT }
      },
      keyFieldNumber: 2,
      messageType: MESSAGE_TYPES.LIST_ENTITIES_ALARM_CONTROL_PANEL_RESPONSE,
      nameFieldNumber: 3,
      objectIdFieldNumber: 1
    },
    state: {

      deviceIdFieldNumber: 3,
      fields: {

        state: { fieldNumber: 2, valueType: "enum", wireType: WireType.VARINT }
      },
      keyFieldNumber: 1,
      messageType: MESSAGE_TYPES.ALARM_CONTROL_PANEL_STATE_RESPONSE
    },
    type: "alarm_control_panel"
  },

  binary_sensor: {

    listEntities: {

      deviceIdFieldNumber: 10,
      fields: {

        deviceClass: { fieldNumber: 5, valueType: "string", wireType: WireType.LENGTH_DELIMITED },
        disabledByDefault: { fieldNumber: 7, valueType: "bool", wireType: WireType.VARINT },
        entityCategory: { fieldNumber: 9, valueType: "enum", wireType: WireType.VARINT },
        icon: { fieldNumber: 8, valueType: "string", wireType: WireType.LENGTH_DELIMITED },
        isStatusBinarySensor: { fieldNumber: 6, valueType: "bool", wireType: WireType.VARINT }
      },
      keyFieldNumber: 2,
      messageType: MESSAGE_TYPES.LIST_ENTITIES_BINARY_SENSOR_RESPONSE,
      nameFieldNumber: 3,
      objectIdFieldNumber: 1
    },
    state: {

      deviceIdFieldNumber: 4,
      fields: {

        missingState: { fieldNumber: 3, valueType: "bool", wireType: WireType.VARINT },
        state: { fieldNumber: 2, valueType: "bool", wireType: WireType.VARINT }
      },
      keyFieldNumber: 1,
      messageType: MESSAGE_TYPES.BINARY_SENSOR_STATE_RESPONSE
    },
    type: "binary_sensor"
  },

  button: {

    command: {

      deviceIdFieldNumber: 2,
      fields: {},
      hasPatternFields: {},
      keyFieldNumber: 1,
      messageType: MESSAGE_TYPES.BUTTON_COMMAND_REQUEST
    },
    listEntities: {

      deviceIdFieldNumber: 9,
      fields: {

        deviceClass: { fieldNumber: 8, valueType: "string", wireType: WireType.LENGTH_DELIMITED },
        disabledByDefault: { fieldNumber: 6, valueType: "bool", wireType: WireType.VARINT },
        entityCategory: { fieldNumber: 7, valueType: "enum", wireType: WireType.VARINT },
        icon: { fieldNumber: 5, valueType: "string", wireType: WireType.LENGTH_DELIMITED }
      },
      keyFieldNumber: 2,
      messageType: MESSAGE_TYPES.LIST_ENTITIES_BUTTON_RESPONSE,
      nameFieldNumber: 3,
      objectIdFieldNumber: 1
    },
    state: {

      // Button has no state response - it's a stateless trigger. We use a placeholder.
      deviceIdFieldNumber: 0,
      fields: {},
      keyFieldNumber: 1,
      messageType: 0
    },
    type: "button"
  },

  camera: {

    listEntities: {

      deviceIdFieldNumber: 8,
      fields: {

        disabledByDefault: { fieldNumber: 5, valueType: "bool", wireType: WireType.VARINT },
        entityCategory: { fieldNumber: 7, valueType: "enum", wireType: WireType.VARINT },
        icon: { fieldNumber: 6, valueType: "string", wireType: WireType.LENGTH_DELIMITED }
      },
      keyFieldNumber: 2,
      messageType: MESSAGE_TYPES.LIST_ENTITIES_CAMERA_RESPONSE,
      nameFieldNumber: 3,
      objectIdFieldNumber: 1
    },
    state: {

      deviceIdFieldNumber: 4,
      fields: {

        data: { fieldNumber: 2, valueType: "string", wireType: WireType.LENGTH_DELIMITED },
        done: { fieldNumber: 3, valueType: "bool", wireType: WireType.VARINT }
      },
      keyFieldNumber: 1,
      messageType: MESSAGE_TYPES.CAMERA_IMAGE_RESPONSE
    },
    type: "camera"
  },

  climate: {

    command: {

      deviceIdFieldNumber: 24,
      enumMappings: {

        fanMode: { auto: 2, diffuse: 8, focus: 7, high: 5, low: 3, medium: 4, middle: 6, off: 1, on: 0, quiet: 9 },
        mode: { auto: 6, cool: 2, dry: 5, fan_only: 4, heat: 3, heat_cool: 1, off: 0 },
        preset: { activity: 7, away: 2, boost: 3, comfort: 4, eco: 5, home: 1, none: 0, sleep: 6 },
        swingMode: { both: 1, horizontal: 3, off: 0, vertical: 2 }
      },
      fields: {},
      hasPatternFields: {

        customFanMode: { hasFieldNumber: 16, valueFieldNumber: 17, valueType: "string", wireType: WireType.LENGTH_DELIMITED },
        customPreset: { hasFieldNumber: 20, valueFieldNumber: 21, valueType: "string", wireType: WireType.LENGTH_DELIMITED },
        fanMode: { hasFieldNumber: 12, valueFieldNumber: 13, valueType: "enum", wireType: WireType.VARINT },
        mode: { hasFieldNumber: 2, valueFieldNumber: 3, valueType: "enum", wireType: WireType.VARINT },
        preset: { hasFieldNumber: 18, valueFieldNumber: 19, valueType: "enum", wireType: WireType.VARINT },
        swingMode: { hasFieldNumber: 14, valueFieldNumber: 15, valueType: "enum", wireType: WireType.VARINT },
        targetHumidity: { hasFieldNumber: 22, valueFieldNumber: 23, valueType: "float", wireType: WireType.FIXED32 },
        targetTemperature: { hasFieldNumber: 4, valueFieldNumber: 5, valueType: "float", wireType: WireType.FIXED32 },
        targetTemperatureHigh: { hasFieldNumber: 8, valueFieldNumber: 9, valueType: "float", wireType: WireType.FIXED32 },
        targetTemperatureLow: { hasFieldNumber: 6, valueFieldNumber: 7, valueType: "float", wireType: WireType.FIXED32 }
      },
      keyFieldNumber: 1,
      messageType: MESSAGE_TYPES.CLIMATE_COMMAND_REQUEST
    },
    listEntities: {

      deviceIdFieldNumber: 26,
      fields: {

        disabledByDefault: { fieldNumber: 18, valueType: "bool", wireType: WireType.VARINT },
        entityCategory: { fieldNumber: 20, valueType: "enum", wireType: WireType.VARINT },
        icon: { fieldNumber: 19, valueType: "string", wireType: WireType.LENGTH_DELIMITED },
        supportsAction: { fieldNumber: 12, valueType: "bool", wireType: WireType.VARINT },
        supportsCurrentHumidity: { fieldNumber: 22, valueType: "bool", wireType: WireType.VARINT },
        supportsCurrentTemperature: { fieldNumber: 5, valueType: "bool", wireType: WireType.VARINT },
        supportsTargetHumidity: { fieldNumber: 23, valueType: "bool", wireType: WireType.VARINT },
        supportsTwoPointTargetTemperature: { fieldNumber: 6, valueType: "bool", wireType: WireType.VARINT },
        visualCurrentTemperatureStep: { fieldNumber: 21, valueType: "float", wireType: WireType.FIXED32 },
        visualMaxHumidity: { fieldNumber: 25, valueType: "float", wireType: WireType.FIXED32 },
        visualMaxTemperature: { fieldNumber: 9, valueType: "float", wireType: WireType.FIXED32 },
        visualMinHumidity: { fieldNumber: 24, valueType: "float", wireType: WireType.FIXED32 },
        visualMinTemperature: { fieldNumber: 8, valueType: "float", wireType: WireType.FIXED32 },
        visualTargetTemperatureStep: { fieldNumber: 10, valueType: "float", wireType: WireType.FIXED32 }
      },
      keyFieldNumber: 2,
      messageType: MESSAGE_TYPES.LIST_ENTITIES_CLIMATE_RESPONSE,
      nameFieldNumber: 3,
      objectIdFieldNumber: 1,
      repeatedFields: {

        supportedCustomFanModes: { fieldNumber: 15, valueType: "string", wireType: WireType.LENGTH_DELIMITED },
        supportedCustomPresets: { fieldNumber: 17, valueType: "string", wireType: WireType.LENGTH_DELIMITED },
        supportedFanModes: { fieldNumber: 13, valueType: "enum", wireType: WireType.VARINT },
        supportedModes: { fieldNumber: 7, valueType: "enum", wireType: WireType.VARINT },
        supportedPresets: { fieldNumber: 16, valueType: "enum", wireType: WireType.VARINT },
        supportedSwingModes: { fieldNumber: 14, valueType: "enum", wireType: WireType.VARINT }
      }
    },
    state: {

      deviceIdFieldNumber: 16,
      fields: {

        action: { fieldNumber: 8, valueType: "enum", wireType: WireType.VARINT },
        currentHumidity: { fieldNumber: 14, valueType: "float", wireType: WireType.FIXED32 },
        currentTemperature: { fieldNumber: 3, valueType: "float", wireType: WireType.FIXED32 },
        customFanMode: { fieldNumber: 11, valueType: "string", wireType: WireType.LENGTH_DELIMITED },
        customPreset: { fieldNumber: 13, valueType: "string", wireType: WireType.LENGTH_DELIMITED },
        fanMode: { fieldNumber: 9, valueType: "enum", wireType: WireType.VARINT },
        mode: { fieldNumber: 2, valueType: "enum", wireType: WireType.VARINT },
        preset: { fieldNumber: 12, valueType: "enum", wireType: WireType.VARINT },
        swingMode: { fieldNumber: 10, valueType: "enum", wireType: WireType.VARINT },
        targetHumidity: { fieldNumber: 15, valueType: "float", wireType: WireType.FIXED32 },
        targetTemperature: { fieldNumber: 4, valueType: "float", wireType: WireType.FIXED32 },
        targetTemperatureHigh: { fieldNumber: 6, valueType: "float", wireType: WireType.FIXED32 },
        targetTemperatureLow: { fieldNumber: 5, valueType: "float", wireType: WireType.FIXED32 }
      },
      keyFieldNumber: 1,
      messageType: MESSAGE_TYPES.CLIMATE_STATE_RESPONSE
    },
    type: "climate"
  },

  cover: {

    command: {

      deviceIdFieldNumber: 9,
      fields: {

        stop: { fieldNumber: 8, valueType: "bool", wireType: WireType.VARINT }
      },
      hasPatternFields: {

        position: { hasFieldNumber: 4, valueFieldNumber: 5, valueType: "float", wireType: WireType.FIXED32 },
        tilt: { hasFieldNumber: 6, valueFieldNumber: 7, valueType: "float", wireType: WireType.FIXED32 }
      },
      keyFieldNumber: 1,
      messageType: MESSAGE_TYPES.COVER_COMMAND_REQUEST
    },
    listEntities: {

      deviceIdFieldNumber: 13,
      fields: {

        assumedState: { fieldNumber: 5, valueType: "bool", wireType: WireType.VARINT },
        deviceClass: { fieldNumber: 8, valueType: "string", wireType: WireType.LENGTH_DELIMITED },
        disabledByDefault: { fieldNumber: 9, valueType: "bool", wireType: WireType.VARINT },
        entityCategory: { fieldNumber: 11, valueType: "enum", wireType: WireType.VARINT },
        icon: { fieldNumber: 10, valueType: "string", wireType: WireType.LENGTH_DELIMITED },
        supportsPosition: { fieldNumber: 6, valueType: "bool", wireType: WireType.VARINT },
        supportsStop: { fieldNumber: 12, valueType: "bool", wireType: WireType.VARINT },
        supportsTilt: { fieldNumber: 7, valueType: "bool", wireType: WireType.VARINT }
      },
      keyFieldNumber: 2,
      messageType: MESSAGE_TYPES.LIST_ENTITIES_COVER_RESPONSE,
      nameFieldNumber: 3,
      objectIdFieldNumber: 1
    },
    state: {

      deviceIdFieldNumber: 6,
      fields: {

        currentOperation: { fieldNumber: 5, valueType: "enum", wireType: WireType.VARINT },
        position: { fieldNumber: 3, valueType: "float", wireType: WireType.FIXED32 },
        tilt: { fieldNumber: 4, valueType: "float", wireType: WireType.FIXED32 }
      },
      keyFieldNumber: 1,
      messageType: MESSAGE_TYPES.COVER_STATE_RESPONSE
    },
    type: "cover"
  },

  date: {

    command: {

      deviceIdFieldNumber: 5,
      fields: {

        day: { fieldNumber: 4, valueType: "varint", wireType: WireType.VARINT },
        month: { fieldNumber: 3, valueType: "varint", wireType: WireType.VARINT },
        year: { fieldNumber: 2, valueType: "varint", wireType: WireType.VARINT }
      },
      hasPatternFields: {},
      keyFieldNumber: 1,
      messageType: MESSAGE_TYPES.DATE_COMMAND_REQUEST
    },
    listEntities: {

      deviceIdFieldNumber: 8,
      fields: {

        disabledByDefault: { fieldNumber: 6, valueType: "bool", wireType: WireType.VARINT },
        entityCategory: { fieldNumber: 7, valueType: "enum", wireType: WireType.VARINT },
        icon: { fieldNumber: 5, valueType: "string", wireType: WireType.LENGTH_DELIMITED }
      },
      keyFieldNumber: 2,
      messageType: MESSAGE_TYPES.LIST_ENTITIES_DATE_RESPONSE,
      nameFieldNumber: 3,
      objectIdFieldNumber: 1
    },
    state: {

      deviceIdFieldNumber: 6,
      fields: {

        day: { fieldNumber: 5, valueType: "varint", wireType: WireType.VARINT },
        missingState: { fieldNumber: 2, valueType: "bool", wireType: WireType.VARINT },
        month: { fieldNumber: 4, valueType: "varint", wireType: WireType.VARINT },
        year: { fieldNumber: 3, valueType: "varint", wireType: WireType.VARINT }
      },
      keyFieldNumber: 1,
      messageType: MESSAGE_TYPES.DATE_STATE_RESPONSE
    },
    type: "date"
  },

  datetime: {

    command: {

      deviceIdFieldNumber: 3,
      fields: {

        epochSeconds: { fieldNumber: 2, valueType: "fixed32", wireType: WireType.FIXED32 }
      },
      hasPatternFields: {},
      keyFieldNumber: 1,
      messageType: MESSAGE_TYPES.DATETIME_COMMAND_REQUEST
    },
    listEntities: {

      deviceIdFieldNumber: 8,
      fields: {

        disabledByDefault: { fieldNumber: 6, valueType: "bool", wireType: WireType.VARINT },
        entityCategory: { fieldNumber: 7, valueType: "enum", wireType: WireType.VARINT },
        icon: { fieldNumber: 5, valueType: "string", wireType: WireType.LENGTH_DELIMITED }
      },
      keyFieldNumber: 2,
      messageType: MESSAGE_TYPES.LIST_ENTITIES_DATETIME_RESPONSE,
      nameFieldNumber: 3,
      objectIdFieldNumber: 1
    },
    state: {

      deviceIdFieldNumber: 4,
      fields: {

        epochSeconds: { fieldNumber: 3, valueType: "fixed32", wireType: WireType.FIXED32 },
        missingState: { fieldNumber: 2, valueType: "bool", wireType: WireType.VARINT }
      },
      keyFieldNumber: 1,
      messageType: MESSAGE_TYPES.DATETIME_STATE_RESPONSE
    },
    type: "datetime"
  },

  event: {

    listEntities: {

      deviceIdFieldNumber: 10,
      fields: {

        deviceClass: { fieldNumber: 8, valueType: "string", wireType: WireType.LENGTH_DELIMITED },
        disabledByDefault: { fieldNumber: 6, valueType: "bool", wireType: WireType.VARINT },
        entityCategory: { fieldNumber: 7, valueType: "enum", wireType: WireType.VARINT },
        icon: { fieldNumber: 5, valueType: "string", wireType: WireType.LENGTH_DELIMITED }
      },
      keyFieldNumber: 2,
      messageType: MESSAGE_TYPES.LIST_ENTITIES_EVENT_RESPONSE,
      nameFieldNumber: 3,
      objectIdFieldNumber: 1,
      repeatedFields: {

        eventTypes: { fieldNumber: 9, valueType: "string", wireType: WireType.LENGTH_DELIMITED }
      }
    },
    state: {

      deviceIdFieldNumber: 3,
      fields: {

        eventType: { fieldNumber: 2, valueType: "string", wireType: WireType.LENGTH_DELIMITED }
      },
      keyFieldNumber: 1,
      messageType: MESSAGE_TYPES.EVENT_RESPONSE
    },
    type: "event"
  },

  fan: {

    command: {

      deviceIdFieldNumber: 14,
      enumMappings: {

        direction: { forward: 0, reverse: 1 }
      },
      fields: {},
      hasPatternFields: {

        direction: { hasFieldNumber: 8, valueFieldNumber: 9, valueType: "enum", wireType: WireType.VARINT },
        oscillating: { hasFieldNumber: 6, valueFieldNumber: 7, valueType: "bool", wireType: WireType.VARINT },
        presetMode: { hasFieldNumber: 12, valueFieldNumber: 13, valueType: "string", wireType: WireType.LENGTH_DELIMITED },
        speedLevel: { hasFieldNumber: 10, valueFieldNumber: 11, valueType: "varint", wireType: WireType.VARINT },
        state: { hasFieldNumber: 2, valueFieldNumber: 3, valueType: "bool", wireType: WireType.VARINT }
      },
      keyFieldNumber: 1,
      messageType: MESSAGE_TYPES.FAN_COMMAND_REQUEST
    },
    listEntities: {

      deviceIdFieldNumber: 13,
      fields: {

        disabledByDefault: { fieldNumber: 9, valueType: "bool", wireType: WireType.VARINT },
        entityCategory: { fieldNumber: 11, valueType: "enum", wireType: WireType.VARINT },
        icon: { fieldNumber: 10, valueType: "string", wireType: WireType.LENGTH_DELIMITED },
        supportedSpeedCount: { fieldNumber: 8, valueType: "varint", wireType: WireType.VARINT },
        supportsDirection: { fieldNumber: 7, valueType: "bool", wireType: WireType.VARINT },
        supportsOscillation: { fieldNumber: 5, valueType: "bool", wireType: WireType.VARINT },
        supportsSpeed: { fieldNumber: 6, valueType: "bool", wireType: WireType.VARINT }
      },
      keyFieldNumber: 2,
      messageType: MESSAGE_TYPES.LIST_ENTITIES_FAN_RESPONSE,
      nameFieldNumber: 3,
      objectIdFieldNumber: 1,
      repeatedFields: {

        supportedPresetModes: { fieldNumber: 12, valueType: "string", wireType: WireType.LENGTH_DELIMITED }
      }
    },
    state: {

      deviceIdFieldNumber: 8,
      fields: {

        direction: { fieldNumber: 5, valueType: "enum", wireType: WireType.VARINT },
        oscillating: { fieldNumber: 3, valueType: "bool", wireType: WireType.VARINT },
        presetMode: { fieldNumber: 7, valueType: "string", wireType: WireType.LENGTH_DELIMITED },
        speedLevel: { fieldNumber: 6, valueType: "varint", wireType: WireType.VARINT },
        state: { fieldNumber: 2, valueType: "bool", wireType: WireType.VARINT }
      },
      keyFieldNumber: 1,
      messageType: MESSAGE_TYPES.FAN_STATE_RESPONSE
    },
    type: "fan"
  },

  light: {

    command: {

      deviceIdFieldNumber: 28,
      fields: {

        // RGB fields are handled specially - has_rgb (6) is followed by three separate value fields (r=7, g=8, b=9). The wrapper expands rgb: { r, g, b } into these
        // flat fields for encoding.
        blue: { fieldNumber: 9, valueType: "float", wireType: WireType.FIXED32 },
        green: { fieldNumber: 8, valueType: "float", wireType: WireType.FIXED32 },
        hasRgb: { fieldNumber: 6, valueType: "bool", wireType: WireType.VARINT },
        red: { fieldNumber: 7, valueType: "float", wireType: WireType.FIXED32 }
      },
      hasPatternFields: {

        brightness: { hasFieldNumber: 4, valueFieldNumber: 5, valueType: "float", wireType: WireType.FIXED32 },
        coldWhite: { hasFieldNumber: 24, valueFieldNumber: 25, valueType: "float", wireType: WireType.FIXED32 },
        colorBrightness: { hasFieldNumber: 20, valueFieldNumber: 21, valueType: "float", wireType: WireType.FIXED32 },
        colorMode: { hasFieldNumber: 22, valueFieldNumber: 23, valueType: "enum", wireType: WireType.VARINT },
        colorTemperature: { hasFieldNumber: 12, valueFieldNumber: 13, valueType: "float", wireType: WireType.FIXED32 },
        effect: { hasFieldNumber: 18, valueFieldNumber: 19, valueType: "string", wireType: WireType.LENGTH_DELIMITED },
        flashLength: { hasFieldNumber: 16, valueFieldNumber: 17, valueType: "varint", wireType: WireType.VARINT },
        state: { hasFieldNumber: 2, valueFieldNumber: 3, valueType: "bool", wireType: WireType.VARINT },
        transitionLength: { hasFieldNumber: 14, valueFieldNumber: 15, valueType: "varint", wireType: WireType.VARINT },
        warmWhite: { hasFieldNumber: 26, valueFieldNumber: 27, valueType: "float", wireType: WireType.FIXED32 },
        white: { hasFieldNumber: 10, valueFieldNumber: 11, valueType: "float", wireType: WireType.FIXED32 }
      },
      keyFieldNumber: 1,
      messageType: MESSAGE_TYPES.LIGHT_COMMAND_REQUEST
    },
    listEntities: {

      deviceIdFieldNumber: 16,
      fields: {

        disabledByDefault: { fieldNumber: 13, valueType: "bool", wireType: WireType.VARINT },
        entityCategory: { fieldNumber: 15, valueType: "enum", wireType: WireType.VARINT },
        icon: { fieldNumber: 14, valueType: "string", wireType: WireType.LENGTH_DELIMITED },
        maxMireds: { fieldNumber: 10, valueType: "float", wireType: WireType.FIXED32 },
        minMireds: { fieldNumber: 9, valueType: "float", wireType: WireType.FIXED32 }
      },
      keyFieldNumber: 2,
      messageType: MESSAGE_TYPES.LIST_ENTITIES_LIGHT_RESPONSE,
      nameFieldNumber: 3,
      objectIdFieldNumber: 1,
      repeatedFields: {

        effects: { fieldNumber: 11, valueType: "string", wireType: WireType.LENGTH_DELIMITED },
        supportedColorModes: { fieldNumber: 12, valueType: "enum", wireType: WireType.VARINT }
      }
    },
    state: {

      deviceIdFieldNumber: 14,
      fields: {

        blue: { fieldNumber: 6, valueType: "float", wireType: WireType.FIXED32 },
        brightness: { fieldNumber: 3, valueType: "float", wireType: WireType.FIXED32 },
        coldWhite: { fieldNumber: 12, valueType: "float", wireType: WireType.FIXED32 },
        colorBrightness: { fieldNumber: 10, valueType: "float", wireType: WireType.FIXED32 },
        colorMode: { fieldNumber: 11, valueType: "enum", wireType: WireType.VARINT },
        colorTemperature: { fieldNumber: 8, valueType: "float", wireType: WireType.FIXED32 },
        effect: { fieldNumber: 9, valueType: "string", wireType: WireType.LENGTH_DELIMITED },
        green: { fieldNumber: 5, valueType: "float", wireType: WireType.FIXED32 },
        red: { fieldNumber: 4, valueType: "float", wireType: WireType.FIXED32 },
        state: { fieldNumber: 2, valueType: "bool", wireType: WireType.VARINT },
        warmWhite: { fieldNumber: 13, valueType: "float", wireType: WireType.FIXED32 },
        white: { fieldNumber: 7, valueType: "float", wireType: WireType.FIXED32 }
      },
      keyFieldNumber: 1,
      messageType: MESSAGE_TYPES.LIGHT_STATE_RESPONSE
    },
    type: "light"
  },

  lock: {

    command: {

      deviceIdFieldNumber: 5,
      enumMappings: {

        command: { lock: 1, open: 2, unlock: 0 }
      },
      fields: {

        command: { fieldNumber: 2, valueType: "enum", wireType: WireType.VARINT }
      },
      hasPatternFields: {

        code: { hasFieldNumber: 3, valueFieldNumber: 4, valueType: "string", wireType: WireType.LENGTH_DELIMITED }
      },
      keyFieldNumber: 1,
      messageType: MESSAGE_TYPES.LOCK_COMMAND_REQUEST
    },
    listEntities: {

      deviceIdFieldNumber: 12,
      fields: {

        assumedState: { fieldNumber: 8, valueType: "bool", wireType: WireType.VARINT },
        codeFormat: { fieldNumber: 11, valueType: "string", wireType: WireType.LENGTH_DELIMITED },
        disabledByDefault: { fieldNumber: 6, valueType: "bool", wireType: WireType.VARINT },
        entityCategory: { fieldNumber: 7, valueType: "enum", wireType: WireType.VARINT },
        icon: { fieldNumber: 5, valueType: "string", wireType: WireType.LENGTH_DELIMITED },
        requiresCode: { fieldNumber: 10, valueType: "bool", wireType: WireType.VARINT },
        supportsOpen: { fieldNumber: 9, valueType: "bool", wireType: WireType.VARINT }
      },
      keyFieldNumber: 2,
      messageType: MESSAGE_TYPES.LIST_ENTITIES_LOCK_RESPONSE,
      nameFieldNumber: 3,
      objectIdFieldNumber: 1
    },
    state: {

      deviceIdFieldNumber: 3,
      fields: {

        state: { fieldNumber: 2, valueType: "enum", wireType: WireType.VARINT }
      },
      keyFieldNumber: 1,
      messageType: MESSAGE_TYPES.LOCK_STATE_RESPONSE
    },
    type: "lock"
  },

  media_player: {

    command: {

      deviceIdFieldNumber: 10,
      fields: {},
      hasPatternFields: {

        announcement: { hasFieldNumber: 8, valueFieldNumber: 9, valueType: "bool", wireType: WireType.VARINT },
        command: { hasFieldNumber: 2, valueFieldNumber: 3, valueType: "enum", wireType: WireType.VARINT },
        mediaUrl: { hasFieldNumber: 6, valueFieldNumber: 7, valueType: "string", wireType: WireType.LENGTH_DELIMITED },
        volume: { hasFieldNumber: 4, valueFieldNumber: 5, valueType: "float", wireType: WireType.FIXED32 }
      },
      keyFieldNumber: 1,
      messageType: MESSAGE_TYPES.MEDIA_PLAYER_COMMAND_REQUEST
    },
    listEntities: {

      deviceIdFieldNumber: 10,
      fields: {

        disabledByDefault: { fieldNumber: 6, valueType: "bool", wireType: WireType.VARINT },
        entityCategory: { fieldNumber: 7, valueType: "enum", wireType: WireType.VARINT },
        featureFlags: { fieldNumber: 11, valueType: "varint", wireType: WireType.VARINT },
        icon: { fieldNumber: 5, valueType: "string", wireType: WireType.LENGTH_DELIMITED },
        supportsPause: { fieldNumber: 8, valueType: "bool", wireType: WireType.VARINT }
      },
      keyFieldNumber: 2,
      messageType: MESSAGE_TYPES.LIST_ENTITIES_MEDIA_PLAYER_RESPONSE,
      nameFieldNumber: 3,
      objectIdFieldNumber: 1
    },
    state: {

      deviceIdFieldNumber: 5,
      fields: {

        muted: { fieldNumber: 4, valueType: "bool", wireType: WireType.VARINT },
        state: { fieldNumber: 2, valueType: "enum", wireType: WireType.VARINT },
        volume: { fieldNumber: 3, valueType: "float", wireType: WireType.FIXED32 }
      },
      keyFieldNumber: 1,
      messageType: MESSAGE_TYPES.MEDIA_PLAYER_STATE_RESPONSE
    },
    type: "media_player"
  },

  number: {

    command: {

      deviceIdFieldNumber: 3,
      fields: {

        state: { fieldNumber: 2, valueType: "float", wireType: WireType.FIXED32 }
      },
      hasPatternFields: {},
      keyFieldNumber: 1,
      messageType: MESSAGE_TYPES.NUMBER_COMMAND_REQUEST
    },
    listEntities: {

      deviceIdFieldNumber: 14,
      fields: {

        deviceClass: { fieldNumber: 13, valueType: "string", wireType: WireType.LENGTH_DELIMITED },
        disabledByDefault: { fieldNumber: 9, valueType: "bool", wireType: WireType.VARINT },
        entityCategory: { fieldNumber: 10, valueType: "enum", wireType: WireType.VARINT },
        icon: { fieldNumber: 5, valueType: "string", wireType: WireType.LENGTH_DELIMITED },
        maxValue: { fieldNumber: 7, valueType: "float", wireType: WireType.FIXED32 },
        minValue: { fieldNumber: 6, valueType: "float", wireType: WireType.FIXED32 },
        mode: { fieldNumber: 12, valueType: "enum", wireType: WireType.VARINT },
        step: { fieldNumber: 8, valueType: "float", wireType: WireType.FIXED32 },
        unitOfMeasurement: { fieldNumber: 11, valueType: "string", wireType: WireType.LENGTH_DELIMITED }
      },
      keyFieldNumber: 2,
      messageType: MESSAGE_TYPES.LIST_ENTITIES_NUMBER_RESPONSE,
      nameFieldNumber: 3,
      objectIdFieldNumber: 1
    },
    state: {

      deviceIdFieldNumber: 4,
      fields: {

        missingState: { fieldNumber: 3, valueType: "bool", wireType: WireType.VARINT },
        state: { fieldNumber: 2, valueType: "float", wireType: WireType.FIXED32 }
      },
      keyFieldNumber: 1,
      messageType: MESSAGE_TYPES.NUMBER_STATE_RESPONSE
    },
    type: "number"
  },

  select: {

    command: {

      deviceIdFieldNumber: 3,
      fields: {

        state: { fieldNumber: 2, valueType: "string", wireType: WireType.LENGTH_DELIMITED }
      },
      hasPatternFields: {},
      keyFieldNumber: 1,
      messageType: MESSAGE_TYPES.SELECT_COMMAND_REQUEST
    },
    listEntities: {

      deviceIdFieldNumber: 9,
      fields: {

        disabledByDefault: { fieldNumber: 7, valueType: "bool", wireType: WireType.VARINT },
        entityCategory: { fieldNumber: 8, valueType: "enum", wireType: WireType.VARINT },
        icon: { fieldNumber: 5, valueType: "string", wireType: WireType.LENGTH_DELIMITED }
      },
      keyFieldNumber: 2,
      messageType: MESSAGE_TYPES.LIST_ENTITIES_SELECT_RESPONSE,
      nameFieldNumber: 3,
      objectIdFieldNumber: 1,
      repeatedFields: {

        options: { fieldNumber: 6, valueType: "string", wireType: WireType.LENGTH_DELIMITED }
      }
    },
    state: {

      deviceIdFieldNumber: 4,
      fields: {

        missingState: { fieldNumber: 3, valueType: "bool", wireType: WireType.VARINT },
        state: { fieldNumber: 2, valueType: "string", wireType: WireType.LENGTH_DELIMITED }
      },
      keyFieldNumber: 1,
      messageType: MESSAGE_TYPES.SELECT_STATE_RESPONSE
    },
    type: "select"
  },

  sensor: {

    listEntities: {

      deviceIdFieldNumber: 14,
      fields: {

        accuracyDecimals: { fieldNumber: 7, valueType: "varint", wireType: WireType.VARINT },
        deviceClass: { fieldNumber: 9, valueType: "string", wireType: WireType.LENGTH_DELIMITED },
        disabledByDefault: { fieldNumber: 12, valueType: "bool", wireType: WireType.VARINT },
        entityCategory: { fieldNumber: 13, valueType: "enum", wireType: WireType.VARINT },
        forceUpdate: { fieldNumber: 8, valueType: "bool", wireType: WireType.VARINT },
        icon: { fieldNumber: 5, valueType: "string", wireType: WireType.LENGTH_DELIMITED },
        stateClass: { fieldNumber: 10, valueType: "enum", wireType: WireType.VARINT },
        unitOfMeasurement: { fieldNumber: 6, valueType: "string", wireType: WireType.LENGTH_DELIMITED }
      },
      keyFieldNumber: 2,
      messageType: MESSAGE_TYPES.LIST_ENTITIES_SENSOR_RESPONSE,
      nameFieldNumber: 3,
      objectIdFieldNumber: 1
    },
    state: {

      deviceIdFieldNumber: 4,
      fields: {

        missingState: { fieldNumber: 3, valueType: "bool", wireType: WireType.VARINT },
        state: { fieldNumber: 2, valueType: "float", wireType: WireType.FIXED32 }
      },
      keyFieldNumber: 1,
      messageType: MESSAGE_TYPES.SENSOR_STATE_RESPONSE
    },
    type: "sensor"
  },

  siren: {

    command: {

      deviceIdFieldNumber: 10,
      fields: {},
      hasPatternFields: {

        duration: { hasFieldNumber: 6, valueFieldNumber: 7, valueType: "varint", wireType: WireType.VARINT },
        state: { hasFieldNumber: 2, valueFieldNumber: 3, valueType: "bool", wireType: WireType.VARINT },
        tone: { hasFieldNumber: 4, valueFieldNumber: 5, valueType: "string", wireType: WireType.LENGTH_DELIMITED },
        volume: { hasFieldNumber: 8, valueFieldNumber: 9, valueType: "float", wireType: WireType.FIXED32 }
      },
      keyFieldNumber: 1,
      messageType: MESSAGE_TYPES.SIREN_COMMAND_REQUEST
    },
    listEntities: {

      deviceIdFieldNumber: 11,
      fields: {

        disabledByDefault: { fieldNumber: 6, valueType: "bool", wireType: WireType.VARINT },
        entityCategory: { fieldNumber: 10, valueType: "enum", wireType: WireType.VARINT },
        icon: { fieldNumber: 5, valueType: "string", wireType: WireType.LENGTH_DELIMITED },
        supportsDuration: { fieldNumber: 8, valueType: "bool", wireType: WireType.VARINT },
        supportsVolume: { fieldNumber: 9, valueType: "bool", wireType: WireType.VARINT }
      },
      keyFieldNumber: 2,
      messageType: MESSAGE_TYPES.LIST_ENTITIES_SIREN_RESPONSE,
      nameFieldNumber: 3,
      objectIdFieldNumber: 1,
      repeatedFields: {

        tones: { fieldNumber: 7, valueType: "string", wireType: WireType.LENGTH_DELIMITED }
      }
    },
    state: {

      deviceIdFieldNumber: 3,
      fields: {

        state: { fieldNumber: 2, valueType: "bool", wireType: WireType.VARINT }
      },
      keyFieldNumber: 1,
      messageType: MESSAGE_TYPES.SIREN_STATE_RESPONSE
    },
    type: "siren"
  },

  switch: {

    command: {

      deviceIdFieldNumber: 3,
      fields: {

        state: { fieldNumber: 2, valueType: "bool", wireType: WireType.VARINT }
      },
      hasPatternFields: {},
      keyFieldNumber: 1,
      messageType: MESSAGE_TYPES.SWITCH_COMMAND_REQUEST
    },
    listEntities: {

      deviceIdFieldNumber: 10,
      fields: {

        assumedState: { fieldNumber: 6, valueType: "bool", wireType: WireType.VARINT },
        deviceClass: { fieldNumber: 9, valueType: "string", wireType: WireType.LENGTH_DELIMITED },
        disabledByDefault: { fieldNumber: 7, valueType: "bool", wireType: WireType.VARINT },
        entityCategory: { fieldNumber: 8, valueType: "enum", wireType: WireType.VARINT },
        icon: { fieldNumber: 5, valueType: "string", wireType: WireType.LENGTH_DELIMITED }
      },
      keyFieldNumber: 2,
      messageType: MESSAGE_TYPES.LIST_ENTITIES_SWITCH_RESPONSE,
      nameFieldNumber: 3,
      objectIdFieldNumber: 1
    },
    state: {

      deviceIdFieldNumber: 3,
      fields: {

        state: { fieldNumber: 2, valueType: "bool", wireType: WireType.VARINT }
      },
      keyFieldNumber: 1,
      messageType: MESSAGE_TYPES.SWITCH_STATE_RESPONSE
    },
    type: "switch"
  },

  text: {

    command: {

      deviceIdFieldNumber: 3,
      fields: {

        state: { fieldNumber: 2, valueType: "string", wireType: WireType.LENGTH_DELIMITED }
      },
      hasPatternFields: {},
      keyFieldNumber: 1,
      messageType: MESSAGE_TYPES.TEXT_COMMAND_REQUEST
    },
    listEntities: {

      deviceIdFieldNumber: 12,
      fields: {

        disabledByDefault: { fieldNumber: 6, valueType: "bool", wireType: WireType.VARINT },
        entityCategory: { fieldNumber: 7, valueType: "enum", wireType: WireType.VARINT },
        icon: { fieldNumber: 5, valueType: "string", wireType: WireType.LENGTH_DELIMITED },
        maxLength: { fieldNumber: 9, valueType: "varint", wireType: WireType.VARINT },
        minLength: { fieldNumber: 8, valueType: "varint", wireType: WireType.VARINT },
        mode: { fieldNumber: 11, valueType: "enum", wireType: WireType.VARINT },
        pattern: { fieldNumber: 10, valueType: "string", wireType: WireType.LENGTH_DELIMITED }
      },
      keyFieldNumber: 2,
      messageType: MESSAGE_TYPES.LIST_ENTITIES_TEXT_RESPONSE,
      nameFieldNumber: 3,
      objectIdFieldNumber: 1
    },
    state: {

      deviceIdFieldNumber: 4,
      fields: {

        missingState: { fieldNumber: 3, valueType: "bool", wireType: WireType.VARINT },
        state: { fieldNumber: 2, valueType: "string", wireType: WireType.LENGTH_DELIMITED }
      },
      keyFieldNumber: 1,
      messageType: MESSAGE_TYPES.TEXT_STATE_RESPONSE
    },
    type: "text"
  },

  text_sensor: {

    listEntities: {

      deviceIdFieldNumber: 9,
      fields: {

        deviceClass: { fieldNumber: 8, valueType: "string", wireType: WireType.LENGTH_DELIMITED },
        disabledByDefault: { fieldNumber: 6, valueType: "bool", wireType: WireType.VARINT },
        entityCategory: { fieldNumber: 7, valueType: "enum", wireType: WireType.VARINT },
        icon: { fieldNumber: 5, valueType: "string", wireType: WireType.LENGTH_DELIMITED }
      },
      keyFieldNumber: 2,
      messageType: MESSAGE_TYPES.LIST_ENTITIES_TEXT_SENSOR_RESPONSE,
      nameFieldNumber: 3,
      objectIdFieldNumber: 1
    },
    state: {

      deviceIdFieldNumber: 4,
      fields: {

        missingState: { fieldNumber: 3, valueType: "bool", wireType: WireType.VARINT },
        state: { fieldNumber: 2, valueType: "string", wireType: WireType.LENGTH_DELIMITED }
      },
      keyFieldNumber: 1,
      messageType: MESSAGE_TYPES.TEXT_SENSOR_STATE_RESPONSE
    },
    type: "text_sensor"
  },

  time: {

    command: {

      deviceIdFieldNumber: 5,
      fields: {

        hour: { fieldNumber: 2, valueType: "varint", wireType: WireType.VARINT },
        minute: { fieldNumber: 3, valueType: "varint", wireType: WireType.VARINT },
        second: { fieldNumber: 4, valueType: "varint", wireType: WireType.VARINT }
      },
      hasPatternFields: {},
      keyFieldNumber: 1,
      messageType: MESSAGE_TYPES.TIME_COMMAND_REQUEST
    },
    listEntities: {

      deviceIdFieldNumber: 8,
      fields: {

        disabledByDefault: { fieldNumber: 6, valueType: "bool", wireType: WireType.VARINT },
        entityCategory: { fieldNumber: 7, valueType: "enum", wireType: WireType.VARINT },
        icon: { fieldNumber: 5, valueType: "string", wireType: WireType.LENGTH_DELIMITED }
      },
      keyFieldNumber: 2,
      messageType: MESSAGE_TYPES.LIST_ENTITIES_TIME_RESPONSE,
      nameFieldNumber: 3,
      objectIdFieldNumber: 1
    },
    state: {

      deviceIdFieldNumber: 6,
      fields: {

        hour: { fieldNumber: 3, valueType: "varint", wireType: WireType.VARINT },
        minute: { fieldNumber: 4, valueType: "varint", wireType: WireType.VARINT },
        missingState: { fieldNumber: 2, valueType: "bool", wireType: WireType.VARINT },
        second: { fieldNumber: 5, valueType: "varint", wireType: WireType.VARINT }
      },
      keyFieldNumber: 1,
      messageType: MESSAGE_TYPES.TIME_STATE_RESPONSE
    },
    type: "time"
  },

  update: {

    command: {

      deviceIdFieldNumber: 3,
      enumMappings: {

        command: { check: 2, none: 0, update: 1 }
      },
      fields: {

        command: { fieldNumber: 2, valueType: "enum", wireType: WireType.VARINT }
      },
      hasPatternFields: {},
      keyFieldNumber: 1,
      messageType: MESSAGE_TYPES.UPDATE_COMMAND_REQUEST
    },
    listEntities: {

      deviceIdFieldNumber: 9,
      fields: {

        deviceClass: { fieldNumber: 8, valueType: "string", wireType: WireType.LENGTH_DELIMITED },
        disabledByDefault: { fieldNumber: 6, valueType: "bool", wireType: WireType.VARINT },
        entityCategory: { fieldNumber: 7, valueType: "enum", wireType: WireType.VARINT },
        icon: { fieldNumber: 5, valueType: "string", wireType: WireType.LENGTH_DELIMITED }
      },
      keyFieldNumber: 2,
      messageType: MESSAGE_TYPES.LIST_ENTITIES_UPDATE_RESPONSE,
      nameFieldNumber: 3,
      objectIdFieldNumber: 1
    },
    state: {

      deviceIdFieldNumber: 11,
      fields: {

        currentVersion: { fieldNumber: 6, valueType: "string", wireType: WireType.LENGTH_DELIMITED },
        hasProgress: { fieldNumber: 4, valueType: "bool", wireType: WireType.VARINT },
        inProgress: { fieldNumber: 3, valueType: "bool", wireType: WireType.VARINT },
        latestVersion: { fieldNumber: 7, valueType: "string", wireType: WireType.LENGTH_DELIMITED },
        missingState: { fieldNumber: 2, valueType: "bool", wireType: WireType.VARINT },
        progress: { fieldNumber: 5, valueType: "float", wireType: WireType.FIXED32 },
        releaseSummary: { fieldNumber: 9, valueType: "string", wireType: WireType.LENGTH_DELIMITED },
        releaseUrl: { fieldNumber: 10, valueType: "string", wireType: WireType.LENGTH_DELIMITED },
        title: { fieldNumber: 8, valueType: "string", wireType: WireType.LENGTH_DELIMITED }
      },
      keyFieldNumber: 1,
      messageType: MESSAGE_TYPES.UPDATE_STATE_RESPONSE
    },
    type: "update"
  },

  valve: {

    command: {

      deviceIdFieldNumber: 5,
      fields: {

        stop: { fieldNumber: 4, valueType: "bool", wireType: WireType.VARINT }
      },
      hasPatternFields: {

        position: { hasFieldNumber: 2, valueFieldNumber: 3, valueType: "float", wireType: WireType.FIXED32 }
      },
      keyFieldNumber: 1,
      messageType: MESSAGE_TYPES.VALVE_COMMAND_REQUEST
    },
    listEntities: {

      deviceIdFieldNumber: 12,
      fields: {

        assumedState: { fieldNumber: 9, valueType: "bool", wireType: WireType.VARINT },
        deviceClass: { fieldNumber: 8, valueType: "string", wireType: WireType.LENGTH_DELIMITED },
        disabledByDefault: { fieldNumber: 6, valueType: "bool", wireType: WireType.VARINT },
        entityCategory: { fieldNumber: 7, valueType: "enum", wireType: WireType.VARINT },
        icon: { fieldNumber: 5, valueType: "string", wireType: WireType.LENGTH_DELIMITED },
        supportsPosition: { fieldNumber: 10, valueType: "bool", wireType: WireType.VARINT },
        supportsStop: { fieldNumber: 11, valueType: "bool", wireType: WireType.VARINT }
      },
      keyFieldNumber: 2,
      messageType: MESSAGE_TYPES.LIST_ENTITIES_VALVE_RESPONSE,
      nameFieldNumber: 3,
      objectIdFieldNumber: 1
    },
    state: {

      deviceIdFieldNumber: 4,
      fields: {

        currentOperation: { fieldNumber: 3, valueType: "enum", wireType: WireType.VARINT },
        position: { fieldNumber: 2, valueType: "float", wireType: WireType.FIXED32 }
      },
      keyFieldNumber: 1,
      messageType: MESSAGE_TYPES.VALVE_STATE_RESPONSE
    },
    type: "valve"
  }
};


/**
 * Look up an entity schema by its state message type ID.
 *
 * @param messageType - The message type ID to look up.
 * @returns The matching entity schema, or undefined if not found.
 */
export function findSchemaByStateMessageType(messageType: number): EntitySchema | undefined {

  for(const schema of Object.values(ENTITY_SCHEMAS)) {

    if(schema.state.messageType === messageType) {

      return schema;
    }
  }

  return undefined;
}

/**
 * Look up an entity schema by its list entities message type ID.
 *
 * @param messageType - The message type ID to look up.
 * @returns The matching entity schema, or undefined if not found.
 */
export function findSchemaByListEntitiesMessageType(messageType: number): EntitySchema | undefined {

  for(const schema of Object.values(ENTITY_SCHEMAS)) {

    if(schema.listEntities.messageType === messageType) {

      return schema;
    }
  }

  return undefined;
}

/**
 * Look up an entity schema by its command message type ID.
 *
 * @param messageType - The message type ID to look up.
 * @returns The matching entity schema, or undefined if not found.
 */
export function findSchemaByCommandMessageType(messageType: number): EntitySchema | undefined {

  for(const schema of Object.values(ENTITY_SCHEMAS)) {

    if(schema.command?.messageType === messageType) {

      return schema;
    }
  }

  return undefined;
}
