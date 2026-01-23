/* Copyright(C) 2017-2026, HJD (https://github.com/hjdhjd). All rights reserved.
 *
 * entity-types.ts: Entity type definitions for ESPHome protocol.
 */

/**
 * Entity type definitions for the ESPHome protocol.
 *
 * @remarks This module provides TypeScript interfaces and enums for all 22 ESPHome entity types. Each entity interface extends `BaseEntity` and includes
 * type-specific properties parsed from ListEntities responses. The `Entity` discriminated union allows type narrowing based on the `type` field.
 *
 * @module entity-types
 */

/**
 * Entity category classification from the ESPHome protocol. These categories help organize entities for display and filtering purposes.
 */
export enum EntityCategory {

  NONE = 0,
  CONFIG = 1,
  DIAGNOSTIC = 2
}

/**
 * Sensor state class from the ESPHome protocol. These define how sensor values should be interpreted for long-term statistics.
 */
export enum StateClass {

  NONE = 0,
  MEASUREMENT = 1,
  TOTAL_INCREASING = 2,
  TOTAL = 3
}

/**
 * Number input display mode from the ESPHome protocol. These define how numeric inputs should be rendered in user interfaces.
 */
export enum NumberMode {

  AUTO = 0,
  BOX = 1,
  SLIDER = 2
}

/**
 * Text input display mode from the ESPHome protocol. These define how text inputs should be rendered in user interfaces.
 */
export enum TextMode {

  TEXT = 0,
  PASSWORD = 1
}

/**
 * Union type of all entity type strings. This provides type-safe entity type discrimination.
 */
export type EntityType =
  "alarm_control_panel" |
  "binary_sensor" |
  "button" |
  "camera" |
  "climate" |
  "cover" |
  "date" |
  "datetime" |
  "event" |
  "fan" |
  "light" |
  "lock" |
  "media_player" |
  "number" |
  "select" |
  "sensor" |
  "siren" |
  "switch" |
  "text" |
  "text_sensor" |
  "time" |
  "update" |
  "valve";

/**
 * Base entity interface containing fields common to all ESPHome entity types.
 */
export interface BaseEntity {

  deviceId?: number;
  disabledByDefault?: boolean;
  entityCategory?: EntityCategory;
  icon?: string;
  key: number;
  name: string;
  objectId: string;
  type: EntityType;
}

/**
 * Alarm control panel entity with security panel capabilities.
 */
export interface AlarmControlPanelEntity extends BaseEntity {

  requiresCode?: boolean;
  requiresCodeToArm?: boolean;
  supportedFeatures?: number;
  type: "alarm_control_panel";
}

/**
 * Binary sensor entity for boolean state sensors.
 */
export interface BinarySensorEntity extends BaseEntity {

  deviceClass?: string;
  isStatusBinarySensor?: boolean;
  type: "binary_sensor";
}

/**
 * Button entity for stateless trigger actions.
 */
export interface ButtonEntity extends BaseEntity {

  deviceClass?: string;
  type: "button";
}

/**
 * Camera entity for image capture.
 */
export interface CameraEntity extends BaseEntity {

  type: "camera";
}

/**
 * Climate entity for HVAC control with modes, temperatures, and humidity.
 */
export interface ClimateEntity extends BaseEntity {

  supportedCustomFanModes?: string[];
  supportedCustomPresets?: string[];
  supportedFanModes?: number[];
  supportedModes?: number[];
  supportedPresets?: number[];
  supportedSwingModes?: number[];
  supportsAction?: boolean;
  supportsCurrentHumidity?: boolean;
  supportsCurrentTemperature?: boolean;
  supportsTargetHumidity?: boolean;
  supportsTwoPointTargetTemperature?: boolean;
  type: "climate";
  visualCurrentTemperatureStep?: number;
  visualMaxHumidity?: number;
  visualMaxTemperature?: number;
  visualMinHumidity?: number;
  visualMinTemperature?: number;
  visualTargetTemperatureStep?: number;
}

/**
 * Cover entity for position and tilt control.
 */
export interface CoverEntity extends BaseEntity {

  assumedState?: boolean;
  deviceClass?: string;
  supportsPosition?: boolean;
  supportsStop?: boolean;
  supportsTilt?: boolean;
  type: "cover";
}

/**
 * Date entity for date values.
 */
export interface DateEntity extends BaseEntity {

  type: "date";
}

/**
 * DateTime entity for epoch timestamp values.
 */
export interface DateTimeEntity extends BaseEntity {

  type: "datetime";
}

/**
 * Event entity for event type tracking.
 */
export interface EventEntity extends BaseEntity {

  deviceClass?: string;
  eventTypes?: string[];
  type: "event";
}

/**
 * Fan entity with speed, oscillation, and direction control.
 */
export interface FanEntity extends BaseEntity {

  supportedPresetModes?: string[];
  supportedSpeedCount?: number;
  supportsDirection?: boolean;
  supportsOscillation?: boolean;
  supportsSpeed?: boolean;
  type: "fan";
}

/**
 * Light entity with brightness, color, and effect support. The supportedColorModes field contains numeric values corresponding to the ColorMode enum.
 */
export interface LightEntity extends BaseEntity {

  effects?: string[];
  maxMireds?: number;
  minMireds?: number;
  supportedColorModes?: number[];
  type: "light";
}

/**
 * Lock entity with lock/unlock/open control.
 */
export interface LockEntity extends BaseEntity {

  assumedState?: boolean;
  codeFormat?: string;
  requiresCode?: boolean;
  supportsOpen?: boolean;
  type: "lock";
}

/**
 * Media player entity with playback control and volume.
 */
export interface MediaPlayerEntity extends BaseEntity {

  featureFlags?: number;
  supportsPause?: boolean;
  type: "media_player";
}

/**
 * Number entity for numeric values with min/max/step constraints.
 */
export interface NumberEntity extends BaseEntity {

  deviceClass?: string;
  maxValue?: number;
  minValue?: number;
  mode?: NumberMode;
  step?: number;
  type: "number";
  unitOfMeasurement?: string;
}

/**
 * Select entity for option selection from a predefined list.
 */
export interface SelectEntity extends BaseEntity {

  options?: string[];
  type: "select";
}

/**
 * Sensor entity for numeric sensor readings with units and accuracy.
 */
export interface SensorEntity extends BaseEntity {

  accuracyDecimals?: number;
  deviceClass?: string;
  forceUpdate?: boolean;
  stateClass?: StateClass;
  type: "sensor";
  unitOfMeasurement?: string;
}

/**
 * Siren entity for alarm control with tones and volume.
 */
export interface SirenEntity extends BaseEntity {

  supportsDuration?: boolean;
  supportsVolume?: boolean;
  tones?: string[];
  type: "siren";
}

/**
 * Switch entity for boolean on/off control.
 */
export interface SwitchEntity extends BaseEntity {

  assumedState?: boolean;
  deviceClass?: string;
  type: "switch";
}

/**
 * Text entity for string input values with length and pattern constraints.
 */
export interface TextEntity extends BaseEntity {

  maxLength?: number;
  minLength?: number;
  mode?: TextMode;
  pattern?: string;
  type: "text";
}

/**
 * Text sensor entity for string sensor readings.
 */
export interface TextSensorEntity extends BaseEntity {

  deviceClass?: string;
  type: "text_sensor";
}

/**
 * Time entity for time values.
 */
export interface TimeEntity extends BaseEntity {

  type: "time";
}

/**
 * Update entity for firmware update control.
 */
export interface UpdateEntity extends BaseEntity {

  deviceClass?: string;
  type: "update";
}

/**
 * Valve entity for position control with operation state.
 */
export interface ValveEntity extends BaseEntity {

  assumedState?: boolean;
  deviceClass?: string;
  supportsPosition?: boolean;
  supportsStop?: boolean;
  type: "valve";
}

/**
 * Discriminated union of all entity types. The type field serves as the discriminant for type narrowing.
 */
export type Entity =
  AlarmControlPanelEntity |
  BinarySensorEntity |
  ButtonEntity |
  CameraEntity |
  ClimateEntity |
  CoverEntity |
  DateEntity |
  DateTimeEntity |
  EventEntity |
  FanEntity |
  LightEntity |
  LockEntity |
  MediaPlayerEntity |
  NumberEntity |
  SelectEntity |
  SensorEntity |
  SirenEntity |
  SwitchEntity |
  TextEntity |
  TextSensorEntity |
  TimeEntity |
  UpdateEntity |
  ValveEntity;
