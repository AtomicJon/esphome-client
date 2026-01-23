<SPAN ALIGN="CENTER" STYLE="text-align:center">
<DIV ALIGN="CENTER" STYLE="text-align:center">

[![esphome-client: ESPHome Client API](https://raw.githubusercontent.com/hjdhjd/esphome-client/main/esphome-logo.svg)](https://github.com/hjdhjd/esphome-client)

# ESPHome Client API

[![Downloads](https://img.shields.io/npm/dt/esphome-client?color=%2318BCF2&logo=icloud&logoColor=%2318BCF2&style=for-the-badge)](https://www.npmjs.com/package/esphome-client)
[![Version](https://img.shields.io/npm/v/esphome-client?color=%2318BCF2&label=ESPHome%20Client%20API&logo=esphome&logoColor=%2318BCF2&style=for-the-badge)](https://www.npmjs.com/package/esphome-client)

## A complete Node-native ESPHome API client implementation with full protocol support.
</DIV>
</SPAN>

`esphome-client` is a comprehensive library that enables you to connect to and communicate with ESPHome devices using their native API protocol. [ESPHome](https://esphome.io) is an open-source system for controlling ESP8266/ESP32 microcontrollers using simple yet powerful configuration files and control them remotely through home automation systems.

## Why use this library for ESPHome support?
In short - because I use it every day to support a very popular [Homebridge](https://homebridge.io) plugin named [homebridge-ratgdo](https://www.npmjs.com/package/homebridge-ratgdo) that I maintain. This library has been extracted and refined from real-world usage to provide a robust foundation for ESPHome communication.

What makes this implementation unique is that it's **completely Node-native** - there are no external dependencies, no WebAssembly modules, and no native code compilation required. All encryption support is provided by Node.js's built-in crypto module, making installation and deployment straightforward and reliable across all platforms.

The library implements the complete Noise Protocol Framework (specifically Noise_NNpsk0_25519_ChaChaPoly_SHA256) for secure communication with ESPHome devices, with automatic fallback to plaintext connections when encryption is not required or available.

Finally - the most significant reason that you should use this library: it's well-tested in production, it is modern TypeScript, and most importantly, *it just works*. The library handles all the complexity of the ESPHome native API protocol, including automatic encryption negotiation, entity discovery, and real-time state updates.

### Features
- **Zero external dependencies** - Uses only Node.js built-in modules
- **Complete protocol implementation** - Full support for all ESPHome entity types and message types
- **Secure encryption** - Complete Noise Protocol implementation using Node's native crypto
- **Automatic encryption negotiation** - Seamlessly handles both encrypted and plaintext connections
- **Entity discovery** - Automatically discovers all entities exposed by the ESPHome device
- **Real-time updates** - Receive instant telemetry updates for all entity states
- **Voice assistant support** - Full implementation of ESPHome's voice assistant features
- **Type-safe API** - Full TypeScript support with comprehensive type definitions
- **Production tested** - Battle-tested in the popular homebridge-ratgdo plugin
- **Protocol-compliant** - Carefully verified against the official ESPHome protocol specification

## Supported Message Types

### ✅ Fully Implemented
This library provides complete support for the ESPHome native API protocol:

#### Core Protocol
- `HELLO_REQUEST` / `HELLO_RESPONSE` - Initial handshake with protocol version verification
- `CONNECT_REQUEST` / `CONNECT_RESPONSE` - Connection establishment
- `DISCONNECT_REQUEST` / `DISCONNECT_RESPONSE` - Clean disconnection
- `PING_REQUEST` / `PING_RESPONSE` - Keep-alive and latency monitoring
- `DEVICE_INFO_REQUEST` / `DEVICE_INFO_RESPONSE` - Complete device metadata retrieval

#### Entity Discovery (All Types Supported)
- `LIST_ENTITIES_ALARM_CONTROL_PANEL_RESPONSE` - Alarm panel discovery
- `LIST_ENTITIES_BINARY_SENSOR_RESPONSE` - Binary sensor discovery
- `LIST_ENTITIES_BUTTON_RESPONSE` - Button discovery
- `LIST_ENTITIES_CAMERA_RESPONSE` - Camera discovery
- `LIST_ENTITIES_CLIMATE_RESPONSE` - Climate/HVAC discovery
- `LIST_ENTITIES_COVER_RESPONSE` - Cover (garage door, blind, etc.) discovery
- `LIST_ENTITIES_DATE_RESPONSE` - Date entity discovery
- `LIST_ENTITIES_DATETIME_RESPONSE` - DateTime entity discovery
- `LIST_ENTITIES_EVENT_RESPONSE` - Event entity discovery
- `LIST_ENTITIES_FAN_RESPONSE` - Fan discovery with speed and oscillation
- `LIST_ENTITIES_LIGHT_RESPONSE` - Light discovery with effects and color modes
- `LIST_ENTITIES_LOCK_RESPONSE` - Lock discovery
- `LIST_ENTITIES_MEDIA_PLAYER_RESPONSE` - Media player discovery
- `LIST_ENTITIES_NUMBER_RESPONSE` - Number entity discovery
- `LIST_ENTITIES_REQUEST` / `LIST_ENTITIES_DONE_RESPONSE` - Entity enumeration
- `LIST_ENTITIES_SELECT_RESPONSE` - Select/dropdown discovery
- `LIST_ENTITIES_SENSOR_RESPONSE` - Sensor discovery
- `LIST_ENTITIES_SERVICES_RESPONSE` - User-defined service discovery
- `LIST_ENTITIES_SWITCH_RESPONSE` - Switch discovery
- `LIST_ENTITIES_TEXT_RESPONSE` - Text input discovery
- `LIST_ENTITIES_TEXT_SENSOR_RESPONSE` - Text sensor discovery
- `LIST_ENTITIES_TIME_RESPONSE` - Time entity discovery
- `LIST_ENTITIES_UPDATE_RESPONSE` - Update entity discovery
- `LIST_ENTITIES_VALVE_RESPONSE` - Valve discovery

#### State Updates (All Types Supported)
- `ALARM_CONTROL_PANEL_STATE_RESPONSE` - Alarm panel state
- `BINARY_SENSOR_STATE_RESPONSE` - Binary sensor state updates
- `BUTTON_STATE_RESPONSE` - Button state (not typically used)
- `CLIMATE_STATE_RESPONSE` - Climate state with modes and temperatures
- `COVER_STATE_RESPONSE` - Cover state with position and tilt
- `DATE_STATE_RESPONSE` - Date value updates
- `DATETIME_STATE_RESPONSE` - DateTime value updates
- `EVENT_RESPONSE` - Event triggers
- `FAN_STATE_RESPONSE` - Fan state with speed and oscillation
- `LIGHT_STATE_RESPONSE` - Light state with color and effects
- `LOCK_STATE_RESPONSE` - Lock state updates
- `MEDIA_PLAYER_STATE_RESPONSE` - Media player state
- `NUMBER_STATE_RESPONSE` - Number value updates
- `SELECT_STATE_RESPONSE` - Select option updates
- `SENSOR_STATE_RESPONSE` - Sensor value updates
- `SUBSCRIBE_STATES_REQUEST` - Subscribe to state changes
- `SWITCH_STATE_RESPONSE` - Switch state updates
- `TEXT_SENSOR_STATE_RESPONSE` - Text sensor updates
- `TEXT_STATE_RESPONSE` - Text value updates
- `TIME_STATE_RESPONSE` - Time value updates
- `UPDATE_STATE_RESPONSE` - Update availability
- `VALVE_STATE_RESPONSE` - Valve state with position

#### Commands (All Types Supported)
- `ALARM_CONTROL_PANEL_COMMAND_REQUEST` - Alarm control with codes
- `BUTTON_COMMAND_REQUEST` - Trigger button actions
- `CLIMATE_COMMAND_REQUEST` - Climate control (mode, temperature, fan, swing)
- `COVER_COMMAND_REQUEST` - Cover control (open/close/stop, position, tilt)
- `DATE_COMMAND_REQUEST` - Set date values
- `DATETIME_COMMAND_REQUEST` - Set datetime values
- `FAN_COMMAND_REQUEST` - Fan control (speed, oscillation, direction)
- `LIGHT_COMMAND_REQUEST` - Full light control (on/off, brightness, color, effects)
- `LOCK_COMMAND_REQUEST` - Lock control (lock/unlock with optional code)
- `MEDIA_PLAYER_COMMAND_REQUEST` - Media player control
- `NUMBER_COMMAND_REQUEST` - Set number values
- `SELECT_COMMAND_REQUEST` - Select options
- `SWITCH_COMMAND_REQUEST` - Control switches
- `TEXT_COMMAND_REQUEST` - Set text values
- `TIME_COMMAND_REQUEST` - Set time values
- `UPDATE_COMMAND_REQUEST` - Trigger updates
- `VALVE_COMMAND_REQUEST` - Valve control (open/close, position)

#### Advanced Features
- `CAMERA_IMAGE_REQUEST` / `CAMERA_IMAGE_RESPONSE` - Camera image capture
- `EXECUTE_SERVICE_REQUEST` - Execute user-defined services
- `GET_TIME_REQUEST` / `GET_TIME_RESPONSE` - Time synchronization
- `SUBSCRIBE_LOGS_REQUEST` / `SUBSCRIBE_LOGS_RESPONSE` - Device log streaming

#### Voice Assistant Support
- `SUBSCRIBE_VOICE_ASSISTANT_REQUEST` - Voice assistant subscription
- `VOICE_ASSISTANT_ANNOUNCE_REQUEST` / `VOICE_ASSISTANT_ANNOUNCE_FINISHED` - Announcements
- `VOICE_ASSISTANT_AUDIO` - Bidirectional audio streaming
- `VOICE_ASSISTANT_CONFIGURATION_REQUEST` / `VOICE_ASSISTANT_CONFIGURATION_RESPONSE` - Configuration
- `VOICE_ASSISTANT_EVENT_RESPONSE` - Voice assistant events
- `VOICE_ASSISTANT_REQUEST` - Voice requests from device
- `VOICE_ASSISTANT_RESPONSE` - Voice responses to device
- `VOICE_ASSISTANT_SET_CONFIGURATION` - Wake word configuration
- `VOICE_ASSISTANT_TIMER_EVENT_RESPONSE` - Timer events

#### Security Features
- `NOISE_ENCRYPTION_SET_KEY_REQUEST` / `NOISE_ENCRYPTION_SET_KEY_RESPONSE` - Dynamic key updates

### Protocol Compliance
This implementation has been carefully verified against the official ESPHome protocol specification (`api.proto`). All field numbers, data types, and message structures exactly match the protocol definition as of v1.12 of the native ESPHome protocol. The library correctly:

- Handles all required and optional fields
- Properly encodes/decodes varint, fixed32, and length-delimited fields
- Avoids all deprecated functionality (e.g., legacy cover commands, deprecated fan speed)
- Correctly implements device_id fields for multi-device support
- Properly handles missing state indicators for sensors

## Installation
To use this library in Node, install it from the command line:

```sh
npm install esphome-client
```

### Requirements

- **Node.js 20 or later** - This library uses modern Node.js features and APIs
- **Node.js only** - This library is not compatible with browsers. It relies on Node.js built-in modules (`net` for TCP sockets, `crypto` for encryption) that are not available in browser environments.
- **ESPHome 2025.10 or later** - Earlier ESPHome firmware versions are not supported.

### Command Line Tool
The package includes `espc`, a CLI utility for interacting with ESPHome devices:

```sh
# Display device information
espc --host 192.168.1.100 info

# List all entities
espc --host esp-device.local --psk MySecret123 list

# Control entities (auto-detects type)
espc --host 192.168.1.100 control bedroom_light on
espc --host 192.168.1.100 control garage_door open

# Monitor real-time telemetry
espc --host 192.168.1.100 monitor --duration 60

# Interactive mode for exploration
espc --host 192.168.1.100 -i
```

The CLI supports all ESPHome entity types including switches, lights, covers, fans, locks, climate controls, and more. Use `espc --help` for full documentation.

## Entity ID Format

All command methods and state events use entity IDs to identify specific entities on the device. Entity IDs follow the pattern:

```
{type}-{object_id}
```

Where:
- **type** is one of the 22 supported entity types: `alarm_control_panel`, `binary_sensor`, `button`, `climate`, `cover`, `date`, `datetime`, `event`, `fan`, `light`, `lock`, `media_player`, `number`, `select`, `sensor`, `siren`, `switch`, `text`, `text_sensor`, `time`, `update`, `valve`
- **object_id** is the ID specified in your ESPHome YAML configuration (the `id` field of the component)

Examples:
- `light-bedroom_lamp` - A light with `id: bedroom_lamp` in the ESPHome config
- `switch-relay_1` - A switch with `id: relay_1`
- `sensor-temperature` - A sensor with `id: temperature`
- `cover-garage_door` - A cover with `id: garage_door`
- `climate-thermostat` - A climate entity with `id: thermostat`

To discover all entity IDs on a connected device, use `client.logAllEntityIds()` after connection or listen to the `entities` event.

## Quick Start

### Basic Connection
```typescript
import { EspHomeClient, LogLevel } from "esphome-client";

// Create a client instance. Available options: clientId, host (required), logger, port, psk, serverName.
const client = new EspHomeClient({
  clientId: "my-esphome-app",
  host: "192.168.1.100",
  port: 6053
});

// Listen for connection events. The callback receives a boolean indicating if the connection is encrypted.
client.on("connect", (encrypted) => {
  console.log("Connected to ESPHome device (encrypted: " + encrypted + ")");

  // Subscribe to device logs at INFO level.
  client.subscribeToLogs(LogLevel.INFO);

  // Log all discovered entity IDs to help identify available entities.
  client.logAllEntityIds();
});

// Listen for discovered entities. This fires after the device reports all configured entities.
// Each entity is a typed object with extended metadata: icon, deviceClass, unitOfMeasurement,
// stateClass, entityCategory, and type-specific fields (e.g., effects for lights, options for selects).
client.on("entities", (entities) => {
  console.log("Discovered entities:", entities);
});

// Listen for device information. Contains device name, version, model, MAC address, and more.
client.on("deviceInfo", (info) => {
  console.log("Device: " + info.name + " v" + info.esphomeVersion);
  console.log("Model: " + info.model + ", MAC: " + info.macAddress);
});

// Handle disconnection events.
client.on("disconnect", (reason) => {
  console.log("Disconnected from device: " + reason);
});

// Connect to the device. This is a synchronous call that initiates the connection.
client.connect();
```

### Encrypted Connection
```typescript
import { EspHomeClient } from "esphome-client";

// Create a client with encryption using the pre-shared key from your ESPHome YAML configuration.
// The psk value should be the base64-encoded key from your ESPHome device's api.encryption.key setting.
const client = new EspHomeClient({
  host: "192.168.1.100",
  psk: "your-base64-encoded-psk-from-esphome-yaml"
});

// The client will automatically attempt encrypted connection when psk is provided.
// If the device does not support encryption, it falls back to plaintext automatically.
client.on("connect", (encrypted) => {
  if(encrypted) {
    console.log("Secure connection established.");
  } else {
    console.log("Connected without encryption (device may not support it).");
  }
});

client.connect();
```

### Controlling Entities
```typescript
import { EspHomeClient, MediaPlayerCommand } from "esphome-client";

// All command methods are synchronous (return void) and use entity IDs in the format: {type}-{object_id}

// Control switches - turn on or off.
client.sendSwitchCommand("switch-garage_light", true);
client.sendSwitchCommand("switch-garage_light", false);

// Control buttons - trigger a press action.
client.sendButtonCommand("button-restart");

// Control lights with various options.
client.sendLightCommand("light-living_room", {
  brightness: 0.8,
  colorTemperature: 4000,
  effect: "Rainbow",
  rgb: { b: 0, g: 128, r: 255 },
  state: true,
  transitionLength: 2000
});

// Turn off a light.
client.sendLightCommand("light-living_room", { state: false });

// Control covers using position (0.0 = closed, 1.0 = open) or stop.
client.sendCoverCommand("cover-garage_door", { position: 1.0 });
client.sendCoverCommand("cover-garage_door", { position: 0.0 });
client.sendCoverCommand("cover-garage_door", { stop: true });
client.sendCoverCommand("cover-blinds", { position: 0.5, tilt: 0.25 });

// Control climate/HVAC using string mode values.
client.sendClimateCommand("climate-thermostat", {
  fanMode: "auto",
  mode: "heat_cool",
  swingMode: "vertical",
  targetTemperature: 22,
  targetTemperatureHigh: 24,
  targetTemperatureLow: 20
});

// Control fans with speed level (0-100), oscillation, and direction.
client.sendFanCommand("fan-bedroom", {
  direction: "forward",
  oscillating: true,
  speedLevel: 75,
  state: true
});

// Control locks using string commands.
client.sendLockCommand("lock-front_door", "lock");
client.sendLockCommand("lock-front_door", "unlock", "1234");
client.sendLockCommand("lock-front_door", "open");

// Control media players using the MediaPlayerCommand enum.
client.sendMediaPlayerCommand("media_player-speaker", {
  command: MediaPlayerCommand.PLAY,
  mediaUrl: "http://example.com/audio.mp3",
  volume: 0.5
});

// Control number entities.
client.sendNumberCommand("number-target_temperature", 72.5);

// Control select entities.
client.sendSelectCommand("select-hvac_mode", "cooling");

// Control text entities.
client.sendTextCommand("text-device_name", "Living Room Sensor");

// Control date entities.
client.sendDateCommand("date-schedule", 2025, 12, 25);

// Control time entities.
client.sendTimeCommand("time-alarm", 7, 30, 0);

// Control datetime entities using epoch seconds.
client.sendDateTimeCommand("datetime-last_update", Math.floor(Date.now() / 1000));

// Control alarm panels using string commands.
client.sendAlarmControlPanelCommand("alarm_control_panel-home", "arm_away", "1234");
client.sendAlarmControlPanelCommand("alarm_control_panel-home", "disarm", "1234");

// Control sirens.
client.sendSirenCommand("siren-alarm", { duration: 30, state: true, tone: "alarm", volume: 0.8 });

// Control valves using position (0.0 = closed, 1.0 = open).
client.sendValveCommand("valve-water_main", { position: 1.0 });
client.sendValveCommand("valve-water_main", { stop: true });

// Check for and install firmware updates.
client.sendUpdateCommand("update-firmware", "check");
client.sendUpdateCommand("update-firmware", "update");

// Execute user-defined services by name.
client.executeServiceByName("play_rtttl", [
  { stringValue: "mario:d=4,o=5,b=100:16e6,16e6,32p,8e6" }
]);
```

### Real-time State Monitoring
```typescript
import { EspHomeClient, LogLevel } from "esphome-client";

// Listen to sensor updates. Each event includes entity name, key, state value, and missingState flag.
client.on("sensor", (data) => {
  if(!data.missingState) {
    console.log("Sensor " + data.entity + ": " + data.state);
  }
});

// Listen to binary sensor updates. State is a boolean (true/false).
client.on("binary_sensor", (data) => {
  console.log("Binary sensor " + data.entity + ": " + (data.state ? "ON" : "OFF"));
});

// Listen to switch state changes.
client.on("switch", (data) => {
  console.log("Switch " + data.entity + ": " + (data.state ? "ON" : "OFF"));
});

// Listen to climate state updates. Contains mode, temperatures, fan mode, and action.
client.on("climate", (data) => {
  console.log("Climate " + data.entity + ":");
  console.log("  Mode: " + data.mode + ", Action: " + data.action);
  console.log("  Current: " + data.currentTemperature + ", Target: " + data.targetTemperature);
});

// Listen to cover state updates. Contains position, tilt, and current operation.
client.on("cover", (data) => {
  console.log("Cover " + data.entity + ": position=" + data.position + ", operation=" + data.currentOperation);
});

// Listen to light state updates.
client.on("light", (data) => {
  console.log("Light " + data.entity + ": " + (data.state ? "ON" : "OFF") + ", brightness=" + data.brightness);
});

// Listen to all telemetry updates via the generic telemetry event.
client.on("telemetry", (data) => {
  console.log("Telemetry [" + data.type + "] " + data.entity + ":", data);
});

// Monitor device logs. Level is a LogLevel enum value.
client.on("log", (data) => {
  console.log("[" + LogLevel[data.level] + "] " + data.message);
});
```

### Voice Assistant Integration
```typescript
import { EspHomeClient, VoiceAssistantEvent, VoiceAssistantSubscribeFlag } from "esphome-client";

// Subscribe to voice assistant with audio streaming support.
client.subscribeVoiceAssistant(VoiceAssistantSubscribeFlag.API_AUDIO);

// Handle voice assistant requests from the device.
client.on("voiceAssistantRequest", (data) => {
  console.log("Voice request - conversation: " + data.conversationId);
  console.log("  Flags: " + data.flags + ", wake word: " + data.wakeWordPhrase);

  // Respond with the audio port for streaming (or error flag).
  const audioPort = 12345;
  client.sendVoiceAssistantResponse(audioPort, false);
});

// Handle incoming audio data from the device. The event provides data (Buffer) and end (boolean) properties.
client.on("voiceAssistantAudio", (audioData) => {
  console.log("Received audio chunk: " + audioData.data.length + " bytes, end: " + audioData.end);
});

// Send voice assistant events to indicate processing stages.
client.sendVoiceAssistantEvent(VoiceAssistantEvent.WAKE_WORD_START);
client.sendVoiceAssistantEvent(VoiceAssistantEvent.STT_END, [
  { name: "text", value: "Turn on the living room lights" }
]);

// Request and configure wake words.
client.requestVoiceAssistantConfiguration();

client.on("voiceAssistantConfiguration", (config) => {
  console.log("Available wake words:", config.availableWakeWords);
  console.log("Active wake words:", config.activeWakeWords);
  console.log("Max active:", config.maxActiveWakeWords);

  // Set active wake words.
  client.setVoiceAssistantConfiguration(["alexa", "hey_jarvis"]);
});

// Handle announcement completion.
client.on("voiceAssistantAnnounceFinished", (success) => {
  console.log("Announcement finished, success: " + success);
});
```

### Custom Logger
```typescript
import { EspHomeClient } from "esphome-client";
import type { EspHomeLogging } from "esphome-client";

// We define a custom logger that implements the EspHomeLogging interface. All four methods (debug, error, info, warn) are required. By default, the library logs
// to the console, but you can redirect output to your own logging infrastructure.
const customLogger: EspHomeLogging = {

  debug: (message, ...params) => console.debug("[DEBUG]", message, ...params),
  error: (message, ...params) => console.error("[ERROR]", message, ...params),
  info: (message, ...params) => console.info("[INFO]", message, ...params),
  warn: (message, ...params) => console.warn("[WARN]", message, ...params)
};

// We pass the logger in the client options.
const client = new EspHomeClient({

  host: "192.168.1.100",
  logger: customLogger
});
```

## Noise Protocol Encryption

This library includes a complete, Node-native implementation of the Noise Protocol Framework, specifically the `Noise_NNpsk0_25519_ChaChaPoly_SHA256` handshake pattern used by ESPHome. The implementation:

- Uses only Node.js built-in crypto functions
- Supports X25519 key exchange
- Implements ChaCha20-Poly1305 AEAD encryption
- Handles the complete handshake and transport encryption
- Automatically falls back to plaintext when encryption is not available

### Using the Noise Protocol Directly
```typescript
import { Socket } from "net";
import { createESPHomeHandshake } from "esphome-client";

// The createESPHomeHandshake function creates a HandshakeState configured for ESPHome.
// Options: psk (required Buffer), role (optional, defaults to "initiator"), logger (optional).
const handshake = createESPHomeHandshake({
  psk: Buffer.from("your-base64-encoded-psk", "base64")
});

// Example: Manual handshake over a TCP socket.
const socket = new Socket();

socket.connect(6053, "192.168.1.100", () => {
  // Step 1: Write the first handshake message (client hello with ephemeral key).
  const clientHello = handshake.writeMessage();

  // Frame it for ESPHome: [0x01][length_high][length_low][payload]
  const frame = Buffer.alloc(3 + clientHello.length);
  frame[0] = 0x01;
  frame[1] = (clientHello.length >> 8) & 0xff;
  frame[2] = clientHello.length & 0xff;
  clientHello.copy(frame, 3);
  socket.write(frame);
});

socket.on("data", (data) => {
  if(!handshake.isComplete) {
    // Step 2: Process the server's handshake response.
    // Skip the 3-byte frame header to get the payload.
    const serverResponse = data.subarray(3);
    handshake.readMessage(serverResponse);

    if(handshake.isComplete) {
      console.log("Handshake complete. Encryption established.");

      // Now use the cipher states for all subsequent communication.
      // sendCipher encrypts outgoing messages, receiveCipher decrypts incoming.
      const plaintext = Buffer.from("Hello ESPHome");
      const encrypted = handshake.sendCipher.EncryptWithAd(Buffer.alloc(0), plaintext);
      console.log("Encrypted message length:", encrypted.length);
    }
  } else {
    // Decrypt incoming encrypted messages.
    const payload = data.subarray(3);
    const decrypted = handshake.receiveCipher.DecryptWithAd(Buffer.alloc(0), payload);
    console.log("Decrypted message:", decrypted);
  }
});
```

## API Documentation

Complete API documentation is available in the [docs](https://github.com/hjdhjd/esphome-client/tree/main/docs) directory. The library provides comprehensive TypeScript definitions for all message types, entity types, and protocol structures.

### Key Classes and Interfaces

- `EspHomeClient` - Main client class for device communication
  - Event-driven architecture extending Node.js EventEmitter
  - Automatic encryption negotiation with plaintext fallback
  - Complete entity discovery and state caching
  - Type-safe command methods for all 22 entity types

- `HandshakeState` - Noise protocol handshake implementation
  - Complete Noise_NNpsk0_25519_ChaChaPoly_SHA256 implementation
  - Cipher state management via `sendCipher` and `receiveCipher`
  - Methods: `writeMessage()`, `readMessage()`, `isComplete` property

- `CipherState` - Encryption/decryption after handshake completion
  - `EncryptWithAd(ad, plaintext)` - Encrypt with associated data
  - `DecryptWithAd(ad, ciphertext)` - Decrypt with associated data

- `createESPHomeHandshake` - Factory for ESPHome-specific Noise handshakes
  - Configures correct prologue (`NoiseAPIInit`) for ESPHome compatibility
  - Options: `psk` (Buffer), `role` (optional), `logger` (optional)

### Event Types

All events are fully typed with TypeScript definitions:

- Connection events: `connect`, `disconnect`, `error`
- Discovery events: `entities`, `services`, `deviceInfo`
- State events: One for each entity type (e.g., `switch`, `sensor`, `light`)
- System events: `log`, `heartbeat`, `timeSync`
- Voice events: `voiceAssistantRequest`, `voiceAssistantConfiguration`

For a real-world example of this library in action, check out [homebridge-ratgdo](https://github.com/hjdhjd/homebridge-ratgdo), which uses this library to provide HomeKit integration for ratgdo garage door controllers.

## Protocol Details

The ESPHome native API uses a binary protocol based on Protocol Buffers over TCP (default port 6053). Messages are framed with either:

- **Plaintext**: `[0x00][length_varint][type_varint][payload]`
- **Encrypted**: `[0x01][size_high][size_low][encrypted_payload]`

The library handles all protocol details automatically, including:

- Message framing and parsing
- Varint encoding/decoding
- Protocol buffer field encoding (without requiring protobuf libraries)
- Automatic encryption negotiation
- Connection state management
- Entity discovery and caching
- Proper handling of all field types (varint, fixed32, fixed64, length-delimited)

## Contributing

Contributions are welcome! The library has complete protocol support, but there are always opportunities for improvement:

1. **Testing** - Add unit tests and integration tests
2. **Documentation** - Improve examples and API documentation
3. **Bug fixes** - Report and fix any issues you encounter

Please ensure all code follows the existing style and includes appropriate TypeScript types.

## Library Development Dashboard
This is mostly of interest to the true developer nerds amongst us.

[![License](https://img.shields.io/npm/l/esphome-client?color=%2318BCF2&logo=open%20source%20initiative&logoColor=%2318BCF2&style=for-the-badge)](https://github.com/hjdhjd/esphome-client/blob/main/LICENSE.md)
[![Build Status](https://img.shields.io/github/actions/workflow/status/hjdhjd/esphome-client/ci.yml?branch=main&color=%2318BCF2&logo=github-actions&logoColor=%2318BCF2&style=for-the-badge)](https://github.com/hjdhjd/esphome-client/actions?query=workflow%3A%22Continuous+Integration%22)
[![Dependencies](https://img.shields.io/librariesio/release/npm/esphome-client?color=%2318BCF2&logo=dependabot&style=for-the-badge)](https://libraries.io/npm/esphome-client)
[![GitHub commits since latest release (by SemVer)](https://img.shields.io/github/commits-since/hjdhjd/esphome-client/latest?color=%2318BCF2&logo=github&sort=semver&style=for-the-badge)](https://github.com/hjdhjd/esphome-client/commits/main)