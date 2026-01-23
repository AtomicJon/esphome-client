[**esphome-client**](../README.md)

***

[Home](../README.md) / protocol/message-types

# protocol/message-types

ESPHome API message type identifiers for protocol communication.

## Enumerations

### MessageType

We support almost all of the ESPHome API message types. These message types define the protocol communication between the client and the ESPHome device.

#### Enumeration Members

| Enumeration Member | Value |
| ------ | ------ |
| <a id="alarm_control_panel_command_request"></a> `ALARM_CONTROL_PANEL_COMMAND_REQUEST` | `96` |
| <a id="alarm_control_panel_state_response"></a> `ALARM_CONTROL_PANEL_STATE_RESPONSE` | `95` |
| <a id="authentication_request"></a> `AUTHENTICATION_REQUEST` | `3` |
| <a id="authentication_response"></a> `AUTHENTICATION_RESPONSE` | `4` |
| <a id="binary_sensor_state_response"></a> `BINARY_SENSOR_STATE_RESPONSE` | `21` |
| <a id="button_command_request"></a> `BUTTON_COMMAND_REQUEST` | `62` |
| <a id="camera_image_request"></a> `CAMERA_IMAGE_REQUEST` | `45` |
| <a id="camera_image_response"></a> `CAMERA_IMAGE_RESPONSE` | `44` |
| <a id="climate_command_request"></a> `CLIMATE_COMMAND_REQUEST` | `48` |
| <a id="climate_state_response"></a> `CLIMATE_STATE_RESPONSE` | `47` |
| <a id="connect_request"></a> `CONNECT_REQUEST` | `3` |
| <a id="connect_response"></a> `CONNECT_RESPONSE` | `4` |
| <a id="cover_command_request"></a> `COVER_COMMAND_REQUEST` | `30` |
| <a id="cover_state_response"></a> `COVER_STATE_RESPONSE` | `22` |
| <a id="date_command_request"></a> `DATE_COMMAND_REQUEST` | `102` |
| <a id="date_state_response"></a> `DATE_STATE_RESPONSE` | `101` |
| <a id="datetime_command_request"></a> `DATETIME_COMMAND_REQUEST` | `114` |
| <a id="datetime_state_response"></a> `DATETIME_STATE_RESPONSE` | `113` |
| <a id="device_info_request"></a> `DEVICE_INFO_REQUEST` | `9` |
| <a id="device_info_response"></a> `DEVICE_INFO_RESPONSE` | `10` |
| <a id="disconnect_request"></a> `DISCONNECT_REQUEST` | `5` |
| <a id="disconnect_response"></a> `DISCONNECT_RESPONSE` | `6` |
| <a id="event_response"></a> `EVENT_RESPONSE` | `108` |
| <a id="execute_service_request"></a> `EXECUTE_SERVICE_REQUEST` | `42` |
| <a id="fan_command_request"></a> `FAN_COMMAND_REQUEST` | `31` |
| <a id="fan_state_response"></a> `FAN_STATE_RESPONSE` | `23` |
| <a id="get_time_request"></a> `GET_TIME_REQUEST` | `36` |
| <a id="get_time_response"></a> `GET_TIME_RESPONSE` | `37` |
| <a id="hello_request"></a> `HELLO_REQUEST` | `1` |
| <a id="hello_response"></a> `HELLO_RESPONSE` | `2` |
| <a id="home_assistant_state_response"></a> `HOME_ASSISTANT_STATE_RESPONSE` | `40` |
| <a id="homeassistant_service_response"></a> `HOMEASSISTANT_SERVICE_RESPONSE` | `35` |
| <a id="light_command_request"></a> `LIGHT_COMMAND_REQUEST` | `32` |
| <a id="light_state_response"></a> `LIGHT_STATE_RESPONSE` | `24` |
| <a id="list_entities_alarm_control_panel_response"></a> `LIST_ENTITIES_ALARM_CONTROL_PANEL_RESPONSE` | `94` |
| <a id="list_entities_binary_sensor_response"></a> `LIST_ENTITIES_BINARY_SENSOR_RESPONSE` | `12` |
| <a id="list_entities_button_response"></a> `LIST_ENTITIES_BUTTON_RESPONSE` | `61` |
| <a id="list_entities_camera_response"></a> `LIST_ENTITIES_CAMERA_RESPONSE` | `43` |
| <a id="list_entities_climate_response"></a> `LIST_ENTITIES_CLIMATE_RESPONSE` | `46` |
| <a id="list_entities_cover_response"></a> `LIST_ENTITIES_COVER_RESPONSE` | `13` |
| <a id="list_entities_date_response"></a> `LIST_ENTITIES_DATE_RESPONSE` | `100` |
| <a id="list_entities_datetime_response"></a> `LIST_ENTITIES_DATETIME_RESPONSE` | `112` |
| <a id="list_entities_done_response"></a> `LIST_ENTITIES_DONE_RESPONSE` | `19` |
| <a id="list_entities_event_response"></a> `LIST_ENTITIES_EVENT_RESPONSE` | `107` |
| <a id="list_entities_fan_response"></a> `LIST_ENTITIES_FAN_RESPONSE` | `14` |
| <a id="list_entities_light_response"></a> `LIST_ENTITIES_LIGHT_RESPONSE` | `15` |
| <a id="list_entities_lock_response"></a> `LIST_ENTITIES_LOCK_RESPONSE` | `58` |
| <a id="list_entities_media_player_response"></a> `LIST_ENTITIES_MEDIA_PLAYER_RESPONSE` | `63` |
| <a id="list_entities_number_response"></a> `LIST_ENTITIES_NUMBER_RESPONSE` | `49` |
| <a id="list_entities_request"></a> `LIST_ENTITIES_REQUEST` | `11` |
| <a id="list_entities_select_response"></a> `LIST_ENTITIES_SELECT_RESPONSE` | `52` |
| <a id="list_entities_sensor_response"></a> `LIST_ENTITIES_SENSOR_RESPONSE` | `16` |
| <a id="list_entities_services_response"></a> `LIST_ENTITIES_SERVICES_RESPONSE` | `41` |
| <a id="list_entities_siren_response"></a> `LIST_ENTITIES_SIREN_RESPONSE` | `55` |
| <a id="list_entities_switch_response"></a> `LIST_ENTITIES_SWITCH_RESPONSE` | `17` |
| <a id="list_entities_text_response"></a> `LIST_ENTITIES_TEXT_RESPONSE` | `97` |
| <a id="list_entities_text_sensor_response"></a> `LIST_ENTITIES_TEXT_SENSOR_RESPONSE` | `18` |
| <a id="list_entities_time_response"></a> `LIST_ENTITIES_TIME_RESPONSE` | `103` |
| <a id="list_entities_update_response"></a> `LIST_ENTITIES_UPDATE_RESPONSE` | `116` |
| <a id="list_entities_valve_response"></a> `LIST_ENTITIES_VALVE_RESPONSE` | `109` |
| <a id="lock_command_request"></a> `LOCK_COMMAND_REQUEST` | `60` |
| <a id="lock_state_response"></a> `LOCK_STATE_RESPONSE` | `59` |
| <a id="media_player_command_request"></a> `MEDIA_PLAYER_COMMAND_REQUEST` | `65` |
| <a id="media_player_state_response"></a> `MEDIA_PLAYER_STATE_RESPONSE` | `64` |
| <a id="noise_encryption_set_key_request"></a> `NOISE_ENCRYPTION_SET_KEY_REQUEST` | `124` |
| <a id="noise_encryption_set_key_response"></a> `NOISE_ENCRYPTION_SET_KEY_RESPONSE` | `125` |
| <a id="number_command_request"></a> `NUMBER_COMMAND_REQUEST` | `51` |
| <a id="number_state_response"></a> `NUMBER_STATE_RESPONSE` | `50` |
| <a id="ping_request"></a> `PING_REQUEST` | `7` |
| <a id="ping_response"></a> `PING_RESPONSE` | `8` |
| <a id="select_command_request"></a> `SELECT_COMMAND_REQUEST` | `54` |
| <a id="select_state_response"></a> `SELECT_STATE_RESPONSE` | `53` |
| <a id="sensor_state_response"></a> `SENSOR_STATE_RESPONSE` | `25` |
| <a id="siren_command_request"></a> `SIREN_COMMAND_REQUEST` | `57` |
| <a id="siren_state_response"></a> `SIREN_STATE_RESPONSE` | `56` |
| <a id="subscribe_home_assistant_state_response"></a> `SUBSCRIBE_HOME_ASSISTANT_STATE_RESPONSE` | `39` |
| <a id="subscribe_home_assistant_states_request"></a> `SUBSCRIBE_HOME_ASSISTANT_STATES_REQUEST` | `38` |
| <a id="subscribe_homeassistant_services_request"></a> `SUBSCRIBE_HOMEASSISTANT_SERVICES_REQUEST` | `34` |
| <a id="subscribe_logs_request"></a> `SUBSCRIBE_LOGS_REQUEST` | `28` |
| <a id="subscribe_logs_response"></a> `SUBSCRIBE_LOGS_RESPONSE` | `29` |
| <a id="subscribe_states_request"></a> `SUBSCRIBE_STATES_REQUEST` | `20` |
| <a id="subscribe_voice_assistant_request"></a> `SUBSCRIBE_VOICE_ASSISTANT_REQUEST` | `89` |
| <a id="switch_command_request"></a> `SWITCH_COMMAND_REQUEST` | `33` |
| <a id="switch_state_response"></a> `SWITCH_STATE_RESPONSE` | `26` |
| <a id="text_command_request"></a> `TEXT_COMMAND_REQUEST` | `99` |
| <a id="text_sensor_state_response"></a> `TEXT_SENSOR_STATE_RESPONSE` | `27` |
| <a id="text_state_response"></a> `TEXT_STATE_RESPONSE` | `98` |
| <a id="time_command_request"></a> `TIME_COMMAND_REQUEST` | `105` |
| <a id="time_state_response"></a> `TIME_STATE_RESPONSE` | `104` |
| <a id="update_command_request"></a> `UPDATE_COMMAND_REQUEST` | `118` |
| <a id="update_state_response"></a> `UPDATE_STATE_RESPONSE` | `117` |
| <a id="valve_command_request"></a> `VALVE_COMMAND_REQUEST` | `111` |
| <a id="valve_state_response"></a> `VALVE_STATE_RESPONSE` | `110` |
| <a id="voice_assistant_announce_finished"></a> `VOICE_ASSISTANT_ANNOUNCE_FINISHED` | `120` |
| <a id="voice_assistant_announce_request"></a> `VOICE_ASSISTANT_ANNOUNCE_REQUEST` | `119` |
| <a id="voice_assistant_audio"></a> `VOICE_ASSISTANT_AUDIO` | `106` |
| <a id="voice_assistant_configuration_request"></a> `VOICE_ASSISTANT_CONFIGURATION_REQUEST` | `121` |
| <a id="voice_assistant_configuration_response"></a> `VOICE_ASSISTANT_CONFIGURATION_RESPONSE` | `122` |
| <a id="voice_assistant_event_response"></a> `VOICE_ASSISTANT_EVENT_RESPONSE` | `92` |
| <a id="voice_assistant_request"></a> `VOICE_ASSISTANT_REQUEST` | `90` |
| <a id="voice_assistant_response"></a> `VOICE_ASSISTANT_RESPONSE` | `91` |
| <a id="voice_assistant_set_configuration"></a> `VOICE_ASSISTANT_SET_CONFIGURATION` | `123` |
| <a id="voice_assistant_timer_event_response"></a> `VOICE_ASSISTANT_TIMER_EVENT_RESPONSE` | `115` |
