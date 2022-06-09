
if (typeof gdjs.evtsExt__Webduino_MQTT__isConnected !== "undefined") {
  gdjs.evtsExt__Webduino_MQTT__isConnected.registeredGdjsCallbacks.forEach(callback =>
    gdjs._unregisterCallback(callback)
  );
}

gdjs.evtsExt__Webduino_MQTT__isConnected = {};

gdjs.evtsExt__Webduino_MQTT__isConnected.conditionTrue_0 = {val:false};
gdjs.evtsExt__Webduino_MQTT__isConnected.condition0IsTrue_0 = {val:false};


gdjs.evtsExt__Webduino_MQTT__isConnected.userFunc0x994658 = function(runtimeScene, eventsFunctionContext) {
"use strict";
eventsFunctionContext.returnValue =
    gdjs.evtTools.webduinoMqtt.connection && gdjs.evtTools.webduinoMqtt.connection.connected;

};
gdjs.evtsExt__Webduino_MQTT__isConnected.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


gdjs.evtsExt__Webduino_MQTT__isConnected.userFunc0x994658(runtimeScene, typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined);

}


};

gdjs.evtsExt__Webduino_MQTT__isConnected.func = function(runtimeScene, parentEventsFunctionContext) {
var eventsFunctionContext = {
  _objectsMap: {
},
  _objectArraysMap: {
},
  _behaviorNamesMap: {
},
  getObjects: function(objectName) {
    return eventsFunctionContext._objectArraysMap[objectName] || [];
  },
  getObjectsLists: function(objectName) {
    return eventsFunctionContext._objectsMap[objectName] || null;
  },
  getBehaviorName: function(behaviorName) {
    return eventsFunctionContext._behaviorNamesMap[behaviorName];
  },
  createObject: function(objectName) {
    var objectsList = eventsFunctionContext._objectsMap[objectName];
    if (objectsList) {
      const object = parentEventsFunctionContext ?
        parentEventsFunctionContext.createObject(objectsList.firstKey()) :
        runtimeScene.createObject(objectsList.firstKey());
      if (object) {
        objectsList.get(objectsList.firstKey()).push(object);
        eventsFunctionContext._objectArraysMap[objectName].push(object);
      }
      return object;    }
    return null;
  },
  getLayer: function(layerName) {
    return runtimeScene.getLayer(layerName);
  },
  getArgument: function(argName) {
    return "";
  },
  getOnceTriggers: function() { return runtimeScene.getOnceTriggers(); }
};


gdjs.evtsExt__Webduino_MQTT__isConnected.eventsList0(runtimeScene, eventsFunctionContext);
return !!eventsFunctionContext.returnValue;
}

gdjs.evtsExt__Webduino_MQTT__isConnected.registeredGdjsCallbacks = [];