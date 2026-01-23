[**esphome-client**](README.md)

***

[Home](README.md) / entity-types

# entity-types

Entity type definitions for the ESPHome protocol.

## Remarks

This module provides TypeScript interfaces and enums for all 22 ESPHome entity types. Each entity interface extends `BaseEntity` and includes
type-specific properties parsed from ListEntities responses. The `Entity` discriminated union allows type narrowing based on the `type` field.

## Enumerations

### EntityCategory

Entity category classification from the ESPHome protocol. These categories help organize entities for display and filtering purposes.

#### Enumeration Members

| Enumeration Member | Value |
| ------ | ------ |
| <a id="config"></a> `CONFIG` | `1` |
| <a id="diagnostic"></a> `DIAGNOSTIC` | `2` |
| <a id="none"></a> `NONE` | `0` |

***

### NumberMode

Number input display mode from the ESPHome protocol. These define how numeric inputs should be rendered in user interfaces.

#### Enumeration Members

| Enumeration Member | Value |
| ------ | ------ |
| <a id="auto"></a> `AUTO` | `0` |
| <a id="box"></a> `BOX` | `1` |
| <a id="slider"></a> `SLIDER` | `2` |

***

### StateClass

Sensor state class from the ESPHome protocol. These define how sensor values should be interpreted for long-term statistics.

#### Enumeration Members

| Enumeration Member | Value |
| ------ | ------ |
| <a id="measurement"></a> `MEASUREMENT` | `1` |
| <a id="none-1"></a> `NONE` | `0` |
| <a id="total"></a> `TOTAL` | `3` |
| <a id="total_increasing"></a> `TOTAL_INCREASING` | `2` |

***

### TextMode

Text input display mode from the ESPHome protocol. These define how text inputs should be rendered in user interfaces.

#### Enumeration Members

| Enumeration Member | Value |
| ------ | ------ |
| <a id="password"></a> `PASSWORD` | `1` |
| <a id="text"></a> `TEXT` | `0` |

## Interfaces

### AlarmControlPanelEntity

Alarm control panel entity with security panel capabilities.

#### Extends

- [`BaseEntity`](#baseentity)

#### Properties

| Property | Type | Overrides | Inherited from |
| ------ | ------ | ------ | ------ |
| <a id="deviceid"></a> `deviceId?` | `number` | - | [`BaseEntity`](#baseentity).[`deviceId`](#deviceid-1) |
| <a id="disabledbydefault"></a> `disabledByDefault?` | `boolean` | - | [`BaseEntity`](#baseentity).[`disabledByDefault`](#disabledbydefault-1) |
| <a id="entitycategory-1"></a> `entityCategory?` | [`EntityCategory`](#entitycategory) | - | [`BaseEntity`](#baseentity).[`entityCategory`](#entitycategory-2) |
| <a id="icon"></a> `icon?` | `string` | - | [`BaseEntity`](#baseentity).[`icon`](#icon-1) |
| <a id="key"></a> `key` | `number` | - | [`BaseEntity`](#baseentity).[`key`](#key-1) |
| <a id="name"></a> `name` | `string` | - | [`BaseEntity`](#baseentity).[`name`](#name-1) |
| <a id="objectid"></a> `objectId` | `string` | - | [`BaseEntity`](#baseentity).[`objectId`](#objectid-1) |
| <a id="requirescode"></a> `requiresCode?` | `boolean` | - | - |
| <a id="requirescodetoarm"></a> `requiresCodeToArm?` | `boolean` | - | - |
| <a id="supportedfeatures"></a> `supportedFeatures?` | `number` | - | - |
| <a id="type"></a> `type` | `"alarm_control_panel"` | [`BaseEntity`](#baseentity).[`type`](#type-1) | - |

***

### BaseEntity

Base entity interface containing fields common to all ESPHome entity types.

#### Extended by

- [`AlarmControlPanelEntity`](#alarmcontrolpanelentity)
- [`BinarySensorEntity`](#binarysensorentity)
- [`ButtonEntity`](#buttonentity)
- [`CameraEntity`](#cameraentity)
- [`ClimateEntity`](#climateentity)
- [`CoverEntity`](#coverentity)
- [`DateEntity`](#dateentity)
- [`DateTimeEntity`](#datetimeentity)
- [`EventEntity`](#evententity)
- [`FanEntity`](#fanentity)
- [`LightEntity`](#lightentity)
- [`LockEntity`](#lockentity)
- [`MediaPlayerEntity`](#mediaplayerentity)
- [`NumberEntity`](#numberentity)
- [`SelectEntity`](#selectentity)
- [`SensorEntity`](#sensorentity)
- [`SirenEntity`](#sirenentity)
- [`SwitchEntity`](#switchentity)
- [`TextEntity`](#textentity)
- [`TextSensorEntity`](#textsensorentity)
- [`TimeEntity`](#timeentity)
- [`UpdateEntity`](#updateentity)
- [`ValveEntity`](#valveentity)

#### Properties

| Property | Type |
| ------ | ------ |
| <a id="deviceid-1"></a> `deviceId?` | `number` |
| <a id="disabledbydefault-1"></a> `disabledByDefault?` | `boolean` |
| <a id="entitycategory-2"></a> `entityCategory?` | [`EntityCategory`](#entitycategory) |
| <a id="icon-1"></a> `icon?` | `string` |
| <a id="key-1"></a> `key` | `number` |
| <a id="name-1"></a> `name` | `string` |
| <a id="objectid-1"></a> `objectId` | `string` |
| <a id="type-1"></a> `type` | [`EntityType`](#entitytype) |

***

### BinarySensorEntity

Binary sensor entity for boolean state sensors.

#### Extends

- [`BaseEntity`](#baseentity)

#### Properties

| Property | Type | Overrides | Inherited from |
| ------ | ------ | ------ | ------ |
| <a id="deviceclass"></a> `deviceClass?` | `string` | - | - |
| <a id="deviceid-2"></a> `deviceId?` | `number` | - | [`BaseEntity`](#baseentity).[`deviceId`](#deviceid-1) |
| <a id="disabledbydefault-2"></a> `disabledByDefault?` | `boolean` | - | [`BaseEntity`](#baseentity).[`disabledByDefault`](#disabledbydefault-1) |
| <a id="entitycategory-3"></a> `entityCategory?` | [`EntityCategory`](#entitycategory) | - | [`BaseEntity`](#baseentity).[`entityCategory`](#entitycategory-2) |
| <a id="icon-2"></a> `icon?` | `string` | - | [`BaseEntity`](#baseentity).[`icon`](#icon-1) |
| <a id="isstatusbinarysensor"></a> `isStatusBinarySensor?` | `boolean` | - | - |
| <a id="key-2"></a> `key` | `number` | - | [`BaseEntity`](#baseentity).[`key`](#key-1) |
| <a id="name-2"></a> `name` | `string` | - | [`BaseEntity`](#baseentity).[`name`](#name-1) |
| <a id="objectid-2"></a> `objectId` | `string` | - | [`BaseEntity`](#baseentity).[`objectId`](#objectid-1) |
| <a id="type-2"></a> `type` | `"binary_sensor"` | [`BaseEntity`](#baseentity).[`type`](#type-1) | - |

***

### ButtonEntity

Button entity for stateless trigger actions.

#### Extends

- [`BaseEntity`](#baseentity)

#### Properties

| Property | Type | Overrides | Inherited from |
| ------ | ------ | ------ | ------ |
| <a id="deviceclass-1"></a> `deviceClass?` | `string` | - | - |
| <a id="deviceid-3"></a> `deviceId?` | `number` | - | [`BaseEntity`](#baseentity).[`deviceId`](#deviceid-1) |
| <a id="disabledbydefault-3"></a> `disabledByDefault?` | `boolean` | - | [`BaseEntity`](#baseentity).[`disabledByDefault`](#disabledbydefault-1) |
| <a id="entitycategory-4"></a> `entityCategory?` | [`EntityCategory`](#entitycategory) | - | [`BaseEntity`](#baseentity).[`entityCategory`](#entitycategory-2) |
| <a id="icon-3"></a> `icon?` | `string` | - | [`BaseEntity`](#baseentity).[`icon`](#icon-1) |
| <a id="key-3"></a> `key` | `number` | - | [`BaseEntity`](#baseentity).[`key`](#key-1) |
| <a id="name-3"></a> `name` | `string` | - | [`BaseEntity`](#baseentity).[`name`](#name-1) |
| <a id="objectid-3"></a> `objectId` | `string` | - | [`BaseEntity`](#baseentity).[`objectId`](#objectid-1) |
| <a id="type-3"></a> `type` | `"button"` | [`BaseEntity`](#baseentity).[`type`](#type-1) | - |

***

### CameraEntity

Camera entity for image capture.

#### Extends

- [`BaseEntity`](#baseentity)

#### Properties

| Property | Type | Overrides | Inherited from |
| ------ | ------ | ------ | ------ |
| <a id="deviceid-4"></a> `deviceId?` | `number` | - | [`BaseEntity`](#baseentity).[`deviceId`](#deviceid-1) |
| <a id="disabledbydefault-4"></a> `disabledByDefault?` | `boolean` | - | [`BaseEntity`](#baseentity).[`disabledByDefault`](#disabledbydefault-1) |
| <a id="entitycategory-5"></a> `entityCategory?` | [`EntityCategory`](#entitycategory) | - | [`BaseEntity`](#baseentity).[`entityCategory`](#entitycategory-2) |
| <a id="icon-4"></a> `icon?` | `string` | - | [`BaseEntity`](#baseentity).[`icon`](#icon-1) |
| <a id="key-4"></a> `key` | `number` | - | [`BaseEntity`](#baseentity).[`key`](#key-1) |
| <a id="name-4"></a> `name` | `string` | - | [`BaseEntity`](#baseentity).[`name`](#name-1) |
| <a id="objectid-4"></a> `objectId` | `string` | - | [`BaseEntity`](#baseentity).[`objectId`](#objectid-1) |
| <a id="type-4"></a> `type` | `"camera"` | [`BaseEntity`](#baseentity).[`type`](#type-1) | - |

***

### ClimateEntity

Climate entity for HVAC control with modes, temperatures, and humidity.

#### Extends

- [`BaseEntity`](#baseentity)

#### Properties

| Property | Type | Overrides | Inherited from |
| ------ | ------ | ------ | ------ |
| <a id="deviceid-5"></a> `deviceId?` | `number` | - | [`BaseEntity`](#baseentity).[`deviceId`](#deviceid-1) |
| <a id="disabledbydefault-5"></a> `disabledByDefault?` | `boolean` | - | [`BaseEntity`](#baseentity).[`disabledByDefault`](#disabledbydefault-1) |
| <a id="entitycategory-6"></a> `entityCategory?` | [`EntityCategory`](#entitycategory) | - | [`BaseEntity`](#baseentity).[`entityCategory`](#entitycategory-2) |
| <a id="icon-5"></a> `icon?` | `string` | - | [`BaseEntity`](#baseentity).[`icon`](#icon-1) |
| <a id="key-5"></a> `key` | `number` | - | [`BaseEntity`](#baseentity).[`key`](#key-1) |
| <a id="name-5"></a> `name` | `string` | - | [`BaseEntity`](#baseentity).[`name`](#name-1) |
| <a id="objectid-5"></a> `objectId` | `string` | - | [`BaseEntity`](#baseentity).[`objectId`](#objectid-1) |
| <a id="supportedcustomfanmodes"></a> `supportedCustomFanModes?` | `string`[] | - | - |
| <a id="supportedcustompresets"></a> `supportedCustomPresets?` | `string`[] | - | - |
| <a id="supportedfanmodes"></a> `supportedFanModes?` | `number`[] | - | - |
| <a id="supportedmodes"></a> `supportedModes?` | `number`[] | - | - |
| <a id="supportedpresets"></a> `supportedPresets?` | `number`[] | - | - |
| <a id="supportedswingmodes"></a> `supportedSwingModes?` | `number`[] | - | - |
| <a id="supportsaction"></a> `supportsAction?` | `boolean` | - | - |
| <a id="supportscurrenthumidity"></a> `supportsCurrentHumidity?` | `boolean` | - | - |
| <a id="supportscurrenttemperature"></a> `supportsCurrentTemperature?` | `boolean` | - | - |
| <a id="supportstargethumidity"></a> `supportsTargetHumidity?` | `boolean` | - | - |
| <a id="supportstwopointtargettemperature"></a> `supportsTwoPointTargetTemperature?` | `boolean` | - | - |
| <a id="type-5"></a> `type` | `"climate"` | [`BaseEntity`](#baseentity).[`type`](#type-1) | - |
| <a id="visualcurrenttemperaturestep"></a> `visualCurrentTemperatureStep?` | `number` | - | - |
| <a id="visualmaxhumidity"></a> `visualMaxHumidity?` | `number` | - | - |
| <a id="visualmaxtemperature"></a> `visualMaxTemperature?` | `number` | - | - |
| <a id="visualminhumidity"></a> `visualMinHumidity?` | `number` | - | - |
| <a id="visualmintemperature"></a> `visualMinTemperature?` | `number` | - | - |
| <a id="visualtargettemperaturestep"></a> `visualTargetTemperatureStep?` | `number` | - | - |

***

### CoverEntity

Cover entity for position and tilt control.

#### Extends

- [`BaseEntity`](#baseentity)

#### Properties

| Property | Type | Overrides | Inherited from |
| ------ | ------ | ------ | ------ |
| <a id="assumedstate"></a> `assumedState?` | `boolean` | - | - |
| <a id="deviceclass-2"></a> `deviceClass?` | `string` | - | - |
| <a id="deviceid-6"></a> `deviceId?` | `number` | - | [`BaseEntity`](#baseentity).[`deviceId`](#deviceid-1) |
| <a id="disabledbydefault-6"></a> `disabledByDefault?` | `boolean` | - | [`BaseEntity`](#baseentity).[`disabledByDefault`](#disabledbydefault-1) |
| <a id="entitycategory-7"></a> `entityCategory?` | [`EntityCategory`](#entitycategory) | - | [`BaseEntity`](#baseentity).[`entityCategory`](#entitycategory-2) |
| <a id="icon-6"></a> `icon?` | `string` | - | [`BaseEntity`](#baseentity).[`icon`](#icon-1) |
| <a id="key-6"></a> `key` | `number` | - | [`BaseEntity`](#baseentity).[`key`](#key-1) |
| <a id="name-6"></a> `name` | `string` | - | [`BaseEntity`](#baseentity).[`name`](#name-1) |
| <a id="objectid-6"></a> `objectId` | `string` | - | [`BaseEntity`](#baseentity).[`objectId`](#objectid-1) |
| <a id="supportsposition"></a> `supportsPosition?` | `boolean` | - | - |
| <a id="supportsstop"></a> `supportsStop?` | `boolean` | - | - |
| <a id="supportstilt"></a> `supportsTilt?` | `boolean` | - | - |
| <a id="type-6"></a> `type` | `"cover"` | [`BaseEntity`](#baseentity).[`type`](#type-1) | - |

***

### DateEntity

Date entity for date values.

#### Extends

- [`BaseEntity`](#baseentity)

#### Properties

| Property | Type | Overrides | Inherited from |
| ------ | ------ | ------ | ------ |
| <a id="deviceid-7"></a> `deviceId?` | `number` | - | [`BaseEntity`](#baseentity).[`deviceId`](#deviceid-1) |
| <a id="disabledbydefault-7"></a> `disabledByDefault?` | `boolean` | - | [`BaseEntity`](#baseentity).[`disabledByDefault`](#disabledbydefault-1) |
| <a id="entitycategory-8"></a> `entityCategory?` | [`EntityCategory`](#entitycategory) | - | [`BaseEntity`](#baseentity).[`entityCategory`](#entitycategory-2) |
| <a id="icon-7"></a> `icon?` | `string` | - | [`BaseEntity`](#baseentity).[`icon`](#icon-1) |
| <a id="key-7"></a> `key` | `number` | - | [`BaseEntity`](#baseentity).[`key`](#key-1) |
| <a id="name-7"></a> `name` | `string` | - | [`BaseEntity`](#baseentity).[`name`](#name-1) |
| <a id="objectid-7"></a> `objectId` | `string` | - | [`BaseEntity`](#baseentity).[`objectId`](#objectid-1) |
| <a id="type-7"></a> `type` | `"date"` | [`BaseEntity`](#baseentity).[`type`](#type-1) | - |

***

### DateTimeEntity

DateTime entity for epoch timestamp values.

#### Extends

- [`BaseEntity`](#baseentity)

#### Properties

| Property | Type | Overrides | Inherited from |
| ------ | ------ | ------ | ------ |
| <a id="deviceid-8"></a> `deviceId?` | `number` | - | [`BaseEntity`](#baseentity).[`deviceId`](#deviceid-1) |
| <a id="disabledbydefault-8"></a> `disabledByDefault?` | `boolean` | - | [`BaseEntity`](#baseentity).[`disabledByDefault`](#disabledbydefault-1) |
| <a id="entitycategory-9"></a> `entityCategory?` | [`EntityCategory`](#entitycategory) | - | [`BaseEntity`](#baseentity).[`entityCategory`](#entitycategory-2) |
| <a id="icon-8"></a> `icon?` | `string` | - | [`BaseEntity`](#baseentity).[`icon`](#icon-1) |
| <a id="key-8"></a> `key` | `number` | - | [`BaseEntity`](#baseentity).[`key`](#key-1) |
| <a id="name-8"></a> `name` | `string` | - | [`BaseEntity`](#baseentity).[`name`](#name-1) |
| <a id="objectid-8"></a> `objectId` | `string` | - | [`BaseEntity`](#baseentity).[`objectId`](#objectid-1) |
| <a id="type-8"></a> `type` | `"datetime"` | [`BaseEntity`](#baseentity).[`type`](#type-1) | - |

***

### EventEntity

Event entity for event type tracking.

#### Extends

- [`BaseEntity`](#baseentity)

#### Properties

| Property | Type | Overrides | Inherited from |
| ------ | ------ | ------ | ------ |
| <a id="deviceclass-3"></a> `deviceClass?` | `string` | - | - |
| <a id="deviceid-9"></a> `deviceId?` | `number` | - | [`BaseEntity`](#baseentity).[`deviceId`](#deviceid-1) |
| <a id="disabledbydefault-9"></a> `disabledByDefault?` | `boolean` | - | [`BaseEntity`](#baseentity).[`disabledByDefault`](#disabledbydefault-1) |
| <a id="entitycategory-10"></a> `entityCategory?` | [`EntityCategory`](#entitycategory) | - | [`BaseEntity`](#baseentity).[`entityCategory`](#entitycategory-2) |
| <a id="eventtypes"></a> `eventTypes?` | `string`[] | - | - |
| <a id="icon-9"></a> `icon?` | `string` | - | [`BaseEntity`](#baseentity).[`icon`](#icon-1) |
| <a id="key-9"></a> `key` | `number` | - | [`BaseEntity`](#baseentity).[`key`](#key-1) |
| <a id="name-9"></a> `name` | `string` | - | [`BaseEntity`](#baseentity).[`name`](#name-1) |
| <a id="objectid-9"></a> `objectId` | `string` | - | [`BaseEntity`](#baseentity).[`objectId`](#objectid-1) |
| <a id="type-9"></a> `type` | `"event"` | [`BaseEntity`](#baseentity).[`type`](#type-1) | - |

***

### FanEntity

Fan entity with speed, oscillation, and direction control.

#### Extends

- [`BaseEntity`](#baseentity)

#### Properties

| Property | Type | Overrides | Inherited from |
| ------ | ------ | ------ | ------ |
| <a id="deviceid-10"></a> `deviceId?` | `number` | - | [`BaseEntity`](#baseentity).[`deviceId`](#deviceid-1) |
| <a id="disabledbydefault-10"></a> `disabledByDefault?` | `boolean` | - | [`BaseEntity`](#baseentity).[`disabledByDefault`](#disabledbydefault-1) |
| <a id="entitycategory-11"></a> `entityCategory?` | [`EntityCategory`](#entitycategory) | - | [`BaseEntity`](#baseentity).[`entityCategory`](#entitycategory-2) |
| <a id="icon-10"></a> `icon?` | `string` | - | [`BaseEntity`](#baseentity).[`icon`](#icon-1) |
| <a id="key-10"></a> `key` | `number` | - | [`BaseEntity`](#baseentity).[`key`](#key-1) |
| <a id="name-10"></a> `name` | `string` | - | [`BaseEntity`](#baseentity).[`name`](#name-1) |
| <a id="objectid-10"></a> `objectId` | `string` | - | [`BaseEntity`](#baseentity).[`objectId`](#objectid-1) |
| <a id="supportedpresetmodes"></a> `supportedPresetModes?` | `string`[] | - | - |
| <a id="supportedspeedcount"></a> `supportedSpeedCount?` | `number` | - | - |
| <a id="supportsdirection"></a> `supportsDirection?` | `boolean` | - | - |
| <a id="supportsoscillation"></a> `supportsOscillation?` | `boolean` | - | - |
| <a id="supportsspeed"></a> `supportsSpeed?` | `boolean` | - | - |
| <a id="type-10"></a> `type` | `"fan"` | [`BaseEntity`](#baseentity).[`type`](#type-1) | - |

***

### LightEntity

Light entity with brightness, color, and effect support. The supportedColorModes field contains numeric values corresponding to the ColorMode enum.

#### Extends

- [`BaseEntity`](#baseentity)

#### Properties

| Property | Type | Overrides | Inherited from |
| ------ | ------ | ------ | ------ |
| <a id="deviceid-11"></a> `deviceId?` | `number` | - | [`BaseEntity`](#baseentity).[`deviceId`](#deviceid-1) |
| <a id="disabledbydefault-11"></a> `disabledByDefault?` | `boolean` | - | [`BaseEntity`](#baseentity).[`disabledByDefault`](#disabledbydefault-1) |
| <a id="effects"></a> `effects?` | `string`[] | - | - |
| <a id="entitycategory-12"></a> `entityCategory?` | [`EntityCategory`](#entitycategory) | - | [`BaseEntity`](#baseentity).[`entityCategory`](#entitycategory-2) |
| <a id="icon-11"></a> `icon?` | `string` | - | [`BaseEntity`](#baseentity).[`icon`](#icon-1) |
| <a id="key-11"></a> `key` | `number` | - | [`BaseEntity`](#baseentity).[`key`](#key-1) |
| <a id="maxmireds"></a> `maxMireds?` | `number` | - | - |
| <a id="minmireds"></a> `minMireds?` | `number` | - | - |
| <a id="name-11"></a> `name` | `string` | - | [`BaseEntity`](#baseentity).[`name`](#name-1) |
| <a id="objectid-11"></a> `objectId` | `string` | - | [`BaseEntity`](#baseentity).[`objectId`](#objectid-1) |
| <a id="supportedcolormodes"></a> `supportedColorModes?` | `number`[] | - | - |
| <a id="type-11"></a> `type` | `"light"` | [`BaseEntity`](#baseentity).[`type`](#type-1) | - |

***

### LockEntity

Lock entity with lock/unlock/open control.

#### Extends

- [`BaseEntity`](#baseentity)

#### Properties

| Property | Type | Overrides | Inherited from |
| ------ | ------ | ------ | ------ |
| <a id="assumedstate-1"></a> `assumedState?` | `boolean` | - | - |
| <a id="codeformat"></a> `codeFormat?` | `string` | - | - |
| <a id="deviceid-12"></a> `deviceId?` | `number` | - | [`BaseEntity`](#baseentity).[`deviceId`](#deviceid-1) |
| <a id="disabledbydefault-12"></a> `disabledByDefault?` | `boolean` | - | [`BaseEntity`](#baseentity).[`disabledByDefault`](#disabledbydefault-1) |
| <a id="entitycategory-13"></a> `entityCategory?` | [`EntityCategory`](#entitycategory) | - | [`BaseEntity`](#baseentity).[`entityCategory`](#entitycategory-2) |
| <a id="icon-12"></a> `icon?` | `string` | - | [`BaseEntity`](#baseentity).[`icon`](#icon-1) |
| <a id="key-12"></a> `key` | `number` | - | [`BaseEntity`](#baseentity).[`key`](#key-1) |
| <a id="name-12"></a> `name` | `string` | - | [`BaseEntity`](#baseentity).[`name`](#name-1) |
| <a id="objectid-12"></a> `objectId` | `string` | - | [`BaseEntity`](#baseentity).[`objectId`](#objectid-1) |
| <a id="requirescode-1"></a> `requiresCode?` | `boolean` | - | - |
| <a id="supportsopen"></a> `supportsOpen?` | `boolean` | - | - |
| <a id="type-12"></a> `type` | `"lock"` | [`BaseEntity`](#baseentity).[`type`](#type-1) | - |

***

### MediaPlayerEntity

Media player entity with playback control and volume.

#### Extends

- [`BaseEntity`](#baseentity)

#### Properties

| Property | Type | Overrides | Inherited from |
| ------ | ------ | ------ | ------ |
| <a id="deviceid-13"></a> `deviceId?` | `number` | - | [`BaseEntity`](#baseentity).[`deviceId`](#deviceid-1) |
| <a id="disabledbydefault-13"></a> `disabledByDefault?` | `boolean` | - | [`BaseEntity`](#baseentity).[`disabledByDefault`](#disabledbydefault-1) |
| <a id="entitycategory-14"></a> `entityCategory?` | [`EntityCategory`](#entitycategory) | - | [`BaseEntity`](#baseentity).[`entityCategory`](#entitycategory-2) |
| <a id="featureflags"></a> `featureFlags?` | `number` | - | - |
| <a id="icon-13"></a> `icon?` | `string` | - | [`BaseEntity`](#baseentity).[`icon`](#icon-1) |
| <a id="key-13"></a> `key` | `number` | - | [`BaseEntity`](#baseentity).[`key`](#key-1) |
| <a id="name-13"></a> `name` | `string` | - | [`BaseEntity`](#baseentity).[`name`](#name-1) |
| <a id="objectid-13"></a> `objectId` | `string` | - | [`BaseEntity`](#baseentity).[`objectId`](#objectid-1) |
| <a id="supportspause"></a> `supportsPause?` | `boolean` | - | - |
| <a id="type-13"></a> `type` | `"media_player"` | [`BaseEntity`](#baseentity).[`type`](#type-1) | - |

***

### NumberEntity

Number entity for numeric values with min/max/step constraints.

#### Extends

- [`BaseEntity`](#baseentity)

#### Properties

| Property | Type | Overrides | Inherited from |
| ------ | ------ | ------ | ------ |
| <a id="deviceclass-4"></a> `deviceClass?` | `string` | - | - |
| <a id="deviceid-14"></a> `deviceId?` | `number` | - | [`BaseEntity`](#baseentity).[`deviceId`](#deviceid-1) |
| <a id="disabledbydefault-14"></a> `disabledByDefault?` | `boolean` | - | [`BaseEntity`](#baseentity).[`disabledByDefault`](#disabledbydefault-1) |
| <a id="entitycategory-15"></a> `entityCategory?` | [`EntityCategory`](#entitycategory) | - | [`BaseEntity`](#baseentity).[`entityCategory`](#entitycategory-2) |
| <a id="icon-14"></a> `icon?` | `string` | - | [`BaseEntity`](#baseentity).[`icon`](#icon-1) |
| <a id="key-14"></a> `key` | `number` | - | [`BaseEntity`](#baseentity).[`key`](#key-1) |
| <a id="maxvalue"></a> `maxValue?` | `number` | - | - |
| <a id="minvalue"></a> `minValue?` | `number` | - | - |
| <a id="mode"></a> `mode?` | [`NumberMode`](#numbermode) | - | - |
| <a id="name-14"></a> `name` | `string` | - | [`BaseEntity`](#baseentity).[`name`](#name-1) |
| <a id="objectid-14"></a> `objectId` | `string` | - | [`BaseEntity`](#baseentity).[`objectId`](#objectid-1) |
| <a id="step"></a> `step?` | `number` | - | - |
| <a id="type-14"></a> `type` | `"number"` | [`BaseEntity`](#baseentity).[`type`](#type-1) | - |
| <a id="unitofmeasurement"></a> `unitOfMeasurement?` | `string` | - | - |

***

### SelectEntity

Select entity for option selection from a predefined list.

#### Extends

- [`BaseEntity`](#baseentity)

#### Properties

| Property | Type | Overrides | Inherited from |
| ------ | ------ | ------ | ------ |
| <a id="deviceid-15"></a> `deviceId?` | `number` | - | [`BaseEntity`](#baseentity).[`deviceId`](#deviceid-1) |
| <a id="disabledbydefault-15"></a> `disabledByDefault?` | `boolean` | - | [`BaseEntity`](#baseentity).[`disabledByDefault`](#disabledbydefault-1) |
| <a id="entitycategory-16"></a> `entityCategory?` | [`EntityCategory`](#entitycategory) | - | [`BaseEntity`](#baseentity).[`entityCategory`](#entitycategory-2) |
| <a id="icon-15"></a> `icon?` | `string` | - | [`BaseEntity`](#baseentity).[`icon`](#icon-1) |
| <a id="key-15"></a> `key` | `number` | - | [`BaseEntity`](#baseentity).[`key`](#key-1) |
| <a id="name-15"></a> `name` | `string` | - | [`BaseEntity`](#baseentity).[`name`](#name-1) |
| <a id="objectid-15"></a> `objectId` | `string` | - | [`BaseEntity`](#baseentity).[`objectId`](#objectid-1) |
| <a id="options"></a> `options?` | `string`[] | - | - |
| <a id="type-15"></a> `type` | `"select"` | [`BaseEntity`](#baseentity).[`type`](#type-1) | - |

***

### SensorEntity

Sensor entity for numeric sensor readings with units and accuracy.

#### Extends

- [`BaseEntity`](#baseentity)

#### Properties

| Property | Type | Overrides | Inherited from |
| ------ | ------ | ------ | ------ |
| <a id="accuracydecimals"></a> `accuracyDecimals?` | `number` | - | - |
| <a id="deviceclass-5"></a> `deviceClass?` | `string` | - | - |
| <a id="deviceid-16"></a> `deviceId?` | `number` | - | [`BaseEntity`](#baseentity).[`deviceId`](#deviceid-1) |
| <a id="disabledbydefault-16"></a> `disabledByDefault?` | `boolean` | - | [`BaseEntity`](#baseentity).[`disabledByDefault`](#disabledbydefault-1) |
| <a id="entitycategory-17"></a> `entityCategory?` | [`EntityCategory`](#entitycategory) | - | [`BaseEntity`](#baseentity).[`entityCategory`](#entitycategory-2) |
| <a id="forceupdate"></a> `forceUpdate?` | `boolean` | - | - |
| <a id="icon-16"></a> `icon?` | `string` | - | [`BaseEntity`](#baseentity).[`icon`](#icon-1) |
| <a id="key-16"></a> `key` | `number` | - | [`BaseEntity`](#baseentity).[`key`](#key-1) |
| <a id="name-16"></a> `name` | `string` | - | [`BaseEntity`](#baseentity).[`name`](#name-1) |
| <a id="objectid-16"></a> `objectId` | `string` | - | [`BaseEntity`](#baseentity).[`objectId`](#objectid-1) |
| <a id="stateclass-1"></a> `stateClass?` | [`StateClass`](#stateclass) | - | - |
| <a id="type-16"></a> `type` | `"sensor"` | [`BaseEntity`](#baseentity).[`type`](#type-1) | - |
| <a id="unitofmeasurement-1"></a> `unitOfMeasurement?` | `string` | - | - |

***

### SirenEntity

Siren entity for alarm control with tones and volume.

#### Extends

- [`BaseEntity`](#baseentity)

#### Properties

| Property | Type | Overrides | Inherited from |
| ------ | ------ | ------ | ------ |
| <a id="deviceid-17"></a> `deviceId?` | `number` | - | [`BaseEntity`](#baseentity).[`deviceId`](#deviceid-1) |
| <a id="disabledbydefault-17"></a> `disabledByDefault?` | `boolean` | - | [`BaseEntity`](#baseentity).[`disabledByDefault`](#disabledbydefault-1) |
| <a id="entitycategory-18"></a> `entityCategory?` | [`EntityCategory`](#entitycategory) | - | [`BaseEntity`](#baseentity).[`entityCategory`](#entitycategory-2) |
| <a id="icon-17"></a> `icon?` | `string` | - | [`BaseEntity`](#baseentity).[`icon`](#icon-1) |
| <a id="key-17"></a> `key` | `number` | - | [`BaseEntity`](#baseentity).[`key`](#key-1) |
| <a id="name-17"></a> `name` | `string` | - | [`BaseEntity`](#baseentity).[`name`](#name-1) |
| <a id="objectid-17"></a> `objectId` | `string` | - | [`BaseEntity`](#baseentity).[`objectId`](#objectid-1) |
| <a id="supportsduration"></a> `supportsDuration?` | `boolean` | - | - |
| <a id="supportsvolume"></a> `supportsVolume?` | `boolean` | - | - |
| <a id="tones"></a> `tones?` | `string`[] | - | - |
| <a id="type-17"></a> `type` | `"siren"` | [`BaseEntity`](#baseentity).[`type`](#type-1) | - |

***

### SwitchEntity

Switch entity for boolean on/off control.

#### Extends

- [`BaseEntity`](#baseentity)

#### Properties

| Property | Type | Overrides | Inherited from |
| ------ | ------ | ------ | ------ |
| <a id="assumedstate-2"></a> `assumedState?` | `boolean` | - | - |
| <a id="deviceclass-6"></a> `deviceClass?` | `string` | - | - |
| <a id="deviceid-18"></a> `deviceId?` | `number` | - | [`BaseEntity`](#baseentity).[`deviceId`](#deviceid-1) |
| <a id="disabledbydefault-18"></a> `disabledByDefault?` | `boolean` | - | [`BaseEntity`](#baseentity).[`disabledByDefault`](#disabledbydefault-1) |
| <a id="entitycategory-19"></a> `entityCategory?` | [`EntityCategory`](#entitycategory) | - | [`BaseEntity`](#baseentity).[`entityCategory`](#entitycategory-2) |
| <a id="icon-18"></a> `icon?` | `string` | - | [`BaseEntity`](#baseentity).[`icon`](#icon-1) |
| <a id="key-18"></a> `key` | `number` | - | [`BaseEntity`](#baseentity).[`key`](#key-1) |
| <a id="name-18"></a> `name` | `string` | - | [`BaseEntity`](#baseentity).[`name`](#name-1) |
| <a id="objectid-18"></a> `objectId` | `string` | - | [`BaseEntity`](#baseentity).[`objectId`](#objectid-1) |
| <a id="type-18"></a> `type` | `"switch"` | [`BaseEntity`](#baseentity).[`type`](#type-1) | - |

***

### TextEntity

Text entity for string input values with length and pattern constraints.

#### Extends

- [`BaseEntity`](#baseentity)

#### Properties

| Property | Type | Overrides | Inherited from |
| ------ | ------ | ------ | ------ |
| <a id="deviceid-19"></a> `deviceId?` | `number` | - | [`BaseEntity`](#baseentity).[`deviceId`](#deviceid-1) |
| <a id="disabledbydefault-19"></a> `disabledByDefault?` | `boolean` | - | [`BaseEntity`](#baseentity).[`disabledByDefault`](#disabledbydefault-1) |
| <a id="entitycategory-20"></a> `entityCategory?` | [`EntityCategory`](#entitycategory) | - | [`BaseEntity`](#baseentity).[`entityCategory`](#entitycategory-2) |
| <a id="icon-19"></a> `icon?` | `string` | - | [`BaseEntity`](#baseentity).[`icon`](#icon-1) |
| <a id="key-19"></a> `key` | `number` | - | [`BaseEntity`](#baseentity).[`key`](#key-1) |
| <a id="maxlength"></a> `maxLength?` | `number` | - | - |
| <a id="minlength"></a> `minLength?` | `number` | - | - |
| <a id="mode-1"></a> `mode?` | [`TextMode`](#textmode) | - | - |
| <a id="name-19"></a> `name` | `string` | - | [`BaseEntity`](#baseentity).[`name`](#name-1) |
| <a id="objectid-19"></a> `objectId` | `string` | - | [`BaseEntity`](#baseentity).[`objectId`](#objectid-1) |
| <a id="pattern"></a> `pattern?` | `string` | - | - |
| <a id="type-19"></a> `type` | `"text"` | [`BaseEntity`](#baseentity).[`type`](#type-1) | - |

***

### TextSensorEntity

Text sensor entity for string sensor readings.

#### Extends

- [`BaseEntity`](#baseentity)

#### Properties

| Property | Type | Overrides | Inherited from |
| ------ | ------ | ------ | ------ |
| <a id="deviceclass-7"></a> `deviceClass?` | `string` | - | - |
| <a id="deviceid-20"></a> `deviceId?` | `number` | - | [`BaseEntity`](#baseentity).[`deviceId`](#deviceid-1) |
| <a id="disabledbydefault-20"></a> `disabledByDefault?` | `boolean` | - | [`BaseEntity`](#baseentity).[`disabledByDefault`](#disabledbydefault-1) |
| <a id="entitycategory-21"></a> `entityCategory?` | [`EntityCategory`](#entitycategory) | - | [`BaseEntity`](#baseentity).[`entityCategory`](#entitycategory-2) |
| <a id="icon-20"></a> `icon?` | `string` | - | [`BaseEntity`](#baseentity).[`icon`](#icon-1) |
| <a id="key-20"></a> `key` | `number` | - | [`BaseEntity`](#baseentity).[`key`](#key-1) |
| <a id="name-20"></a> `name` | `string` | - | [`BaseEntity`](#baseentity).[`name`](#name-1) |
| <a id="objectid-20"></a> `objectId` | `string` | - | [`BaseEntity`](#baseentity).[`objectId`](#objectid-1) |
| <a id="type-20"></a> `type` | `"text_sensor"` | [`BaseEntity`](#baseentity).[`type`](#type-1) | - |

***

### TimeEntity

Time entity for time values.

#### Extends

- [`BaseEntity`](#baseentity)

#### Properties

| Property | Type | Overrides | Inherited from |
| ------ | ------ | ------ | ------ |
| <a id="deviceid-21"></a> `deviceId?` | `number` | - | [`BaseEntity`](#baseentity).[`deviceId`](#deviceid-1) |
| <a id="disabledbydefault-21"></a> `disabledByDefault?` | `boolean` | - | [`BaseEntity`](#baseentity).[`disabledByDefault`](#disabledbydefault-1) |
| <a id="entitycategory-22"></a> `entityCategory?` | [`EntityCategory`](#entitycategory) | - | [`BaseEntity`](#baseentity).[`entityCategory`](#entitycategory-2) |
| <a id="icon-21"></a> `icon?` | `string` | - | [`BaseEntity`](#baseentity).[`icon`](#icon-1) |
| <a id="key-21"></a> `key` | `number` | - | [`BaseEntity`](#baseentity).[`key`](#key-1) |
| <a id="name-21"></a> `name` | `string` | - | [`BaseEntity`](#baseentity).[`name`](#name-1) |
| <a id="objectid-21"></a> `objectId` | `string` | - | [`BaseEntity`](#baseentity).[`objectId`](#objectid-1) |
| <a id="type-21"></a> `type` | `"time"` | [`BaseEntity`](#baseentity).[`type`](#type-1) | - |

***

### UpdateEntity

Update entity for firmware update control.

#### Extends

- [`BaseEntity`](#baseentity)

#### Properties

| Property | Type | Overrides | Inherited from |
| ------ | ------ | ------ | ------ |
| <a id="deviceclass-8"></a> `deviceClass?` | `string` | - | - |
| <a id="deviceid-22"></a> `deviceId?` | `number` | - | [`BaseEntity`](#baseentity).[`deviceId`](#deviceid-1) |
| <a id="disabledbydefault-22"></a> `disabledByDefault?` | `boolean` | - | [`BaseEntity`](#baseentity).[`disabledByDefault`](#disabledbydefault-1) |
| <a id="entitycategory-23"></a> `entityCategory?` | [`EntityCategory`](#entitycategory) | - | [`BaseEntity`](#baseentity).[`entityCategory`](#entitycategory-2) |
| <a id="icon-22"></a> `icon?` | `string` | - | [`BaseEntity`](#baseentity).[`icon`](#icon-1) |
| <a id="key-22"></a> `key` | `number` | - | [`BaseEntity`](#baseentity).[`key`](#key-1) |
| <a id="name-22"></a> `name` | `string` | - | [`BaseEntity`](#baseentity).[`name`](#name-1) |
| <a id="objectid-22"></a> `objectId` | `string` | - | [`BaseEntity`](#baseentity).[`objectId`](#objectid-1) |
| <a id="type-22"></a> `type` | `"update"` | [`BaseEntity`](#baseentity).[`type`](#type-1) | - |

***

### ValveEntity

Valve entity for position control with operation state.

#### Extends

- [`BaseEntity`](#baseentity)

#### Properties

| Property | Type | Overrides | Inherited from |
| ------ | ------ | ------ | ------ |
| <a id="assumedstate-3"></a> `assumedState?` | `boolean` | - | - |
| <a id="deviceclass-9"></a> `deviceClass?` | `string` | - | - |
| <a id="deviceid-23"></a> `deviceId?` | `number` | - | [`BaseEntity`](#baseentity).[`deviceId`](#deviceid-1) |
| <a id="disabledbydefault-23"></a> `disabledByDefault?` | `boolean` | - | [`BaseEntity`](#baseentity).[`disabledByDefault`](#disabledbydefault-1) |
| <a id="entitycategory-24"></a> `entityCategory?` | [`EntityCategory`](#entitycategory) | - | [`BaseEntity`](#baseentity).[`entityCategory`](#entitycategory-2) |
| <a id="icon-23"></a> `icon?` | `string` | - | [`BaseEntity`](#baseentity).[`icon`](#icon-1) |
| <a id="key-23"></a> `key` | `number` | - | [`BaseEntity`](#baseentity).[`key`](#key-1) |
| <a id="name-23"></a> `name` | `string` | - | [`BaseEntity`](#baseentity).[`name`](#name-1) |
| <a id="objectid-23"></a> `objectId` | `string` | - | [`BaseEntity`](#baseentity).[`objectId`](#objectid-1) |
| <a id="supportsposition-1"></a> `supportsPosition?` | `boolean` | - | - |
| <a id="supportsstop-1"></a> `supportsStop?` | `boolean` | - | - |
| <a id="type-23"></a> `type` | `"valve"` | [`BaseEntity`](#baseentity).[`type`](#type-1) | - |

## Type Aliases

### Entity

```ts
type Entity = 
  | AlarmControlPanelEntity
  | BinarySensorEntity
  | ButtonEntity
  | CameraEntity
  | ClimateEntity
  | CoverEntity
  | DateEntity
  | DateTimeEntity
  | EventEntity
  | FanEntity
  | LightEntity
  | LockEntity
  | MediaPlayerEntity
  | NumberEntity
  | SelectEntity
  | SensorEntity
  | SirenEntity
  | SwitchEntity
  | TextEntity
  | TextSensorEntity
  | TimeEntity
  | UpdateEntity
  | ValveEntity;
```

Discriminated union of all entity types. The type field serves as the discriminant for type narrowing.

***

### EntityType

```ts
type EntityType = 
  | "alarm_control_panel"
  | "binary_sensor"
  | "button"
  | "camera"
  | "climate"
  | "cover"
  | "date"
  | "datetime"
  | "event"
  | "fan"
  | "light"
  | "lock"
  | "media_player"
  | "number"
  | "select"
  | "sensor"
  | "siren"
  | "switch"
  | "text"
  | "text_sensor"
  | "time"
  | "update"
  | "valve";
```

Union type of all entity type strings. This provides type-safe entity type discrimination.
