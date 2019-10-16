import { useState, useEffect } from "react";

/* State */
const createStateLayer = (state, props = {}) => {
  if (!state) return props;

  const definedState = state(props);
  const definedStateKeys = Object.keys(definedState);

  const createStateUpdaterFunction = key => {
    return key.charAt(0).toUpperCase() + key.slice(1);
  };

  return definedStateKeys.reduce(
    (acc, stateKey) => {
      const stateInitialValue = definedState[stateKey];
      const [stateValue, setStateFunction] = useState(stateInitialValue);

      return {
        ...acc,
        ...props,
        [stateKey]: stateValue,
        [`set${createStateUpdaterFunction(stateKey)}`]: setStateFunction
      };
    },
    { ...props }
  );
};

/* Data */
const createDataLayer = (data, props) => {
  if (!data) return props;

  const definedData = data(props);
  const definedDataKeys = Object.keys(definedData);

  return definedDataKeys.reduce((acc, dataKey) => {
    const currentData = definedData[dataKey];

    return {
      ...acc,
      ...props,
      [dataKey]: currentData
    };
  }, {});
};

/* Handlers */
const createHandlersLayer = (handlers, props) => {
  if (!handlers) return props;

  const definedHandlersKeys = Object.keys(handlers);

  return definedHandlersKeys.reduce((acc, handler) => {
    const currentHandler = handlers[handler];

    return {
      ...acc,
      ...props,
      [handler]: currentHandler({ ...acc, ...props })
    };
  }, {});
};

/* Effects */
const createEffectsLayer = (effects, props) => {
  if (!effects) return props;

  effects(useEffect, props);
};

/* PropsMapper */
const createPropsMapperLayer = (propsMapper, props) => {
  if (!propsMapper) return props;

  return {
    ...props,
    ...propsMapper(props)
  };
};

const useLogicLayers = (props = {}) => ({
  state,
  data,
  handlers,
  effects,
  propsMapper
}) => {
  const stateLayer = createStateLayer(state, props);
  const dataLayer = createDataLayer(data, stateLayer);
  const handlersLayer = createHandlersLayer(handlers, dataLayer);
  const propsMapperLayer = createPropsMapperLayer(propsMapper, handlersLayer);

  createEffectsLayer(effects, propsMapperLayer);

  return {
    ...stateLayer,
    ...dataLayer,
    ...handlersLayer,
    ...propsMapperLayer
  };
};

export default useLogicLayers;
