(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["identity-IdentityManager-js"],{

/***/ "2ByA":
/*!***************************************************************!*\
  !*** ./node_modules/@arcgis/core/identity/IdentityManager.js ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return s; });
/* harmony import */ var _kernel_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../kernel.js */ "975N");
/* harmony import */ var _IdentityManagerBase_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./IdentityManagerBase.js */ "rDsY");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
class r extends _IdentityManagerBase_js__WEBPACK_IMPORTED_MODULE_1__["IdentityManagerBase"]{}r.prototype.declaredClass="esri.identity.IdentityManager";const s=new r;Object(_kernel_js__WEBPACK_IMPORTED_MODULE_0__["setId"])(s);


/***/ }),

/***/ "4Wwy":
/*!********************************************************!*\
  !*** ./node_modules/focus-trap/dist/focus-trap.esm.js ***!
  \********************************************************/
/*! exports provided: createFocusTrap */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createFocusTrap", function() { return createFocusTrap; });
/* harmony import */ var tabbable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tabbable */ "YvcI");
/*!
* focus-trap 6.7.3
* @license MIT, https://github.com/focus-trap/focus-trap/blob/master/LICENSE
*/


function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    enumerableOnly && (symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    })), keys.push.apply(keys, symbols);
  }

  return keys;
}

function _objectSpread2(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = null != arguments[i] ? arguments[i] : {};
    i % 2 ? ownKeys(Object(source), !0).forEach(function (key) {
      _defineProperty(target, key, source[key]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) {
      Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
    });
  }

  return target;
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

var activeFocusTraps = function () {
  var trapQueue = [];
  return {
    activateTrap: function activateTrap(trap) {
      if (trapQueue.length > 0) {
        var activeTrap = trapQueue[trapQueue.length - 1];

        if (activeTrap !== trap) {
          activeTrap.pause();
        }
      }

      var trapIndex = trapQueue.indexOf(trap);

      if (trapIndex === -1) {
        trapQueue.push(trap);
      } else {
        // move this existing trap to the front of the queue
        trapQueue.splice(trapIndex, 1);
        trapQueue.push(trap);
      }
    },
    deactivateTrap: function deactivateTrap(trap) {
      var trapIndex = trapQueue.indexOf(trap);

      if (trapIndex !== -1) {
        trapQueue.splice(trapIndex, 1);
      }

      if (trapQueue.length > 0) {
        trapQueue[trapQueue.length - 1].unpause();
      }
    }
  };
}();

var isSelectableInput = function isSelectableInput(node) {
  return node.tagName && node.tagName.toLowerCase() === 'input' && typeof node.select === 'function';
};

var isEscapeEvent = function isEscapeEvent(e) {
  return e.key === 'Escape' || e.key === 'Esc' || e.keyCode === 27;
};

var isTabEvent = function isTabEvent(e) {
  return e.key === 'Tab' || e.keyCode === 9;
};

var delay = function delay(fn) {
  return setTimeout(fn, 0);
}; // Array.find/findIndex() are not supported on IE; this replicates enough
//  of Array.findIndex() for our needs


var findIndex = function findIndex(arr, fn) {
  var idx = -1;
  arr.every(function (value, i) {
    if (fn(value)) {
      idx = i;
      return false; // break
    }

    return true; // next
  });
  return idx;
};
/**
 * Get an option's value when it could be a plain value, or a handler that provides
 *  the value.
 * @param {*} value Option's value to check.
 * @param {...*} [params] Any parameters to pass to the handler, if `value` is a function.
 * @returns {*} The `value`, or the handler's returned value.
 */


var valueOrHandler = function valueOrHandler(value) {
  for (var _len = arguments.length, params = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    params[_key - 1] = arguments[_key];
  }

  return typeof value === 'function' ? value.apply(void 0, params) : value;
};

var getActualTarget = function getActualTarget(event) {
  // NOTE: If the trap is _inside_ a shadow DOM, event.target will always be the
  //  shadow host. However, event.target.composedPath() will be an array of
  //  nodes "clicked" from inner-most (the actual element inside the shadow) to
  //  outer-most (the host HTML document). If we have access to composedPath(),
  //  then use its first element; otherwise, fall back to event.target (and
  //  this only works for an _open_ shadow DOM; otherwise,
  //  composedPath()[0] === event.target always).
  return event.target.shadowRoot && typeof event.composedPath === 'function' ? event.composedPath()[0] : event.target;
};

var createFocusTrap = function createFocusTrap(elements, userOptions) {
  // SSR: a live trap shouldn't be created in this type of environment so this
  //  should be safe code to execute if the `document` option isn't specified
  var doc = (userOptions === null || userOptions === void 0 ? void 0 : userOptions.document) || document;

  var config = _objectSpread2({
    returnFocusOnDeactivate: true,
    escapeDeactivates: true,
    delayInitialFocus: true
  }, userOptions);

  var state = {
    // @type {Array<HTMLElement>}
    containers: [],
    // list of objects identifying the first and last tabbable nodes in all containers/groups in
    //  the trap
    // NOTE: it's possible that a group has no tabbable nodes if nodes get removed while the trap
    //  is active, but the trap should never get to a state where there isn't at least one group
    //  with at least one tabbable node in it (that would lead to an error condition that would
    //  result in an error being thrown)
    // @type {Array<{
    //   container: HTMLElement,
    //   firstTabbableNode: HTMLElement|null,
    //   lastTabbableNode: HTMLElement|null,
    //   nextTabbableNode: (node: HTMLElement, forward: boolean) => HTMLElement|undefined
    // }>}
    tabbableGroups: [],
    nodeFocusedBeforeActivation: null,
    mostRecentlyFocusedNode: null,
    active: false,
    paused: false,
    // timer ID for when delayInitialFocus is true and initial focus in this trap
    //  has been delayed during activation
    delayInitialFocusTimer: undefined
  };
  var trap; // eslint-disable-line prefer-const -- some private functions reference it, and its methods reference private functions, so we must declare here and define later

  var getOption = function getOption(configOverrideOptions, optionName, configOptionName) {
    return configOverrideOptions && configOverrideOptions[optionName] !== undefined ? configOverrideOptions[optionName] : config[configOptionName || optionName];
  };

  var containersContain = function containersContain(element) {
    return !!(element && state.containers.some(function (container) {
      return container.contains(element);
    }));
  };
  /**
   * Gets the node for the given option, which is expected to be an option that
   *  can be either a DOM node, a string that is a selector to get a node, `false`
   *  (if a node is explicitly NOT given), or a function that returns any of these
   *  values.
   * @param {string} optionName
   * @returns {undefined | false | HTMLElement | SVGElement} Returns
   *  `undefined` if the option is not specified; `false` if the option
   *  resolved to `false` (node explicitly not given); otherwise, the resolved
   *  DOM node.
   * @throws {Error} If the option is set, not `false`, and is not, or does not
   *  resolve to a node.
   */


  var getNodeForOption = function getNodeForOption(optionName) {
    var optionValue = config[optionName];

    if (typeof optionValue === 'function') {
      for (var _len2 = arguments.length, params = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
        params[_key2 - 1] = arguments[_key2];
      }

      optionValue = optionValue.apply(void 0, params);
    }

    if (!optionValue) {
      if (optionValue === undefined || optionValue === false) {
        return optionValue;
      } // else, empty string (invalid), null (invalid), 0 (invalid)


      throw new Error("`".concat(optionName, "` was specified but was not a node, or did not return a node"));
    }

    var node = optionValue; // could be HTMLElement, SVGElement, or non-empty string at this point

    if (typeof optionValue === 'string') {
      node = doc.querySelector(optionValue); // resolve to node, or null if fails

      if (!node) {
        throw new Error("`".concat(optionName, "` as selector refers to no known node"));
      }
    }

    return node;
  };

  var getInitialFocusNode = function getInitialFocusNode() {
    var node = getNodeForOption('initialFocus'); // false explicitly indicates we want no initialFocus at all

    if (node === false) {
      return false;
    }

    if (node === undefined) {
      // option not specified: use fallback options
      if (containersContain(doc.activeElement)) {
        node = doc.activeElement;
      } else {
        var firstTabbableGroup = state.tabbableGroups[0];
        var firstTabbableNode = firstTabbableGroup && firstTabbableGroup.firstTabbableNode; // NOTE: `fallbackFocus` option function cannot return `false` (not supported)

        node = firstTabbableNode || getNodeForOption('fallbackFocus');
      }
    }

    if (!node) {
      throw new Error('Your focus-trap needs to have at least one focusable element');
    }

    return node;
  };

  var updateTabbableNodes = function updateTabbableNodes() {
    state.tabbableGroups = state.containers.map(function (container) {
      var tabbableNodes = Object(tabbable__WEBPACK_IMPORTED_MODULE_0__["tabbable"])(container); // NOTE: if we have tabbable nodes, we must have focusable nodes; focusable nodes
      //  are a superset of tabbable nodes

      var focusableNodes = Object(tabbable__WEBPACK_IMPORTED_MODULE_0__["focusable"])(container);

      if (tabbableNodes.length > 0) {
        return {
          container: container,
          firstTabbableNode: tabbableNodes[0],
          lastTabbableNode: tabbableNodes[tabbableNodes.length - 1],

          /**
           * Finds the __tabbable__ node that follows the given node in the specified direction,
           *  in this container, if any.
           * @param {HTMLElement} node
           * @param {boolean} [forward] True if going in forward tab order; false if going
           *  in reverse.
           * @returns {HTMLElement|undefined} The next tabbable node, if any.
           */
          nextTabbableNode: function nextTabbableNode(node) {
            var forward = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
            // NOTE: If tabindex is positive (in order to manipulate the tab order separate
            //  from the DOM order), this __will not work__ because the list of focusableNodes,
            //  while it contains tabbable nodes, does not sort its nodes in any order other
            //  than DOM order, because it can't: Where would you place focusable (but not
            //  tabbable) nodes in that order? They have no order, because they aren't tabbale...
            // Support for positive tabindex is already broken and hard to manage (possibly
            //  not supportable, TBD), so this isn't going to make things worse than they
            //  already are, and at least makes things better for the majority of cases where
            //  tabindex is either 0/unset or negative.
            // FYI, positive tabindex issue: https://github.com/focus-trap/focus-trap/issues/375
            var nodeIdx = focusableNodes.findIndex(function (n) {
              return n === node;
            });

            if (forward) {
              return focusableNodes.slice(nodeIdx + 1).find(function (n) {
                return Object(tabbable__WEBPACK_IMPORTED_MODULE_0__["isTabbable"])(n);
              });
            }

            return focusableNodes.slice(0, nodeIdx).reverse().find(function (n) {
              return Object(tabbable__WEBPACK_IMPORTED_MODULE_0__["isTabbable"])(n);
            });
          }
        };
      }

      return undefined;
    }).filter(function (group) {
      return !!group;
    }); // remove groups with no tabbable nodes
    // throw if no groups have tabbable nodes and we don't have a fallback focus node either

    if (state.tabbableGroups.length <= 0 && !getNodeForOption('fallbackFocus') // returning false not supported for this option
    ) {
      throw new Error('Your focus-trap must have at least one container with at least one tabbable node in it at all times');
    }
  };

  var tryFocus = function tryFocus(node) {
    if (node === false) {
      return;
    }

    if (node === doc.activeElement) {
      return;
    }

    if (!node || !node.focus) {
      tryFocus(getInitialFocusNode());
      return;
    }

    node.focus({
      preventScroll: !!config.preventScroll
    });
    state.mostRecentlyFocusedNode = node;

    if (isSelectableInput(node)) {
      node.select();
    }
  };

  var getReturnFocusNode = function getReturnFocusNode(previousActiveElement) {
    var node = getNodeForOption('setReturnFocus', previousActiveElement);
    return node ? node : node === false ? false : previousActiveElement;
  }; // This needs to be done on mousedown and touchstart instead of click
  // so that it precedes the focus event.


  var checkPointerDown = function checkPointerDown(e) {
    var target = getActualTarget(e);

    if (containersContain(target)) {
      // allow the click since it ocurred inside the trap
      return;
    }

    if (valueOrHandler(config.clickOutsideDeactivates, e)) {
      // immediately deactivate the trap
      trap.deactivate({
        // if, on deactivation, we should return focus to the node originally-focused
        //  when the trap was activated (or the configured `setReturnFocus` node),
        //  then assume it's also OK to return focus to the outside node that was
        //  just clicked, causing deactivation, as long as that node is focusable;
        //  if it isn't focusable, then return focus to the original node focused
        //  on activation (or the configured `setReturnFocus` node)
        // NOTE: by setting `returnFocus: false`, deactivate() will do nothing,
        //  which will result in the outside click setting focus to the node
        //  that was clicked, whether it's focusable or not; by setting
        //  `returnFocus: true`, we'll attempt to re-focus the node originally-focused
        //  on activation (or the configured `setReturnFocus` node)
        returnFocus: config.returnFocusOnDeactivate && !Object(tabbable__WEBPACK_IMPORTED_MODULE_0__["isFocusable"])(target)
      });
      return;
    } // This is needed for mobile devices.
    // (If we'll only let `click` events through,
    // then on mobile they will be blocked anyways if `touchstart` is blocked.)


    if (valueOrHandler(config.allowOutsideClick, e)) {
      // allow the click outside the trap to take place
      return;
    } // otherwise, prevent the click


    e.preventDefault();
  }; // In case focus escapes the trap for some strange reason, pull it back in.


  var checkFocusIn = function checkFocusIn(e) {
    var target = getActualTarget(e);
    var targetContained = containersContain(target); // In Firefox when you Tab out of an iframe the Document is briefly focused.

    if (targetContained || target instanceof Document) {
      if (targetContained) {
        state.mostRecentlyFocusedNode = target;
      }
    } else {
      // escaped! pull it back in to where it just left
      e.stopImmediatePropagation();
      tryFocus(state.mostRecentlyFocusedNode || getInitialFocusNode());
    }
  }; // Hijack Tab events on the first and last focusable nodes of the trap,
  // in order to prevent focus from escaping. If it escapes for even a
  // moment it can end up scrolling the page and causing confusion so we
  // kind of need to capture the action at the keydown phase.


  var checkTab = function checkTab(e) {
    var target = getActualTarget(e);
    updateTabbableNodes();
    var destinationNode = null;

    if (state.tabbableGroups.length > 0) {
      // make sure the target is actually contained in a group
      // NOTE: the target may also be the container itself if it's focusable
      //  with tabIndex='-1' and was given initial focus
      var containerIndex = findIndex(state.tabbableGroups, function (_ref) {
        var container = _ref.container;
        return container.contains(target);
      });
      var containerGroup = containerIndex >= 0 ? state.tabbableGroups[containerIndex] : undefined;

      if (containerIndex < 0) {
        // target not found in any group: quite possible focus has escaped the trap,
        //  so bring it back in to...
        if (e.shiftKey) {
          // ...the last node in the last group
          destinationNode = state.tabbableGroups[state.tabbableGroups.length - 1].lastTabbableNode;
        } else {
          // ...the first node in the first group
          destinationNode = state.tabbableGroups[0].firstTabbableNode;
        }
      } else if (e.shiftKey) {
        // REVERSE
        // is the target the first tabbable node in a group?
        var startOfGroupIndex = findIndex(state.tabbableGroups, function (_ref2) {
          var firstTabbableNode = _ref2.firstTabbableNode;
          return target === firstTabbableNode;
        });

        if (startOfGroupIndex < 0 && (containerGroup.container === target || Object(tabbable__WEBPACK_IMPORTED_MODULE_0__["isFocusable"])(target) && !Object(tabbable__WEBPACK_IMPORTED_MODULE_0__["isTabbable"])(target) && !containerGroup.nextTabbableNode(target, false))) {
          // an exception case where the target is either the container itself, or
          //  a non-tabbable node that was given focus (i.e. tabindex is negative
          //  and user clicked on it or node was programmatically given focus)
          //  and is not followed by any other tabbable node, in which
          //  case, we should handle shift+tab as if focus were on the container's
          //  first tabbable node, and go to the last tabbable node of the LAST group
          startOfGroupIndex = containerIndex;
        }

        if (startOfGroupIndex >= 0) {
          // YES: then shift+tab should go to the last tabbable node in the
          //  previous group (and wrap around to the last tabbable node of
          //  the LAST group if it's the first tabbable node of the FIRST group)
          var destinationGroupIndex = startOfGroupIndex === 0 ? state.tabbableGroups.length - 1 : startOfGroupIndex - 1;
          var destinationGroup = state.tabbableGroups[destinationGroupIndex];
          destinationNode = destinationGroup.lastTabbableNode;
        }
      } else {
        // FORWARD
        // is the target the last tabbable node in a group?
        var lastOfGroupIndex = findIndex(state.tabbableGroups, function (_ref3) {
          var lastTabbableNode = _ref3.lastTabbableNode;
          return target === lastTabbableNode;
        });

        if (lastOfGroupIndex < 0 && (containerGroup.container === target || Object(tabbable__WEBPACK_IMPORTED_MODULE_0__["isFocusable"])(target) && !Object(tabbable__WEBPACK_IMPORTED_MODULE_0__["isTabbable"])(target) && !containerGroup.nextTabbableNode(target))) {
          // an exception case where the target is the container itself, or
          //  a non-tabbable node that was given focus (i.e. tabindex is negative
          //  and user clicked on it or node was programmatically given focus)
          //  and is not followed by any other tabbable node, in which
          //  case, we should handle tab as if focus were on the container's
          //  last tabbable node, and go to the first tabbable node of the FIRST group
          lastOfGroupIndex = containerIndex;
        }

        if (lastOfGroupIndex >= 0) {
          // YES: then tab should go to the first tabbable node in the next
          //  group (and wrap around to the first tabbable node of the FIRST
          //  group if it's the last tabbable node of the LAST group)
          var _destinationGroupIndex = lastOfGroupIndex === state.tabbableGroups.length - 1 ? 0 : lastOfGroupIndex + 1;

          var _destinationGroup = state.tabbableGroups[_destinationGroupIndex];
          destinationNode = _destinationGroup.firstTabbableNode;
        }
      }
    } else {
      // NOTE: the fallbackFocus option does not support returning false to opt-out
      destinationNode = getNodeForOption('fallbackFocus');
    }

    if (destinationNode) {
      e.preventDefault();
      tryFocus(destinationNode);
    } // else, let the browser take care of [shift+]tab and move the focus

  };

  var checkKey = function checkKey(e) {
    if (isEscapeEvent(e) && valueOrHandler(config.escapeDeactivates, e) !== false) {
      e.preventDefault();
      trap.deactivate();
      return;
    }

    if (isTabEvent(e)) {
      checkTab(e);
      return;
    }
  };

  var checkClick = function checkClick(e) {
    if (valueOrHandler(config.clickOutsideDeactivates, e)) {
      return;
    }

    var target = getActualTarget(e);

    if (containersContain(target)) {
      return;
    }

    if (valueOrHandler(config.allowOutsideClick, e)) {
      return;
    }

    e.preventDefault();
    e.stopImmediatePropagation();
  }; //
  // EVENT LISTENERS
  //


  var addListeners = function addListeners() {
    if (!state.active) {
      return;
    } // There can be only one listening focus trap at a time


    activeFocusTraps.activateTrap(trap); // Delay ensures that the focused element doesn't capture the event
    // that caused the focus trap activation.

    state.delayInitialFocusTimer = config.delayInitialFocus ? delay(function () {
      tryFocus(getInitialFocusNode());
    }) : tryFocus(getInitialFocusNode());
    doc.addEventListener('focusin', checkFocusIn, true);
    doc.addEventListener('mousedown', checkPointerDown, {
      capture: true,
      passive: false
    });
    doc.addEventListener('touchstart', checkPointerDown, {
      capture: true,
      passive: false
    });
    doc.addEventListener('click', checkClick, {
      capture: true,
      passive: false
    });
    doc.addEventListener('keydown', checkKey, {
      capture: true,
      passive: false
    });
    return trap;
  };

  var removeListeners = function removeListeners() {
    if (!state.active) {
      return;
    }

    doc.removeEventListener('focusin', checkFocusIn, true);
    doc.removeEventListener('mousedown', checkPointerDown, true);
    doc.removeEventListener('touchstart', checkPointerDown, true);
    doc.removeEventListener('click', checkClick, true);
    doc.removeEventListener('keydown', checkKey, true);
    return trap;
  }; //
  // TRAP DEFINITION
  //


  trap = {
    activate: function activate(activateOptions) {
      if (state.active) {
        return this;
      }

      var onActivate = getOption(activateOptions, 'onActivate');
      var onPostActivate = getOption(activateOptions, 'onPostActivate');
      var checkCanFocusTrap = getOption(activateOptions, 'checkCanFocusTrap');

      if (!checkCanFocusTrap) {
        updateTabbableNodes();
      }

      state.active = true;
      state.paused = false;
      state.nodeFocusedBeforeActivation = doc.activeElement;

      if (onActivate) {
        onActivate();
      }

      var finishActivation = function finishActivation() {
        if (checkCanFocusTrap) {
          updateTabbableNodes();
        }

        addListeners();

        if (onPostActivate) {
          onPostActivate();
        }
      };

      if (checkCanFocusTrap) {
        checkCanFocusTrap(state.containers.concat()).then(finishActivation, finishActivation);
        return this;
      }

      finishActivation();
      return this;
    },
    deactivate: function deactivate(deactivateOptions) {
      if (!state.active) {
        return this;
      }

      clearTimeout(state.delayInitialFocusTimer); // noop if undefined

      state.delayInitialFocusTimer = undefined;
      removeListeners();
      state.active = false;
      state.paused = false;
      activeFocusTraps.deactivateTrap(trap);
      var onDeactivate = getOption(deactivateOptions, 'onDeactivate');
      var onPostDeactivate = getOption(deactivateOptions, 'onPostDeactivate');
      var checkCanReturnFocus = getOption(deactivateOptions, 'checkCanReturnFocus');

      if (onDeactivate) {
        onDeactivate();
      }

      var returnFocus = getOption(deactivateOptions, 'returnFocus', 'returnFocusOnDeactivate');

      var finishDeactivation = function finishDeactivation() {
        delay(function () {
          if (returnFocus) {
            tryFocus(getReturnFocusNode(state.nodeFocusedBeforeActivation));
          }

          if (onPostDeactivate) {
            onPostDeactivate();
          }
        });
      };

      if (returnFocus && checkCanReturnFocus) {
        checkCanReturnFocus(getReturnFocusNode(state.nodeFocusedBeforeActivation)).then(finishDeactivation, finishDeactivation);
        return this;
      }

      finishDeactivation();
      return this;
    },
    pause: function pause() {
      if (state.paused || !state.active) {
        return this;
      }

      state.paused = true;
      removeListeners();
      return this;
    },
    unpause: function unpause() {
      if (!state.paused || !state.active) {
        return this;
      }

      state.paused = false;
      updateTabbableNodes();
      addListeners();
      return this;
    },
    updateContainerElements: function updateContainerElements(containerElements) {
      var elementsAsArray = [].concat(containerElements).filter(Boolean);
      state.containers = elementsAsArray.map(function (element) {
        return typeof element === 'string' ? doc.querySelector(element) : element;
      });

      if (state.active) {
        updateTabbableNodes();
      }

      return this;
    }
  }; // initialize container elements

  trap.updateContainerElements(elements);
  return trap;
};


//# sourceMappingURL=focus-trap.esm.js.map


/***/ }),

/***/ "7BLv":
/*!************************************************************!*\
  !*** ./node_modules/@arcgis/core/identity/IdentityForm.js ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return d; });
/* harmony import */ var _chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../chunks/tslib.es6.js */ "pO5D");
/* harmony import */ var _core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../core/accessorSupport/decorators/property.js */ "WbKI");
/* harmony import */ var _core_arrayUtils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../core/arrayUtils.js */ "tQ+6");
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../core/has.js */ "wSAH");
/* harmony import */ var _core_accessorSupport_ensureType_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../core/accessorSupport/ensureType.js */ "zqDF");
/* harmony import */ var _core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../core/accessorSupport/decorators/subclass.js */ "04ZG");
/* harmony import */ var _intl_substitute_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../intl/substitute.js */ "JV2H");
/* harmony import */ var _widgets_Widget_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../widgets/Widget.js */ "Ehpe");
/* harmony import */ var _widgets_support_widgetUtils_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../widgets/support/widgetUtils.js */ "cCpn");
/* harmony import */ var _widgets_support_decorators_messageBundle_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../widgets/support/decorators/messageBundle.js */ "dV4Z");
/* harmony import */ var _core_Logger_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../core/Logger.js */ "6S2I");
/* harmony import */ var _widgets_support_jsxFactory_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../widgets/support/jsxFactory.js */ "2CIP");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
const a={base:"esri-identity-form",group:"esri-identity-form__group",label:"esri-identity-form__label",footer:"esri-identity-form__footer",esriInput:"esri-input",esriButton:"esri-button",esriButtonSecondary:"esri-button--secondary"},l="ArcGIS Online";let p=class extends _widgets_Widget_js__WEBPACK_IMPORTED_MODULE_7__["default"]{constructor(s,e){super(s,e),this._usernameInputNode=null,this._passwordInputNode=null,this.messages=null,this.signingIn=!1,this.server=null,this.resource=null,this.error=null,this.oAuthPrompt=!1}render(){const{error:s,server:e,resource:t,signingIn:o,oAuthPrompt:n,messages:p}=this,d=Object(_widgets_support_jsxFactory_js__WEBPACK_IMPORTED_MODULE_11__["tsx"])("div",{class:a.group},Object(_intl_substitute_js__WEBPACK_IMPORTED_MODULE_6__["substitute"])(n?p.oAuthInfo:p.info,{server:/\.arcgis\.com/i.test(e)?l:e,resource:`(${t||p.lblItem})`})),c=n?null:Object(_widgets_support_jsxFactory_js__WEBPACK_IMPORTED_MODULE_11__["tsx"])("div",{class:a.group,key:"username"},Object(_widgets_support_jsxFactory_js__WEBPACK_IMPORTED_MODULE_11__["tsx"])("label",{class:a.label},p.lblUser,Object(_widgets_support_jsxFactory_js__WEBPACK_IMPORTED_MODULE_11__["tsx"])("input",{value:"",required:!0,autocomplete:"off",spellcheck:!1,type:"text",bind:this,afterCreate:_widgets_support_widgetUtils_js__WEBPACK_IMPORTED_MODULE_8__["storeNode"],"data-node-ref":"_usernameInputNode",class:a.esriInput}))),m=n?null:Object(_widgets_support_jsxFactory_js__WEBPACK_IMPORTED_MODULE_11__["tsx"])("div",{class:a.group,key:"password"},Object(_widgets_support_jsxFactory_js__WEBPACK_IMPORTED_MODULE_11__["tsx"])("label",{class:a.label},p.lblPwd,Object(_widgets_support_jsxFactory_js__WEBPACK_IMPORTED_MODULE_11__["tsx"])("input",{value:"",required:!0,type:"password",bind:this,afterCreate:_widgets_support_widgetUtils_js__WEBPACK_IMPORTED_MODULE_8__["storeNode"],"data-node-ref":"_passwordInputNode",class:a.esriInput}))),h=Object(_widgets_support_jsxFactory_js__WEBPACK_IMPORTED_MODULE_11__["tsx"])("div",{class:this.classes(a.group,a.footer)},Object(_widgets_support_jsxFactory_js__WEBPACK_IMPORTED_MODULE_11__["tsx"])("input",{type:"submit",disabled:!!o,value:o?p.lblSigning:p.lblOk,class:a.esriButton}),Object(_widgets_support_jsxFactory_js__WEBPACK_IMPORTED_MODULE_11__["tsx"])("input",{type:"button",value:p.lblCancel,bind:this,onclick:this._cancel,class:this.classes(a.esriButton,a.esriButtonSecondary)})),g=s?Object(_widgets_support_jsxFactory_js__WEBPACK_IMPORTED_MODULE_11__["tsx"])("div",null,s.details&&s.details.httpStatus?p.invalidUser:p.noAuthService):null;return Object(_widgets_support_jsxFactory_js__WEBPACK_IMPORTED_MODULE_11__["tsx"])("form",{class:a.base,bind:this,onsubmit:this._submit},d,g,c,m,h)}_cancel(){this._set("signingIn",!1),this._usernameInputNode&&(this._usernameInputNode.value=""),this._passwordInputNode&&(this._passwordInputNode.value=""),this.emit("cancel")}_submit(s){s.preventDefault(),this._set("signingIn",!0);const e=this.oAuthPrompt?{}:{username:this._usernameInputNode&&this._usernameInputNode.value,password:this._passwordInputNode&&this._passwordInputNode.value};this.emit("submit",e)}};Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_1__["property"])(),Object(_widgets_support_decorators_messageBundle_js__WEBPACK_IMPORTED_MODULE_9__["messageBundle"])("esri/identity/t9n/identity")],p.prototype,"messages",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_1__["property"])()],p.prototype,"signingIn",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_1__["property"])()],p.prototype,"server",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_1__["property"])()],p.prototype,"resource",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_1__["property"])()],p.prototype,"error",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_1__["property"])()],p.prototype,"oAuthPrompt",void 0),p=Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_5__["subclass"])("esri.identity.IdentityForm")],p);const d=p;


/***/ }),

/***/ "95ME":
/*!*********************************************************!*\
  !*** ./node_modules/@arcgis/core/identity/OAuthInfo.js ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return i; });
/* harmony import */ var _chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../chunks/tslib.es6.js */ "pO5D");
/* harmony import */ var _core_JSONSupport_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../core/JSONSupport.js */ "ag7Y");
/* harmony import */ var _core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../core/accessorSupport/decorators/property.js */ "WbKI");
/* harmony import */ var _core_arrayUtils_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../core/arrayUtils.js */ "tQ+6");
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../core/has.js */ "wSAH");
/* harmony import */ var _core_accessorSupport_ensureType_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../core/accessorSupport/ensureType.js */ "zqDF");
/* harmony import */ var _core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../core/accessorSupport/decorators/subclass.js */ "04ZG");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
var p;let s=p=class extends _core_JSONSupport_js__WEBPACK_IMPORTED_MODULE_1__["JSONSupport"]{constructor(o){super(o),this._oAuthCred=null,this.appId=null,this.authNamespace="/",this.expiration=20160,this.flowType="auto",this.forceLogin=!1,this.forceUserId=!1,this.locale=null,this.minTimeUntilExpiration=30,this.popup=!1,this.popupCallbackUrl="oauth-callback.html",this.popupWindowFeatures="height=490,width=800,resizable,scrollbars,status",this.portalUrl="https://www.arcgis.com",this.preserveUrlHash=!1,this.userId=null}clone(){return p.fromJSON(this.toJSON())}};Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__["property"])({json:{write:!0}})],s.prototype,"appId",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__["property"])({json:{write:!0}})],s.prototype,"authNamespace",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__["property"])({json:{write:!0}})],s.prototype,"expiration",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__["property"])({json:{write:!0}})],s.prototype,"flowType",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__["property"])({json:{write:!0}})],s.prototype,"forceLogin",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__["property"])({json:{write:!0}})],s.prototype,"forceUserId",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__["property"])({json:{write:!0}})],s.prototype,"locale",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__["property"])({json:{write:!0}})],s.prototype,"minTimeUntilExpiration",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__["property"])({json:{write:!0}})],s.prototype,"popup",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__["property"])({json:{write:!0}})],s.prototype,"popupCallbackUrl",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__["property"])({json:{write:!0}})],s.prototype,"popupWindowFeatures",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__["property"])({json:{write:!0}})],s.prototype,"portalUrl",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__["property"])({json:{write:!0}})],s.prototype,"preserveUrlHash",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__["property"])({json:{write:!0}})],s.prototype,"userId",void 0),s=p=Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_6__["subclass"])("esri.identity.OAuthInfo")],s);const i=s;


/***/ }),

/***/ "EEMW":
/*!**********************************************************!*\
  !*** ./node_modules/@arcgis/core/identity/ServerInfo.js ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return i; });
/* harmony import */ var _chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../chunks/tslib.es6.js */ "pO5D");
/* harmony import */ var _core_JSONSupport_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../core/JSONSupport.js */ "ag7Y");
/* harmony import */ var _core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../core/accessorSupport/decorators/property.js */ "WbKI");
/* harmony import */ var _core_arrayUtils_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../core/arrayUtils.js */ "tQ+6");
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../core/has.js */ "wSAH");
/* harmony import */ var _core_accessorSupport_ensureType_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../core/accessorSupport/ensureType.js */ "zqDF");
/* harmony import */ var _core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../core/accessorSupport/decorators/subclass.js */ "04ZG");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
let s=class extends _core_JSONSupport_js__WEBPACK_IMPORTED_MODULE_1__["JSONSupport"]{constructor(o){super(o),this.adminTokenServiceUrl=null,this.currentVersion=null,this.hasPortal=null,this.hasServer=null,this.owningSystemUrl=null,this.owningTenant=null,this.server=null,this.shortLivedTokenValidity=null,this.tokenServiceUrl=null,this.webTierAuth=null}};Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__["property"])({json:{write:!0}})],s.prototype,"adminTokenServiceUrl",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__["property"])({json:{write:!0}})],s.prototype,"currentVersion",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__["property"])({json:{write:!0}})],s.prototype,"hasPortal",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__["property"])({json:{write:!0}})],s.prototype,"hasServer",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__["property"])({json:{write:!0}})],s.prototype,"owningSystemUrl",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__["property"])({json:{write:!0}})],s.prototype,"owningTenant",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__["property"])({json:{write:!0}})],s.prototype,"server",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__["property"])({json:{write:!0}})],s.prototype,"shortLivedTokenValidity",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__["property"])({json:{write:!0}})],s.prototype,"tokenServiceUrl",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__["property"])({json:{write:!0}})],s.prototype,"webTierAuth",void 0),s=Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_6__["subclass"])("esri.identity.ServerInfo")],s);const i=s;


/***/ }),

/***/ "YvcI":
/*!*************************************************!*\
  !*** ./node_modules/tabbable/dist/index.esm.js ***!
  \*************************************************/
/*! exports provided: focusable, isFocusable, isTabbable, tabbable */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "focusable", function() { return focusable; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isFocusable", function() { return isFocusable; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isTabbable", function() { return isTabbable; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "tabbable", function() { return tabbable; });
/*!
* tabbable 5.3.1
* @license MIT, https://github.com/focus-trap/tabbable/blob/master/LICENSE
*/
var candidateSelectors = ['input', 'select', 'textarea', 'a[href]', 'button', '[tabindex]:not(slot)', 'audio[controls]', 'video[controls]', '[contenteditable]:not([contenteditable="false"])', 'details>summary:first-of-type', 'details'];
var candidateSelector = /* #__PURE__ */candidateSelectors.join(',');
var NoElement = typeof Element === 'undefined';
var matches = NoElement ? function () {} : Element.prototype.matches || Element.prototype.msMatchesSelector || Element.prototype.webkitMatchesSelector;
var getRootNode = !NoElement && Element.prototype.getRootNode ? function (element) {
  return element.getRootNode();
} : function (element) {
  return element.ownerDocument;
};
/**
 * @param {Element} el container to check in
 * @param {boolean} includeContainer add container to check
 * @param {(node: Element) => boolean} filter filter candidates
 * @returns {Element[]}
 */

var getCandidates = function getCandidates(el, includeContainer, filter) {
  var candidates = Array.prototype.slice.apply(el.querySelectorAll(candidateSelector));

  if (includeContainer && matches.call(el, candidateSelector)) {
    candidates.unshift(el);
  }

  candidates = candidates.filter(filter);
  return candidates;
};
/**
 * @callback GetShadowRoot
 * @param {Element} element to check for shadow root
 * @returns {ShadowRoot|boolean} ShadowRoot if available or boolean indicating if a shadowRoot is attached but not available.
 */

/**
 * @typedef {Object} CandidatesScope
 * @property {Element} scope contains inner candidates
 * @property {Element[]} candidates
 */

/**
 * @typedef {Object} IterativeOptions
 * @property {GetShadowRoot|boolean} getShadowRoot true if shadow support is enabled; falsy if not;
 *  if a function, implies shadow support is enabled and either returns the shadow root of an element
 *  or a boolean stating if it has an undisclosed shadow root
 * @property {(node: Element) => boolean} filter filter candidates
 * @property {boolean} flatten if true then result will flatten any CandidatesScope into the returned list
 */

/**
 * @param {Element[]} elements list of element containers to match candidates from
 * @param {boolean} includeContainer add container list to check
 * @param {IterativeOptions} options
 * @returns {Array.<Element|CandidatesScope>}
 */


var getCandidatesIteratively = function getCandidatesIteratively(elements, includeContainer, options) {
  var candidates = [];
  var elementsToCheck = Array.from(elements);

  while (elementsToCheck.length) {
    var element = elementsToCheck.shift();

    if (element.tagName === 'SLOT') {
      // add shadow dom slot scope (slot itself cannot be focusable)
      var assigned = element.assignedElements();
      var content = assigned.length ? assigned : element.children;
      var nestedCandidates = getCandidatesIteratively(content, true, options);

      if (options.flatten) {
        candidates.push.apply(candidates, nestedCandidates);
      } else {
        candidates.push({
          scope: element,
          candidates: nestedCandidates
        });
      }
    } else {
      // check candidate element
      var validCandidate = matches.call(element, candidateSelector);

      if (validCandidate && options.filter(element) && (includeContainer || !elements.includes(element))) {
        candidates.push(element);
      } // iterate over shadow content if possible


      var shadowRoot = element.shadowRoot || // check for an undisclosed shadow
      typeof options.getShadowRoot === 'function' && options.getShadowRoot(element);

      if (shadowRoot) {
        // add shadow dom scope IIF a shadow root node was given; otherwise, an undisclosed
        //  shadow exists, so look at light dom children as fallback BUT create a scope for any
        //  child candidates found because they're likely slotted elements (elements that are
        //  children of the web component element (which has the shadow), in the light dom, but
        //  slotted somewhere _inside_ the undisclosed shadow) -- the scope is created below,
        //  _after_ we return from this recursive call
        var _nestedCandidates = getCandidatesIteratively(shadowRoot === true ? element.children : shadowRoot.children, true, options);

        if (options.flatten) {
          candidates.push.apply(candidates, _nestedCandidates);
        } else {
          candidates.push({
            scope: element,
            candidates: _nestedCandidates
          });
        }
      } else {
        // there's not shadow so just dig into the element's (light dom) children
        //  __without__ giving the element special scope treatment
        elementsToCheck.unshift.apply(elementsToCheck, element.children);
      }
    }
  }

  return candidates;
};

var getTabindex = function getTabindex(node, isScope) {
  if (node.tabIndex < 0) {
    // in Chrome, <details/>, <audio controls/> and <video controls/> elements get a default
    // `tabIndex` of -1 when the 'tabindex' attribute isn't specified in the DOM,
    // yet they are still part of the regular tab order; in FF, they get a default
    // `tabIndex` of 0; since Chrome still puts those elements in the regular tab
    // order, consider their tab index to be 0.
    // Also browsers do not return `tabIndex` correctly for contentEditable nodes;
    // so if they don't have a tabindex attribute specifically set, assume it's 0.
    //
    // isScope is positive for custom element with shadow root or slot that by default
    // have tabIndex -1, but need to be sorted by document order in order for their
    // content to be inserted in the correct position
    if ((isScope || /^(AUDIO|VIDEO|DETAILS)$/.test(node.tagName) || node.isContentEditable) && isNaN(parseInt(node.getAttribute('tabindex'), 10))) {
      return 0;
    }
  }

  return node.tabIndex;
};

var sortOrderedTabbables = function sortOrderedTabbables(a, b) {
  return a.tabIndex === b.tabIndex ? a.documentOrder - b.documentOrder : a.tabIndex - b.tabIndex;
};

var isInput = function isInput(node) {
  return node.tagName === 'INPUT';
};

var isHiddenInput = function isHiddenInput(node) {
  return isInput(node) && node.type === 'hidden';
};

var isDetailsWithSummary = function isDetailsWithSummary(node) {
  var r = node.tagName === 'DETAILS' && Array.prototype.slice.apply(node.children).some(function (child) {
    return child.tagName === 'SUMMARY';
  });
  return r;
};

var getCheckedRadio = function getCheckedRadio(nodes, form) {
  for (var i = 0; i < nodes.length; i++) {
    if (nodes[i].checked && nodes[i].form === form) {
      return nodes[i];
    }
  }
};

var isTabbableRadio = function isTabbableRadio(node) {
  if (!node.name) {
    return true;
  }

  var radioScope = node.form || getRootNode(node);

  var queryRadios = function queryRadios(name) {
    return radioScope.querySelectorAll('input[type="radio"][name="' + name + '"]');
  };

  var radioSet;

  if (typeof window !== 'undefined' && typeof window.CSS !== 'undefined' && typeof window.CSS.escape === 'function') {
    radioSet = queryRadios(window.CSS.escape(node.name));
  } else {
    try {
      radioSet = queryRadios(node.name);
    } catch (err) {
      // eslint-disable-next-line no-console
      console.error('Looks like you have a radio button with a name attribute containing invalid CSS selector characters and need the CSS.escape polyfill: %s', err.message);
      return false;
    }
  }

  var checked = getCheckedRadio(radioSet, node.form);
  return !checked || checked === node;
};

var isRadio = function isRadio(node) {
  return isInput(node) && node.type === 'radio';
};

var isNonTabbableRadio = function isNonTabbableRadio(node) {
  return isRadio(node) && !isTabbableRadio(node);
};

var isZeroArea = function isZeroArea(node) {
  var _node$getBoundingClie = node.getBoundingClientRect(),
      width = _node$getBoundingClie.width,
      height = _node$getBoundingClie.height;

  return width === 0 && height === 0;
};

var isHidden = function isHidden(node, _ref) {
  var displayCheck = _ref.displayCheck,
      getShadowRoot = _ref.getShadowRoot;

  if (getComputedStyle(node).visibility === 'hidden') {
    return true;
  }

  var isDirectSummary = matches.call(node, 'details>summary:first-of-type');
  var nodeUnderDetails = isDirectSummary ? node.parentElement : node;

  if (matches.call(nodeUnderDetails, 'details:not([open]) *')) {
    return true;
  }

  if (!displayCheck || displayCheck === 'full') {
    if (typeof getShadowRoot === 'function') {
      // figure out if we should consider the node to be in an undisclosed shadow and use the
      //  'non-zero-area' fallback
      var originalNode = node;

      while (node) {
        var parentElement = node.parentElement;
        var rootNode = getRootNode(node);

        if (parentElement && !parentElement.shadowRoot && getShadowRoot(parentElement) === true // check if there's an undisclosed shadow
        ) {
          // node has an undisclosed shadow which means we can only treat it as a black box, so we
          //  fall back to a non-zero-area test
          return isZeroArea(node);
        } else if (node.assignedSlot) {
          // iterate up slot
          node = node.assignedSlot;
        } else if (!parentElement && rootNode !== node.ownerDocument) {
          // cross shadow boundary
          node = rootNode.host;
        } else {
          // iterate up normal dom
          node = parentElement;
        }
      }

      node = originalNode;
    } // else, `getShadowRoot` might be true, but all that does is enable shadow DOM support
    //  (i.e. it does not also presume that all nodes might have undisclosed shadows); or
    //  it might be a falsy value, which means shadow DOM support is disabled
    // didn't find it sitting in an undisclosed shadow (or shadows are disabled) so now we
    //  can just test to see if it would normally be visible or not
    // this works wherever the node is: if there's at least one client rect, it's
    //  somehow displayed; it also covers the CSS 'display: contents' case where the
    //  node itself is hidden in place of its contents; and there's no need to search
    //  up the hierarchy either


    return !node.getClientRects().length;
  } else if (displayCheck === 'non-zero-area') {
    return isZeroArea(node);
  }

  return false;
}; // form fields (nested) inside a disabled fieldset are not focusable/tabbable
//  unless they are in the _first_ <legend> element of the top-most disabled
//  fieldset


var isDisabledFromFieldset = function isDisabledFromFieldset(node) {
  if (/^(INPUT|BUTTON|SELECT|TEXTAREA)$/.test(node.tagName)) {
    var parentNode = node.parentElement; // check if `node` is contained in a disabled <fieldset>

    while (parentNode) {
      if (parentNode.tagName === 'FIELDSET' && parentNode.disabled) {
        // look for the first <legend> among the children of the disabled <fieldset>
        for (var i = 0; i < parentNode.children.length; i++) {
          var child = parentNode.children.item(i); // when the first <legend> (in document order) is found

          if (child.tagName === 'LEGEND') {
            // if its parent <fieldset> is not nested in another disabled <fieldset>,
            // return whether `node` is a descendant of its first <legend>
            return matches.call(parentNode, 'fieldset[disabled] *') ? true : !child.contains(node);
          }
        } // the disabled <fieldset> containing `node` has no <legend>


        return true;
      }

      parentNode = parentNode.parentElement;
    }
  } // else, node's tabbable/focusable state should not be affected by a fieldset's
  //  enabled/disabled state


  return false;
};

var isNodeMatchingSelectorFocusable = function isNodeMatchingSelectorFocusable(options, node) {
  if (node.disabled || isHiddenInput(node) || isHidden(node, options) || // For a details element with a summary, the summary element gets the focus
  isDetailsWithSummary(node) || isDisabledFromFieldset(node)) {
    return false;
  }

  return true;
};

var isNodeMatchingSelectorTabbable = function isNodeMatchingSelectorTabbable(options, node) {
  if (isNonTabbableRadio(node) || getTabindex(node) < 0 || !isNodeMatchingSelectorFocusable(options, node)) {
    return false;
  }

  return true;
};
/**
 * @param {Array.<Element|CandidatesScope>} candidates
 * @returns Element[]
 */


var sortByOrder = function sortByOrder(candidates) {
  var regularTabbables = [];
  var orderedTabbables = [];
  candidates.forEach(function (item, i) {
    var isScope = !!item.scope;
    var element = isScope ? item.scope : item;
    var candidateTabindex = getTabindex(element, isScope);
    var elements = isScope ? sortByOrder(item.candidates) : element;

    if (candidateTabindex === 0) {
      isScope ? regularTabbables.push.apply(regularTabbables, elements) : regularTabbables.push(element);
    } else {
      orderedTabbables.push({
        documentOrder: i,
        tabIndex: candidateTabindex,
        item: item,
        isScope: isScope,
        content: elements
      });
    }
  });
  return orderedTabbables.sort(sortOrderedTabbables).reduce(function (acc, sortable) {
    sortable.isScope ? acc.push.apply(acc, sortable.content) : acc.push(sortable.content);
    return acc;
  }, []).concat(regularTabbables);
};

var tabbable = function tabbable(el, options) {
  options = options || {};
  var candidates;

  if (options.getShadowRoot) {
    candidates = getCandidatesIteratively([el], options.includeContainer, {
      filter: isNodeMatchingSelectorTabbable.bind(null, options),
      flatten: false,
      getShadowRoot: options.getShadowRoot
    });
  } else {
    candidates = getCandidates(el, options.includeContainer, isNodeMatchingSelectorTabbable.bind(null, options));
  }

  return sortByOrder(candidates);
};

var focusable = function focusable(el, options) {
  options = options || {};
  var candidates;

  if (options.getShadowRoot) {
    candidates = getCandidatesIteratively([el], options.includeContainer, {
      filter: isNodeMatchingSelectorFocusable.bind(null, options),
      flatten: true,
      getShadowRoot: options.getShadowRoot
    });
  } else {
    candidates = getCandidates(el, options.includeContainer, isNodeMatchingSelectorFocusable.bind(null, options));
  }

  return candidates;
};

var isTabbable = function isTabbable(node, options) {
  options = options || {};

  if (!node) {
    throw new Error('No node provided');
  }

  if (matches.call(node, candidateSelector) === false) {
    return false;
  }

  return isNodeMatchingSelectorTabbable(options, node);
};

var focusableCandidateSelector = /* #__PURE__ */candidateSelectors.concat('iframe').join(',');

var isFocusable = function isFocusable(node, options) {
  options = options || {};

  if (!node) {
    throw new Error('No node provided');
  }

  if (matches.call(node, focusableCandidateSelector) === false) {
    return false;
  }

  return isNodeMatchingSelectorFocusable(options, node);
};


//# sourceMappingURL=index.esm.js.map


/***/ }),

/***/ "d6i5":
/*!***************************************************************!*\
  !*** ./node_modules/@arcgis/core/identity/OAuthCredential.js ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return e; });
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
const t="esriJSAPIOAuth";class e{constructor(t,e){this.oAuthInfo=null,this.storage=null,this.appId=null,this.codeVerifier=null,this.expires=null,this.refreshToken=null,this.ssl=null,this.stateUID=null,this.token=null,this.userId=null,this.oAuthInfo=t,this.storage=e,this._init()}isValid(){let t=!1;if(this.oAuthInfo&&this.userId&&(this.refreshToken||this.token))if(null==this.expires&&this.refreshToken)t=!0;else{const e=Date.now();if(this.expires>e){(this.expires-e)/1e3>60*this.oAuthInfo.minTimeUntilExpiration&&(t=!0)}}return t}save(){if(!this.storage)return!1;const e=this._load(),s=this.oAuthInfo;if(s&&s.authNamespace&&s.portalUrl){let r=e[s.authNamespace];r||(r=e[s.authNamespace]={}),this.appId||(this.appId=s.appId),r[s.portalUrl]={appId:this.appId,codeVerifier:this.codeVerifier,expires:this.expires,refreshToken:this.refreshToken,ssl:this.ssl,stateUID:this.stateUID,token:this.token,userId:this.userId};try{this.storage.setItem(t,JSON.stringify(e))}catch(i){return console.warn(i),!1}return!0}return!1}destroy(){const e=this._load(),s=this.oAuthInfo;if(s&&s.appId&&s.portalUrl&&(null==this.expires||this.expires>Date.now())&&(this.refreshToken||this.token)){const t=s.portalUrl.replace(/^http:/i,"https:")+"/sharing/rest/oauth2/revokeToken",e=new FormData;if(e.append("f","json"),e.append("auth_token",this.refreshToken||this.token),e.append("client_id",s.appId),e.append("token_type_hint",this.refreshToken?"refresh_token":"access_token"),"function"==typeof navigator.sendBeacon)navigator.sendBeacon(t,e);else{const s=new XMLHttpRequest;s.open("POST",t),s.send(e)}}if(s&&s.authNamespace&&s.portalUrl&&this.storage){const r=e[s.authNamespace];if(r){delete r[s.portalUrl];try{this.storage.setItem(t,JSON.stringify(e))}catch(i){console.log(i)}}}s&&(s._oAuthCred=null,this.oAuthInfo=null)}_init(){const t=this._load(),e=this.oAuthInfo;if(e&&e.authNamespace&&e.portalUrl){let s=t[e.authNamespace];s&&(s=s[e.portalUrl],s&&(this.appId=s.appId,this.codeVerifier=s.codeVerifier,this.expires=s.expires,this.refreshToken=s.refreshToken,this.ssl=s.ssl,this.stateUID=s.stateUID,this.token=s.token,this.userId=s.userId))}}_load(){let e={};if(this.storage){const i=this.storage.getItem(t);if(i)try{e=JSON.parse(i)}catch(s){console.warn(s)}}return e}}e.prototype.declaredClass="esri.identity.OAuthCredential";


/***/ }),

/***/ "hxim":
/*!*************************************************************!*\
  !*** ./node_modules/@arcgis/core/identity/IdentityModal.js ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return p; });
/* harmony import */ var _chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../chunks/tslib.es6.js */ "pO5D");
/* harmony import */ var _core_handleUtils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../core/handleUtils.js */ "xkkJ");
/* harmony import */ var _core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../core/accessorSupport/decorators/property.js */ "WbKI");
/* harmony import */ var _core_arrayUtils_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../core/arrayUtils.js */ "tQ+6");
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../core/has.js */ "wSAH");
/* harmony import */ var _core_accessorSupport_ensureType_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../core/accessorSupport/ensureType.js */ "zqDF");
/* harmony import */ var _core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../core/accessorSupport/decorators/subclass.js */ "04ZG");
/* harmony import */ var _widgets_Widget_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../widgets/Widget.js */ "Ehpe");
/* harmony import */ var _widgets_support_widget_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../widgets/support/widget.js */ "J3K2");
/* harmony import */ var focus_trap__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! focus-trap */ "4Wwy");
/* harmony import */ var _widgets_support_decorators_messageBundle_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../widgets/support/decorators/messageBundle.js */ "dV4Z");
/* harmony import */ var _widgets_support_jsxFactory_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../widgets/support/jsxFactory.js */ "2CIP");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
const l={base:"esri-identity-modal",open:"esri-identity-modal--open",closed:"esri-identity-modal--closed",title:"esri-identity-modal__title",dialog:"esri-identity-modal__dialog",content:"esri-identity-modal__content",closeButton:"esri-identity-modal__close-button",iconClose:"esri-icon-close"};let d=class extends _widgets_Widget_js__WEBPACK_IMPORTED_MODULE_7__["default"]{constructor(t,e){super(t,e),this.container=document.createElement("div"),this.content=null,this.open=!1,this._close=()=>{this.open=!1},document.body.appendChild(this.container),this.own(this.watch("open",(()=>this._toggleFocusTrap())))}destroy(){this._destroyFocusTrap()}render(){const t=this.id,{open:e,content:o,title:s,messages:i}=this,r=e&&!!o,n={[l.open]:r,[l.closed]:!r},a=Object(_widgets_support_jsxFactory_js__WEBPACK_IMPORTED_MODULE_11__["tsx"])("button",{class:l.closeButton,"aria-label":i.close,title:i.close,bind:this,onclick:this._close},Object(_widgets_support_jsxFactory_js__WEBPACK_IMPORTED_MODULE_11__["tsx"])("span",{"aria-hidden":"true",class:l.iconClose})),d=`${t}_title`,p=`${t}_content`,u=s?Object(_widgets_support_jsxFactory_js__WEBPACK_IMPORTED_MODULE_11__["tsx"])("h1",{id:d,class:l.title},s):null,m=r?Object(_widgets_support_jsxFactory_js__WEBPACK_IMPORTED_MODULE_11__["tsx"])("div",{bind:this,class:l.dialog,role:"dialog","aria-labelledby":d,"aria-describedby":p,afterCreate:this._createFocusTrap},a,u,this._renderContent(p)):null;return Object(_widgets_support_jsxFactory_js__WEBPACK_IMPORTED_MODULE_11__["tsx"])("div",{tabIndex:-1,class:this.classes(l.base,n)},m)}_destroyFocusTrap(){var t;null==(t=this._focusTrap)||t.deactivate({onDeactivate:null}),this._focusTrap=null}_toggleFocusTrap(){const{_focusTrap:t,open:e}=this;t&&(e?t.activate():t.deactivate())}_createFocusTrap(t){this._destroyFocusTrap();const o=requestAnimationFrame((()=>{this._focusTrap=Object(focus_trap__WEBPACK_IMPORTED_MODULE_9__["createFocusTrap"])(t,{initialFocus:"input",onDeactivate:this._close}),this._toggleFocusTrap()}));this.own(Object(_core_handleUtils_js__WEBPACK_IMPORTED_MODULE_1__["makeHandle"])((()=>cancelAnimationFrame(o))))}_renderContent(t){const e=this.content;return"string"==typeof e?Object(_widgets_support_jsxFactory_js__WEBPACK_IMPORTED_MODULE_11__["tsx"])("div",{class:l.content,id:t,innerHTML:e}):Object(_widgets_support_widget_js__WEBPACK_IMPORTED_MODULE_8__["isWidget"])(e)?Object(_widgets_support_jsxFactory_js__WEBPACK_IMPORTED_MODULE_11__["tsx"])("div",{class:l.content,id:t},e.render()):e instanceof HTMLElement?Object(_widgets_support_jsxFactory_js__WEBPACK_IMPORTED_MODULE_11__["tsx"])("div",{class:l.content,id:t,bind:e,afterCreate:this._attachToNode}):null}_attachToNode(t){const e=this;t.appendChild(e)}};Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__["property"])({readOnly:!0})],d.prototype,"container",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__["property"])()],d.prototype,"content",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__["property"])()],d.prototype,"open",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__["property"])(),Object(_widgets_support_decorators_messageBundle_js__WEBPACK_IMPORTED_MODULE_10__["messageBundle"])("esri/t9n/common")],d.prototype,"messages",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__["property"])({aliasOf:"messages.auth.signIn"})],d.prototype,"title",void 0),d=Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_6__["subclass"])("esri.identity.IdentityModal")],d);const p=d;


/***/ }),

/***/ "rDsY":
/*!*******************************************************************!*\
  !*** ./node_modules/@arcgis/core/identity/IdentityManagerBase.js ***!
  \*******************************************************************/
/*! exports provided: Credential, IdentityManagerBase */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Credential", function() { return j; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IdentityManagerBase", function() { return q; });
/* harmony import */ var _chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../chunks/tslib.es6.js */ "pO5D");
/* harmony import */ var _config_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../config.js */ "EyXx");
/* harmony import */ var _kernel_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../kernel.js */ "975N");
/* harmony import */ var _request_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../request.js */ "Lqtk");
/* harmony import */ var _core_Error_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../core/Error.js */ "zlDU");
/* harmony import */ var _core_Evented_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../core/Evented.js */ "zm0L");
/* harmony import */ var _core_events_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../core/events.js */ "nYOO");
/* harmony import */ var _core_lang_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../core/lang.js */ "f/qv");
/* harmony import */ var _core_object_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../core/object.js */ "nR38");
/* harmony import */ var _core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../core/promiseUtils.js */ "9MzC");
/* harmony import */ var _core_urlUtils_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../core/urlUtils.js */ "4EHJ");
/* harmony import */ var _core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../core/accessorSupport/decorators/property.js */ "WbKI");
/* harmony import */ var _core_accessorSupport_ensureType_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../core/accessorSupport/ensureType.js */ "zqDF");
/* harmony import */ var _core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../core/accessorSupport/decorators/subclass.js */ "04ZG");
/* harmony import */ var _IdentityForm_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./IdentityForm.js */ "7BLv");
/* harmony import */ var _IdentityModal_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./IdentityModal.js */ "hxim");
/* harmony import */ var _OAuthCredential_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./OAuthCredential.js */ "d6i5");
/* harmony import */ var _OAuthInfo_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./OAuthInfo.js */ "95ME");
/* harmony import */ var _ServerInfo_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./ServerInfo.js */ "EEMW");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
const P={},R=e=>{const t=new _core_urlUtils_js__WEBPACK_IMPORTED_MODULE_10__["Url"](e.owningSystemUrl).host,r=new _core_urlUtils_js__WEBPACK_IMPORTED_MODULE_10__["Url"](e.server).host,s=/.+\.arcgis\.com$/i;return s.test(t)&&s.test(r)},C=(e,t)=>!!(R(e)&&t&&t.some((t=>t.test(e.server))));let b=null,D=null;try{b=window.localStorage,D=window.sessionStorage}catch{}class q extends _core_Evented_js__WEBPACK_IMPORTED_MODULE_5__["default"]{constructor(){super(),this._portalConfig=globalThis.esriGeowConfig,this.serverInfos=[],this.oAuthInfos=[],this.credentials=[],this._soReqs=[],this._xoReqs=[],this._portals=[],this.defaultOAuthInfo=null,this.defaultTokenValidity=60,this.dialog=null,this.formConstructor=_IdentityForm_js__WEBPACK_IMPORTED_MODULE_14__["default"],this.tokenValidity=null,this.normalizeWebTierAuth=!1,this._appOrigin="null"!==window.origin?window.origin:window.location.origin,this._appUrlObj=Object(_core_urlUtils_js__WEBPACK_IMPORTED_MODULE_10__["urlToObject"])(window.location.href),this._busy=null,this._rejectOnPersistedPageShow=!1,this._oAuthLocationParams=null,this._gwTokenUrl="/sharing/rest/generateToken",this._agsRest="/rest/services",this._agsPortal=/\/sharing(\/|$)/i,this._agsAdmin=/(https?:\/\/[^\/]+\/[^\/]+)\/admin\/?(\/.*)?$/i,this._adminSvcs=/\/rest\/admin\/services(\/|$)/i,this._gwDomains=[{regex:/^https?:\/\/www\.arcgis\.com/i,customBaseUrl:"maps.arcgis.com",tokenServiceUrl:"https://www.arcgis.com/sharing/rest/generateToken"},{regex:/^https?:\/\/(?:dev|[a-z\d-]+\.mapsdev)\.arcgis\.com/i,customBaseUrl:"mapsdev.arcgis.com",tokenServiceUrl:"https://dev.arcgis.com/sharing/rest/generateToken"},{regex:/^https?:\/\/(?:devext|[a-z\d-]+\.mapsdevext)\.arcgis\.com/i,customBaseUrl:"mapsdevext.arcgis.com",tokenServiceUrl:"https://devext.arcgis.com/sharing/rest/generateToken"},{regex:/^https?:\/\/(?:qaext|[a-z\d-]+\.mapsqa)\.arcgis\.com/i,customBaseUrl:"mapsqa.arcgis.com",tokenServiceUrl:"https://qaext.arcgis.com/sharing/rest/generateToken"},{regex:/^https?:\/\/[a-z\d-]+\.maps\.arcgis\.com/i,customBaseUrl:"maps.arcgis.com",tokenServiceUrl:"https://www.arcgis.com/sharing/rest/generateToken"}],this._legacyFed=[],this._regexSDirUrl=/http.+\/rest\/services\/?/gi,this._regexServerType=/(\/(FeatureServer|GPServer|GeoDataServer|GeocodeServer|GeoenrichmentServer|GeometryServer|GlobeServer|ImageServer|MapServer|MobileServer|NAServer|NetworkDiagramServer|OGCFeatureServer|ParcelFabricServer|RelationalCatalogServer|SceneServer|StreamServer|UtilityNetworkServer|ValidationServer|VectorTileServer|VersionManagementServer)).*/gi,this._gwUser=/http.+\/users\/([^\/]+)\/?.*/i,this._gwItem=/http.+\/items\/([^\/]+)\/?.*/i,this._gwGroup=/http.+\/groups\/([^\/]+)\/?.*/i,this._rePortalTokenSvc=/\/sharing(\/rest)?\/generatetoken/i,this._createDefaultOAuthInfo=!0,this._hasTestedIfAppIsOnPortal=!1,this._getOAuthLocationParams(),window.addEventListener("pageshow",(e=>{this._pageShowHandler(e)}))}registerServers(e){const t=this.serverInfos;t?(e=e.filter((e=>!this.findServerInfo(e.server))),this.serverInfos=t.concat(e)):this.serverInfos=e,e.forEach((e=>{e.owningSystemUrl&&this._portals.push(e.owningSystemUrl),e.hasPortal&&this._portals.push(e.server)}))}registerOAuthInfos(e){const t=this.oAuthInfos;if(t){for(const r of e){const e=this.findOAuthInfo(r.portalUrl);e&&t.splice(t.indexOf(e),1)}this.oAuthInfos=t.concat(e)}else this.oAuthInfos=e}registerToken(e){e={...e};const t=this._sanitizeUrl(e.server),r=this._isServerRsrc(t);let s,i=this.findServerInfo(t),n=!0;i||(i=new _ServerInfo_js__WEBPACK_IMPORTED_MODULE_18__["default"],i.server=this._getServerInstanceRoot(t),r?i.hasServer=!0:(i.tokenServiceUrl=this._getTokenSvcUrl(t),i.hasPortal=!0),this.registerServers([i])),s=this._findCredential(t),s?(delete e.server,Object.assign(s,e),n=!1):(s=new j({userId:e.userId,server:i.server,token:e.token,expires:e.expires,ssl:e.ssl,scope:r?"server":"portal"}),s.resources=[t],this.credentials.push(s)),s.emitTokenChange(!1),n||s.refreshServerTokens()}toJSON(){return Object(_core_lang_js__WEBPACK_IMPORTED_MODULE_7__["fixJson"])({serverInfos:this.serverInfos.map((e=>e.toJSON())),oAuthInfos:this.oAuthInfos.map((e=>e.toJSON())),credentials:this.credentials.map((e=>e.toJSON()))})}initialize(e){if(!e)return;"string"==typeof e&&(e=JSON.parse(e));const t=e.serverInfos,r=e.oAuthInfos,s=e.credentials;if(t){const e=[];t.forEach((t=>{t.server&&t.tokenServiceUrl&&e.push(t.declaredClass?t:new _ServerInfo_js__WEBPACK_IMPORTED_MODULE_18__["default"](t))})),e.length&&this.registerServers(e)}if(r){const e=[];r.forEach((t=>{t.appId&&e.push(t.declaredClass?t:new _OAuthInfo_js__WEBPACK_IMPORTED_MODULE_17__["default"](t))})),e.length&&this.registerOAuthInfos(e)}s&&s.forEach((e=>{e.server&&e.token&&e.expires&&e.expires>Date.now()&&((e=e.declaredClass?e:new j(e)).emitTokenChange(),this.credentials.push(e))}))}findServerInfo(e){let t;e=this._sanitizeUrl(e);for(const r of this.serverInfos)if(this._hasSameServerInstance(r.server,e)){t=r;break}return t}findOAuthInfo(e){let t;e=this._sanitizeUrl(e);for(const r of this.oAuthInfos)if(this._hasSameServerInstance(r.portalUrl,e)){t=r;break}return t}findCredential(e,t){let r;e=this._sanitizeUrl(e);const s=this._isServerRsrc(e)?"server":"portal";if(t){for(const i of this.credentials)if(this._hasSameServerInstance(i.server,e)&&t===i.userId&&i.scope===s){r=i;break}}else for(const i of this.credentials)if(this._hasSameServerInstance(i.server,e)&&-1!==this._getIdenticalSvcIdx(e,i)&&i.scope===s){r=i;break}return r}getCredential(e,t){let r,s,n=!0;t&&(r=!!t.token,s=t.error,n=!1!==t.prompt),t={...t},e=this._sanitizeUrl(e);const o=new AbortController,a=Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_9__["createResolver"])();if(t.signal&&Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_9__["onAbort"])(t.signal,(()=>{o.abort()})),Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_9__["onAbort"])(o,(()=>{a.reject(new _core_Error_js__WEBPACK_IMPORTED_MODULE_4__["default"]("identity-manager:user-aborted","ABORTED"))})),Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_9__["isAborted"])(o))return a.promise;t.signal=o.signal;const h=this._isAdminResource(e),u=r?this.findCredential(e):null;let p;if(u&&s&&s.details&&498===s.details.httpStatus)u.destroy();else if(u)return p=new _core_Error_js__WEBPACK_IMPORTED_MODULE_4__["default"]("identity-manager:not-authorized","You are currently signed in as: '"+u.userId+"'. You do not have access to this resource: "+e,{error:s}),a.reject(p),a.promise;const f=this._findCredential(e,t);if(f)return a.resolve(f),a.promise;let g=this.findServerInfo(e);if(g)!g.hasServer&&this._isServerRsrc(e)&&(g._restInfoPms=this._getTokenSvcUrl(e),g.hasServer=!0);else{const t=this._getTokenSvcUrl(e);if(!t)return p=new _core_Error_js__WEBPACK_IMPORTED_MODULE_4__["default"]("identity-manager:unknown-resource","Unknown resource - could not find token service endpoint."),a.reject(p),a.promise;g=new _ServerInfo_js__WEBPACK_IMPORTED_MODULE_18__["default"],g.server=this._getServerInstanceRoot(e),"string"==typeof t?(g.tokenServiceUrl=t,g.hasPortal=!0):(g._restInfoPms=t,g.hasServer=!0),this.registerServers([g])}return g.hasPortal&&void 0===g._selfReq&&(n||Object(_core_urlUtils_js__WEBPACK_IMPORTED_MODULE_10__["hasSameOrigin"])(g.tokenServiceUrl,this._appOrigin)||this._gwDomains.some((e=>e.tokenServiceUrl===g.tokenServiceUrl)))&&(g._selfReq={owningTenant:t&&t.owningTenant,selfDfd:this._getPortalSelf(g.tokenServiceUrl.replace(this._rePortalTokenSvc,"/sharing/rest/portals/self"),e)}),this._enqueue(e,g,t,a,h)}getResourceName(e){return this._isRESTService(e)?e.replace(this._regexSDirUrl,"").replace(this._regexServerType,"")||"":this._gwUser.test(e)&&e.replace(this._gwUser,"$1")||this._gwItem.test(e)&&e.replace(this._gwItem,"$1")||this._gwGroup.test(e)&&e.replace(this._gwGroup,"$1")||""}generateToken(e,t,r){const n=this._rePortalTokenSvc.test(e.tokenServiceUrl),o=new _core_urlUtils_js__WEBPACK_IMPORTED_MODULE_10__["Url"](this._appOrigin),a=e.shortLivedTokenValidity;let h,l,c,d,p,f,g,m;t&&(m=this.tokenValidity||a||this.defaultTokenValidity,m>a&&a>0&&(m=a)),r&&(h=r.isAdmin,l=r.serverUrl,c=r.token,f=r.signal,g=r.ssl,e.customParameters=r.customParameters),h?d=e.adminTokenServiceUrl:(d=e.tokenServiceUrl,p=new _core_urlUtils_js__WEBPACK_IMPORTED_MODULE_10__["Url"](d.toLowerCase()),e.webTierAuth&&null!=r&&r.serverUrl&&!g&&"http"===o.scheme&&(Object(_core_urlUtils_js__WEBPACK_IMPORTED_MODULE_10__["hasSameOrigin"])(o.uri,d,!0)||"https"===p.scheme&&o.host===p.host&&"7080"===o.port&&"7443"===p.port)&&(d=d.replace(/^https:/i,"http:").replace(/:7443/i,":7080")));const v={query:{request:"getToken",username:null==t?void 0:t.username,password:null==t?void 0:t.password,serverUrl:l,token:c,expiration:m,referer:h||n?this._appOrigin:null,client:h?"referer":null,f:"json",...e.customParameters},method:"post",authMode:"anonymous",useProxy:this._useProxy(e,r),signal:f,...null==r?void 0:r.ioArgs};n||(v.withCredentials=!1);return Object(_request_js__WEBPACK_IMPORTED_MODULE_3__["default"])(d,v).then((r=>{const s=r.data;if(!s||!s.token)return new _core_Error_js__WEBPACK_IMPORTED_MODULE_4__["default"]("identity-manager:authentication-failed","Unable to generate token");const n=e.server;return P[n]||(P[n]={}),t&&(P[n][t.username]=t.password),s.validity=m,s}))}isBusy(){return!!this._busy}checkSignInStatus(e){return this.checkAppAccess(e,"").then((e=>e.credential))}checkAppAccess(e,t,r){let n=!1;return this.getCredential(e,{prompt:!1}).then((o=>{let a;const h={f:"json"};if("portal"===o.scope)if(t&&(this._doPortalSignIn(e)||r&&r.force))a=o.server+"/sharing/rest/oauth2/validateAppAccess",h.client_id=t;else{if(!o.token)return{credential:o};a=o.server+"/sharing/rest"}else{if(!o.token)return{credential:o};a=o.server+"/rest/services"}return o.token&&(h.token=o.token),Object(_request_js__WEBPACK_IMPORTED_MODULE_3__["default"])(a,{query:h,authMode:"anonymous"}).then((e=>{if(!1===e.data.valid)throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_4__["default"]("identity-manager:not-authorized",`You are currently signed in as: '${o.userId}'.`,e.data);return n=!!e.data.viewOnlyUserTypeApp,{credential:o}})).catch((e=>{if("identity-manager:not-authorized"===e.name)throw e;const t=e.details&&e.details.httpStatus;if(498===t)throw o.destroy(),new _core_Error_js__WEBPACK_IMPORTED_MODULE_4__["default"]("identity-manager:not-authenticated","User is not signed in.");if(400===t)throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_4__["default"]("identity-manager:invalid-request");return{credential:o}}))})).then((e=>({credential:e.credential,viewOnly:n})))}setOAuthResponseHash(e){e&&("#"===e.charAt(0)&&(e=e.substring(1)),this._processOAuthPopupParams(Object(_core_urlUtils_js__WEBPACK_IMPORTED_MODULE_10__["queryToObject"])(e)))}setOAuthRedirectionHandler(e){this._oAuthRedirectFunc=e}setProtocolErrorHandler(e){this._protocolFunc=e}signIn(e,t,r={}){const s=Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_9__["createResolver"])(),n=()=>{var e,t,r,s,i;null==(e=h)||e.remove(),null==(t=d)||t.remove(),null==(r=u)||r.remove(),null==(s=a)||s.destroy(),null==(i=this.dialog)||i.destroy(),this.dialog=a=h=d=u=null},o=()=>{n(),this._oAuthDfd=null,s.reject(new _core_Error_js__WEBPACK_IMPORTED_MODULE_4__["default"]("identity-manager:user-aborted","ABORTED"))};r.signal&&Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_9__["onAbort"])(r.signal,(()=>{o()}));let a=new this.formConstructor;a.resource=this.getResourceName(e),a.server=t.server,this.dialog=new _IdentityModal_js__WEBPACK_IMPORTED_MODULE_15__["default"],this.dialog.content=a,this.dialog.open=!0,this.emit("dialog-create");let h=a.on("cancel",o),d=this.dialog.watch("open",o),u=a.on("submit",(e=>{this.generateToken(t,e,{isAdmin:r.isAdmin,signal:r.signal}).then((i=>{n();const o=new j({userId:e.username,server:t.server,token:i.token,expires:null!=i.expires?Number(i.expires):null,ssl:!!i.ssl,isAdmin:r.isAdmin,validity:i.validity});s.resolve(o)})).catch((e=>{a.error=e,a.signingIn=!1}))}));return s.promise}oAuthSignIn(e,t,r,s){this._oAuthDfd=Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_9__["createResolver"])();const n=this._oAuthDfd;let o;null!=s&&s.signal&&Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_9__["onAbort"])(s.signal,(()=>{const e=this._oAuthDfd&&this._oAuthDfd.oAuthWin_;e&&!e.closed?e.close():this.dialog&&_()})),n.resUrl_=e,n.sinfo_=t,n.oinfo_=r;const a=r._oAuthCred;if(a.storage&&("authorization-code"===r.flowType||"auto"===r.flowType&&!r.popup&&t.currentVersion>=8.4)){let e=crypto.getRandomValues(new Uint8Array(32));o=Object(_core_urlUtils_js__WEBPACK_IMPORTED_MODULE_10__["base64UrlEncode"])(e),a.codeVerifier=o,e=crypto.getRandomValues(new Uint8Array(32)),a.stateUID=Object(_core_urlUtils_js__WEBPACK_IMPORTED_MODULE_10__["base64UrlEncode"])(e),a.save()||(a.codeVerifier=o=null)}else a.codeVerifier=null;let h,d,u,p;this._getCodeChallenge(o).then((i=>{const n=!s||!1!==s.oAuthPopupConfirmation;r.popup&&n?(h=new this.formConstructor,h.oAuthPrompt=!0,h.server=t.server,this.dialog=new _IdentityModal_js__WEBPACK_IMPORTED_MODULE_15__["default"],this.dialog.content=h,this.dialog.open=!0,this.emit("dialog-create"),d=h.on("cancel",_),u=this.dialog.watch("open",_),p=h.on("submit",(()=>{f(),this._doOAuthSignIn(e,t,r,i)}))):this._doOAuthSignIn(e,t,r,i)}));const _=()=>{f(),this._oAuthDfd=null,n.reject(new _core_Error_js__WEBPACK_IMPORTED_MODULE_4__["default"]("identity-manager:user-aborted","ABORTED"))},f=()=>{var e,t,r,s,i;null==(e=d)||e.remove(),null==(t=u)||t.remove(),null==(r=p)||r.remove(),null==(s=h)||s.destroy(),null==(i=this.dialog)||i.destroy(),this.dialog=null};return n.promise}destroyCredentials(){if(this.credentials){this.credentials.slice().forEach((e=>{e.destroy()}))}this.emit("credentials-destroy")}enablePostMessageAuth(e="https://www.arcgis.com/sharing/rest"){this._postMessageAuthHandle&&this._postMessageAuthHandle.remove(),this._postMessageAuthHandle=Object(_core_events_js__WEBPACK_IMPORTED_MODULE_6__["on"])(window,"message",(t=>{var r;if((t.origin===this._appOrigin||t.origin.endsWith(".arcgis.com"))&&"arcgis:auth:requestCredential"===(null==(r=t.data)?void 0:r.type)){const r=t.source;this.getCredential(e).then((e=>{r.postMessage({type:"arcgis:auth:credential",credential:{expires:e.expires,server:e.server,ssl:e.ssl,token:e.token,userId:e.userId}},t.origin)})).catch((e=>{r.postMessage({type:"arcgis:auth:error",error:{name:e.name,message:e.message}},t.origin)}))}}))}disablePostMessageAuth(){this._postMessageAuthHandle&&(this._postMessageAuthHandle.remove(),this._postMessageAuthHandle=null)}_getOAuthLocationParams(){let e=window.location.hash;if(e){"#"===e.charAt(0)&&(e=e.substring(1));const r=Object(_core_urlUtils_js__WEBPACK_IMPORTED_MODULE_10__["queryToObject"])(e);let s=!1;if(r.access_token&&r.expires_in&&r.state&&r.hasOwnProperty("username"))try{r.state=JSON.parse(r.state),r.state.portalUrl&&(this._oAuthLocationParams=r,s=!0)}catch{}else if(r.error&&r.error_description&&(console.log("IdentityManager OAuth Error: ",r.error," - ",r.error_description),"access_denied"===r.error&&(s=!0,r.state)))try{r.state=JSON.parse(r.state)}catch{}var t;if(s)window.location.hash=(null==(t=r.state)?void 0:t.hash)||""}let r=window.location.search;if(r){"?"===r.charAt(0)&&(r=r.substring(1));const e=Object(_core_urlUtils_js__WEBPACK_IMPORTED_MODULE_10__["queryToObject"])(r);let t=!1;if(e.code&&e.state)try{e.state=JSON.parse(e.state),e.state.portalUrl&&e.state.uid&&(this._oAuthLocationParams=e,t=!0)}catch{}else if(e.error&&e.error_description&&(console.log("IdentityManager OAuth Error: ",e.error," - ",e.error_description),"access_denied"===e.error&&(t=!0,e.state)))try{e.state=JSON.parse(e.state)}catch{}if(t){var s;const t={...e};["code","error","error_description","message_code","persist","state"].forEach((e=>{delete t[e]}));const r=Object(_core_urlUtils_js__WEBPACK_IMPORTED_MODULE_10__["objectToQuery"])(t),i=window.location.pathname+(r?`?${r}`:"")+((null==(s=e.state)?void 0:s.hash)||"");window.history.replaceState(window.history.state,"",i)}}}_getOAuthToken(e,t,r,i,n){return e=e.replace(/^http:/i,"https:"),Object(_request_js__WEBPACK_IMPORTED_MODULE_3__["default"])(`${e}/sharing/rest/oauth2/token`,{authMode:"anonymous",method:"post",query:i&&n?{grant_type:"authorization_code",code:t,redirect_uri:i,client_id:r,code_verifier:n}:{grant_type:"refresh_token",refresh_token:t,client_id:r}}).then((e=>e.data))}_getCodeChallenge(e){if(e&&globalThis.isSecureContext){const t=(new TextEncoder).encode(e);return crypto.subtle.digest("SHA-256",t).then((e=>Object(_core_urlUtils_js__WEBPACK_IMPORTED_MODULE_10__["base64UrlEncode"])(new Uint8Array(e))))}return Promise.resolve(null)}_pageShowHandler(e){if(e.persisted&&this.isBusy()&&this._rejectOnPersistedPageShow){const e=new _core_Error_js__WEBPACK_IMPORTED_MODULE_4__["default"]("identity-manager:user-aborted","ABORTED");this._errbackFunc(e)}}_findCredential(e,t){let r,s,i,n,o=-1;const a=t&&t.token,h=t&&t.resource,l=this._isServerRsrc(e)?"server":"portal",c=this.credentials.filter((t=>this._hasSameServerInstance(t.server,e)&&t.scope===l));if(e=h||e,c.length)if(1===c.length){if(r=c[0],n=this.findServerInfo(r.server),s=n&&n.owningSystemUrl,i=s&&this.findCredential(s,r.userId),o=this._getIdenticalSvcIdx(e,r),!a)return-1===o&&r.resources.push(e),this._addResource(e,i),r;-1!==o&&(r.resources.splice(o,1),this._removeResource(e,i))}else{let t,r;if(c.some((a=>(r=this._getIdenticalSvcIdx(e,a),-1!==r&&(t=a,n=this.findServerInfo(t.server),s=n&&n.owningSystemUrl,i=s&&this.findCredential(s,t.userId),o=r,!0)))),a)t&&(t.resources.splice(o,1),this._removeResource(e,i));else if(t)return this._addResource(e,i),t}}_findOAuthInfo(e){let t=this.findOAuthInfo(e);if(!t)for(const r of this.oAuthInfos)if(this._isIdProvider(r.portalUrl,e)){t=r;break}return t}_addResource(e,t){t&&-1===this._getIdenticalSvcIdx(e,t)&&t.resources.push(e)}_removeResource(e,t){let r=-1;t&&(r=this._getIdenticalSvcIdx(e,t),r>-1&&t.resources.splice(r,1))}_useProxy(e,t){return t&&t.isAdmin&&!Object(_core_urlUtils_js__WEBPACK_IMPORTED_MODULE_10__["hasSameOrigin"])(e.adminTokenServiceUrl,this._appOrigin)||!this._isPortalDomain(e.tokenServiceUrl)&&"10.1"===String(e.currentVersion)&&!Object(_core_urlUtils_js__WEBPACK_IMPORTED_MODULE_10__["hasSameOrigin"])(e.tokenServiceUrl,this._appOrigin)}_getOrigin(e){const t=new _core_urlUtils_js__WEBPACK_IMPORTED_MODULE_10__["Url"](e);return t.scheme+"://"+t.host+(null!=t.port?":"+t.port:"")}_getServerInstanceRoot(e){const t=e.toLowerCase();let r=t.indexOf(this._agsRest);return-1===r&&this._isAdminResource(e)&&(r=this._agsAdmin.test(e)?e.replace(this._agsAdmin,"$1").length:e.search(this._adminSvcs)),-1===r&&(r=t.indexOf("/sharing")),-1===r&&"/"===t.substr(-1)&&(r=t.length-1),r>-1?e.substring(0,r):e}_hasSameServerInstance(e,t){return"/"===e.substr(-1)&&(e=e.slice(0,-1)),e=e.toLowerCase(),t=this._getServerInstanceRoot(t).toLowerCase(),e=this._normalizeAGOLorgDomain(e),t=this._normalizeAGOLorgDomain(t),(e=e.substr(e.indexOf(":")))===(t=t.substr(t.indexOf(":")))}_normalizeAGOLorgDomain(e){const t=/^https?:\/\/(?:cdn|[a-z\d-]+\.maps)\.arcgis\.com/i,r=/^https?:\/\/(?:cdndev|[a-z\d-]+\.mapsdevext)\.arcgis\.com/i,s=/^https?:\/\/(?:cdnqa|[a-z\d-]+\.mapsqa)\.arcgis\.com/i;return t.test(e)?e=e.replace(t,"https://www.arcgis.com"):r.test(e)?e=e.replace(r,"https://devext.arcgis.com"):s.test(e)&&(e=e.replace(s,"https://qaext.arcgis.com")),e}_sanitizeUrl(e){const r=(_config_js__WEBPACK_IMPORTED_MODULE_1__["default"].request.proxyUrl||"").toLowerCase(),s=r?e.toLowerCase().indexOf(r+"?"):-1;return-1!==s&&(e=e.substring(s+r.length+1)),e=Object(_core_urlUtils_js__WEBPACK_IMPORTED_MODULE_10__["normalize"])(e),Object(_core_urlUtils_js__WEBPACK_IMPORTED_MODULE_10__["urlToObject"])(e).path}_isRESTService(e){return e.indexOf(this._agsRest)>-1}_isAdminResource(e){return this._agsAdmin.test(e)||this._adminSvcs.test(e)}_isServerRsrc(e){return this._isRESTService(e)||this._isAdminResource(e)}_isIdenticalService(e,t){let r;if(this._isRESTService(e)&&this._isRESTService(t)){const s=this._getSuffix(e).toLowerCase(),i=this._getSuffix(t).toLowerCase();if(r=s===i,!r){const e=/(.*)\/(MapServer|FeatureServer|UtilityNetworkServer).*/gi;r=s.replace(e,"$1")===i.replace(e,"$1")}}else this._isAdminResource(e)&&this._isAdminResource(t)?r=!0:this._isServerRsrc(e)||this._isServerRsrc(t)||!this._isPortalDomain(e)||(r=!0);return r}_isPortalDomain(e){const r=new _core_urlUtils_js__WEBPACK_IMPORTED_MODULE_10__["Url"](e.toLowerCase()),s=this._portalConfig;let i=this._gwDomains.some((e=>e.regex.test(r.uri)));return!i&&s&&(i=this._hasSameServerInstance(this._getServerInstanceRoot(s.restBaseUrl),r.uri)),i||_config_js__WEBPACK_IMPORTED_MODULE_1__["default"].portalUrl&&(i=Object(_core_urlUtils_js__WEBPACK_IMPORTED_MODULE_10__["hasSameOrigin"])(r,_config_js__WEBPACK_IMPORTED_MODULE_1__["default"].portalUrl,!0)),i||(i=this._portals.some((e=>this._hasSameServerInstance(e,r.uri)))),i=i||this._agsPortal.test(r.path),i}_isIdProvider(e,t){let r=-1,s=-1;this._gwDomains.forEach(((i,n)=>{-1===r&&i.regex.test(e)&&(r=n),-1===s&&i.regex.test(t)&&(s=n)}));let i=!1;if(r>-1&&s>-1&&(0===r||4===r?0!==s&&4!==s||(i=!0):1===r?1!==s&&2!==s||(i=!0):2===r?2===s&&(i=!0):3===r&&3===s&&(i=!0)),!i){const r=this.findServerInfo(t),s=r&&r.owningSystemUrl;s&&R(r)&&this._isPortalDomain(s)&&this._isIdProvider(e,s)&&(i=!0)}return i}_getIdenticalSvcIdx(e,t){let r=-1;for(let s=0;s<t.resources.length;s++){const i=t.resources[s];if(this._isIdenticalService(e,i)){r=s;break}}return r}_getSuffix(e){return e.replace(this._regexSDirUrl,"").replace(this._regexServerType,"$1")}_getTokenSvcUrl(e){let t,r,i;if(this._isRESTService(e)||this._isAdminResource(e)){const i=this._getServerInstanceRoot(e);return t=i+"/admin/generateToken",r=Object(_request_js__WEBPACK_IMPORTED_MODULE_3__["default"])(e=i+"/rest/info",{query:{f:"json"}}).then((e=>e.data)),{adminUrl:t,promise:r}}if(this._isPortalDomain(e)){let t="";if(this._gwDomains.some((r=>(r.regex.test(e)&&(t=r.tokenServiceUrl),!!t))),t||this._portals.some((r=>(this._hasSameServerInstance(r,e)&&(t=r+this._gwTokenUrl),!!t))),t||(i=e.toLowerCase().indexOf("/sharing"),-1!==i&&(t=e.substring(0,i)+this._gwTokenUrl)),t||(t=this._getOrigin(e)+this._gwTokenUrl),t){const r=new _core_urlUtils_js__WEBPACK_IMPORTED_MODULE_10__["Url"](e).port;/^http:\/\//i.test(e)&&"7080"===r&&(t=t.replace(/:7080/i,":7443")),t=t.replace(/http:/i,"https:")}return t}if(-1!==e.toLowerCase().indexOf("premium.arcgisonline.com"))return"https://premium.arcgisonline.com/server/tokens"}_processOAuthResponseParams(e,t,r){const s=t._oAuthCred;if(e.code){const i=s.codeVerifier;return s.codeVerifier=null,s.stateUID=null,s.save(),this._getOAuthToken(r.server,e.code,t.appId,this._getRedirectURI(t,!0),i).then((i=>{const n=new j({userId:i.username,server:r.server,token:i.access_token,expires:Date.now()+1e3*i.expires_in,ssl:i.ssl,oAuthState:e.state,_oAuthCred:s});return t.userId=n.userId,s.storage=i.persist?b:D,s.refreshToken=i.refresh_token,s.token=null,s.expires=i.refresh_token_expires_in?Date.now()+1e3*i.refresh_token_expires_in:null,s.userId=n.userId,s.ssl=n.ssl,s.save(),n}))}const i=new j({userId:e.username,server:r.server,token:e.access_token,expires:Date.now()+1e3*Number(e.expires_in),ssl:"true"===e.ssl,oAuthState:e.state,_oAuthCred:s});return t.userId=i.userId,s.storage=e.persist?b:D,s.refreshToken=null,s.token=i.token,s.expires=i.expires,s.userId=i.userId,s.ssl=i.ssl,s.save(),Promise.resolve(i)}_processOAuthPopupParams(e){var t;const r=this._oAuthDfd;if(this._oAuthDfd=null,r)if(clearInterval(this._oAuthIntervalId),null==(t=this._oAuthOnPopupHandle)||t.remove(),e.error){const t="access_denied"===e.error,s=new _core_Error_js__WEBPACK_IMPORTED_MODULE_4__["default"](t?"identity-manager:user-aborted":"identity-manager:authentication-failed",t?"ABORTED":"OAuth: "+e.error+" - "+e.error_description);r.reject(s)}else this._processOAuthResponseParams(e,r.oinfo_,r.sinfo_).then((e=>{r.resolve(e)})).catch((e=>{r.reject(e)}))}_setOAuthResponseQueryString(e){e&&("?"===e.charAt(0)&&(e=e.substring(1)),this._processOAuthPopupParams(Object(_core_urlUtils_js__WEBPACK_IMPORTED_MODULE_10__["queryToObject"])(e)))}_exchangeToken(e,t,r){return Object(_request_js__WEBPACK_IMPORTED_MODULE_3__["default"])(`${e}/sharing/rest/oauth2/exchangeToken`,{authMode:"anonymous",method:"post",query:{f:"json",client_id:t,token:r}}).then((e=>e.data.token))}_getPlatformSelf(e,t){return e=e.replace(/^http:/i,"https:"),Object(_request_js__WEBPACK_IMPORTED_MODULE_3__["default"])(`${e}/sharing/rest/oauth2/platformSelf`,{authMode:"anonymous",headers:{"X-Esri-Auth-Client-Id":t,"X-Esri-Auth-Redirect-Uri":window.location.href.replace(/#.*$/,"")},method:"post",query:{f:"json",expiration:30},withCredentials:!0}).then((e=>e.data))}_getPortalSelf(e,t){let r;if(this._gwDomains.some((t=>(t.regex.test(e)&&(r=t.customBaseUrl),!!r))),r)return Promise.resolve({allSSL:!0,currentVersion:"8.4",customBaseUrl:r,portalMode:"multitenant",supportsOAuth:!0});this._appOrigin.startsWith("https:")?e=e.replace(/^http:/i,"https:").replace(/:7080/i,":7443"):/^http:/i.test(t)&&(e=e.replace(/^https:/i,"http:").replace(/:7443/i,":7080"));return Object(_request_js__WEBPACK_IMPORTED_MODULE_3__["default"])(e,{query:{f:"json"},authMode:"anonymous",withCredentials:!0}).then((e=>e.data))}_doPortalSignIn(e){const t=this._portalConfig,r=window.location.href,s=this.findServerInfo(e);return!(!t&&!this._isPortalDomain(r)||!(s?s.hasPortal||s.owningSystemUrl&&this._isPortalDomain(s.owningSystemUrl):this._isPortalDomain(e))||!(this._isIdProvider(r,e)||t&&(this._hasSameServerInstance(this._getServerInstanceRoot(t.restBaseUrl),e)||this._isIdProvider(t.restBaseUrl,e))||Object(_core_urlUtils_js__WEBPACK_IMPORTED_MODULE_10__["hasSameOrigin"])(r,e,!0)))}_checkProtocol(e,t,r,s){let n=!0;const o=s?t.adminTokenServiceUrl:t.tokenServiceUrl;if(o.trim().toLowerCase().startsWith("https:")&&!this._appOrigin.startsWith("https:")&&Object(_core_urlUtils_js__WEBPACK_IMPORTED_MODULE_10__["getProxyRule"])(o)&&(n=!!this._protocolFunc&&!!this._protocolFunc({resourceUrl:e,serverInfo:t}),!n)){r(new _core_Error_js__WEBPACK_IMPORTED_MODULE_4__["default"]("identity-manager:aborted","Aborted the Sign-In process to avoid sending password over insecure connection."))}return n}_enqueue(e,t,r,s,i,n){return s||(s=Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_9__["createResolver"])()),s.resUrl_=e,s.sinfo_=t,s.options_=r,s.admin_=i,s.refresh_=n,this._busy?this._hasSameServerInstance(this._getServerInstanceRoot(e),this._busy.resUrl_)?(this._oAuthDfd&&this._oAuthDfd.oAuthWin_&&this._oAuthDfd.oAuthWin_.focus(),this._soReqs.push(s)):this._xoReqs.push(s):this._doSignIn(s),s.promise}_doSignIn(e){this._busy=e,this._rejectOnPersistedPageShow=!1;const t=t=>{const r=e.options_&&e.options_.resource,s=e.resUrl_,i=e.refresh_;let n=!1;-1===this.credentials.indexOf(t)&&(i&&-1!==this.credentials.indexOf(i)?(i.userId=t.userId,i.token=t.token,i.expires=t.expires,i.validity=t.validity,i.ssl=t.ssl,i.creationTime=t.creationTime,n=!0,t=i):this.credentials.push(t)),t.resources||(t.resources=[]),t.resources.includes(r||s)||t.resources.push(r||s),t.scope=this._isServerRsrc(s)?"server":"portal",t.emitTokenChange();const o=this._soReqs,a={};this._soReqs=[],o.forEach((e=>{if(!this._isIdenticalService(s,e.resUrl_)){const r=this._getSuffix(e.resUrl_);a[r]||(a[r]=!0,t.resources.push(e.resUrl_))}})),e.resolve(t),o.forEach((e=>{this._hasSameServerInstance(this._getServerInstanceRoot(s),e.resUrl_)?e.resolve(t):this._soReqs.push(e)})),this._busy=e.resUrl_=e.sinfo_=e.refresh_=null,n||this.emit("credential-create",{credential:t}),this._soReqs.length?this._doSignIn(this._soReqs.shift()):this._xoReqs.length&&this._doSignIn(this._xoReqs.shift())},r=t=>{e.reject(t),this._busy=e.resUrl_=e.sinfo_=e.refresh_=null,this._soReqs.length?this._doSignIn(this._soReqs.shift()):this._xoReqs.length&&this._doSignIn(this._xoReqs.shift())},s=(n,a,h,l)=>{var d,u;const p=e.sinfo_,f=!e.options_||!1!==e.options_.prompt,g=p.hasPortal&&this._findOAuthInfo(e.resUrl_);let m,v;if(n)t(new j({userId:n,server:p.server,token:h||null,expires:null!=l?Number(l):null,ssl:!!a}));else if(window!==window.parent&&null!=(d=this._appUrlObj.query)&&d["arcgis-auth-origin"]&&null!=(u=this._appUrlObj.query)&&u["arcgis-auth-portal"]&&this._hasSameServerInstance(this._getServerInstanceRoot(this._appUrlObj.query["arcgis-auth-portal"]),e.resUrl_)){var S;window.parent.postMessage({type:"arcgis:auth:requestCredential"},this._appUrlObj.query["arcgis-auth-origin"]);const s=Object(_core_events_js__WEBPACK_IMPORTED_MODULE_6__["on"])(window,"message",(e=>{e.source===window.parent&&e.data&&("arcgis:auth:credential"===e.data.type?(s.remove(),e.data.credential.expires<Date.now()?r(new _core_Error_js__WEBPACK_IMPORTED_MODULE_4__["default"]("identity-manager:credential-request-failed","Parent application's token has expired.")):t(new j(e.data.credential))):"arcgis:auth:error"===e.data.type&&(s.remove(),"tokenExpiredError"===e.data.error.name?r(new _core_Error_js__WEBPACK_IMPORTED_MODULE_4__["default"]("identity-manager:credential-request-failed","Parent application's token has expired.")):r(_core_Error_js__WEBPACK_IMPORTED_MODULE_4__["default"].fromJSON(e.data.error))))}));Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_9__["onAbort"])(null==(S=e.options_)?void 0:S.signal,(()=>{s.remove()}))}else if(g){let n=g._oAuthCred;if(!n){const e=new _OAuthCredential_js__WEBPACK_IMPORTED_MODULE_16__["default"](g,b),t=new _OAuthCredential_js__WEBPACK_IMPORTED_MODULE_16__["default"](g,D);e.isValid()&&t.isValid()?e.expires>t.expires?(n=e,t.destroy()):(n=t,e.destroy()):n=e.isValid()?e:t,g._oAuthCred=n}if(n.isValid()){m=new j({userId:n.userId,server:p.server,token:n.token,expires:n.expires,ssl:n.ssl,_oAuthCred:n});const r=g.appId!==n.appId&&this._doPortalSignIn(e.resUrl_);r||n.refreshToken?(e._pendingDfd=n.refreshToken?this._getOAuthToken(p.server,n.refreshToken,n.appId).then((e=>(m.expires=Date.now()+1e3*e.expires_in,m.token=e.access_token,m))):Promise.resolve(m),e._pendingDfd.then((e=>r?this._exchangeToken(e.server,g.appId,e.token).then((t=>(e.token=t,e))).catch((()=>e)):e)).then((e=>{t(e)})).catch((()=>{n.destroy(),s()}))):t(m)}else if(this._oAuthLocationParams&&this._hasSameServerInstance(g.portalUrl,this._oAuthLocationParams.state.portalUrl)&&(this._oAuthLocationParams.access_token||this._oAuthLocationParams.code&&this._oAuthLocationParams.state.uid===n.stateUID&&n.codeVerifier)){const s=this._oAuthLocationParams;this._oAuthLocationParams=null,e._pendingDfd=this._processOAuthResponseParams(s,g,p).then((e=>{t(e)})).catch(r)}else{const s=()=>{f?e._pendingDfd=this.oAuthSignIn(e.resUrl_,p,g,e.options_).then(t,r):(v=new _core_Error_js__WEBPACK_IMPORTED_MODULE_4__["default"]("identity-manager:not-authenticated","User is not signed in."),r(v))};this._doPortalSignIn(e.resUrl_)?e._pendingDfd=this._getPlatformSelf(p.server,g.appId).then((e=>{Object(_core_urlUtils_js__WEBPACK_IMPORTED_MODULE_10__["hasSameOrigin"])(e.portalUrl,this._appOrigin,!0)?(m=new j({userId:e.username,server:p.server,expires:Date.now()+1e3*e.expires_in,token:e.token}),t(m)):s()})).catch(s):s()}}else if(f){if(this._checkProtocol(e.resUrl_,p,r,e.admin_)){let s=e.options_;e.admin_&&(s=s||{},s.isAdmin=!0),e._pendingDfd=this.signIn(e.resUrl_,p,s).then(t,r)}}else v=new _core_Error_js__WEBPACK_IMPORTED_MODULE_4__["default"]("identity-manager:not-authenticated","User is not signed in."),r(v)},n=()=>{const s=e.sinfo_,i=s.owningSystemUrl,n=e.options_;let o,a,h,l;if(n&&(o=n.token,a=n.error,h=n.prompt),l=this._findCredential(i,{token:o,resource:e.resUrl_}),!l)for(const e of this.credentials)if(this._isIdProvider(i,e.server)){l=e;break}if(l){const i=this.findCredential(e.resUrl_,l.userId);if(i)t(i);else if(C(s,this._legacyFed)){const e=l.toJSON();e.server=s.server,e.resources=null,t(new j(e))}else{(e._pendingDfd=this.generateToken(this.findServerInfo(l.server),null,{serverUrl:e.resUrl_,token:l.token,signal:e.options_.signal,ssl:l.ssl})).then((r=>{t(new j({userId:l.userId,server:s.server,token:r.token,expires:null!=r.expires?Number(r.expires):null,ssl:!!r.ssl,isAdmin:e.admin_,validity:r.validity}))}),r)}}else{this._busy=null,o&&(e.options_.token=null);(e._pendingDfd=this.getCredential(i.replace(/\/?$/,"/sharing"),{resource:e.resUrl_,owningTenant:s.owningTenant,signal:e.options_.signal,token:o,error:a,prompt:h})).then((()=>{this._enqueue(e.resUrl_,e.sinfo_,e.options_,e,e.admin_)}),(t=>{e.resUrl_=e.sinfo_=e.refresh_=null,e.reject(t)}))}};this._errbackFunc=r;const a=e.sinfo_.owningSystemUrl,l=this._isServerRsrc(e.resUrl_),d=e.sinfo_._restInfoPms;d?d.promise.then((t=>{const r=e.sinfo_;if(r._restInfoPms){r.adminTokenServiceUrl=r._restInfoPms.adminUrl,r._restInfoPms=null,r.tokenServiceUrl=Object(_core_object_js__WEBPACK_IMPORTED_MODULE_8__["getDeepValue"])("authInfo.tokenServicesUrl",t)||Object(_core_object_js__WEBPACK_IMPORTED_MODULE_8__["getDeepValue"])("authInfo.tokenServiceUrl",t)||Object(_core_object_js__WEBPACK_IMPORTED_MODULE_8__["getDeepValue"])("tokenServiceUrl",t),r.shortLivedTokenValidity=Object(_core_object_js__WEBPACK_IMPORTED_MODULE_8__["getDeepValue"])("authInfo.shortLivedTokenValidity",t),r.currentVersion=t.currentVersion,r.owningTenant=t.owningTenant;const e=r.owningSystemUrl=t.owningSystemUrl;e&&this._portals.push(e)}l&&r.owningSystemUrl?n():s()}),(()=>{e.sinfo_._restInfoPms=null;const t=new _core_Error_js__WEBPACK_IMPORTED_MODULE_4__["default"]("identity-manager:server-identification-failed","Unknown resource - could not find token service endpoint.");r(t)})):l&&a?n():e.sinfo_._selfReq?e.sinfo_._selfReq.selfDfd.then((t=>{const r={};let s,i,n,o;return t&&(s=t.user&&t.user.username,r.username=s,r.allSSL=t.allSSL,i=t.supportsOAuth,n=parseFloat(t.currentVersion),"multitenant"===t.portalMode&&(o=t.customBaseUrl),e.sinfo_.currentVersion=n),e.sinfo_.webTierAuth=!!s,s&&this.normalizeWebTierAuth?this.generateToken(e.sinfo_,null,{ssl:r.allSSL}).catch((()=>null)).then((e=>(r.portalToken=e&&e.token,r.tokenExpiration=e&&e.expires,r))):!s&&i&&n>=4.4&&!this._findOAuthInfo(e.resUrl_)?this._generateOAuthInfo({portalUrl:e.sinfo_.server,customBaseUrl:o,owningTenant:e.sinfo_._selfReq.owningTenant}).catch((()=>null)).then((()=>r)):r})).catch((()=>null)).then((t=>{e.sinfo_._selfReq=null,t?s(t.username,t.allSSL,t.portalToken,t.tokenExpiration):s()})):s()}_generateOAuthInfo(e){let t,r,i=e.portalUrl;const n=e.customBaseUrl,o=e.owningTenant,a=!this.defaultOAuthInfo&&this._createDefaultOAuthInfo&&!this._hasTestedIfAppIsOnPortal;if(a){r=window.location.href;let e=r.indexOf("?");e>-1&&(r=r.slice(0,e)),e=r.search(/\/(apps|home)\//),r=e>-1?r.slice(0,e):null}return a&&r?(this._hasTestedIfAppIsOnPortal=!0,t=Object(_request_js__WEBPACK_IMPORTED_MODULE_3__["default"])(r+"/sharing/rest",{query:{f:"json"}}).then((()=>{this.defaultOAuthInfo=new _OAuthInfo_js__WEBPACK_IMPORTED_MODULE_17__["default"]({appId:"arcgisonline",popupCallbackUrl:r+"/home/oauth-callback.html"})}))):t=Promise.resolve(),t.then((()=>{if(this.defaultOAuthInfo)return i=i.replace(/^http:/i,"https:"),Object(_request_js__WEBPACK_IMPORTED_MODULE_3__["default"])(i+"/sharing/rest/oauth2/validateRedirectUri",{query:{accountId:o,client_id:this.defaultOAuthInfo.appId,redirect_uri:Object(_core_urlUtils_js__WEBPACK_IMPORTED_MODULE_10__["makeAbsolute"])(this.defaultOAuthInfo.popupCallbackUrl),f:"json"}}).then((e=>{if(e.data.valid){const t=this.defaultOAuthInfo.clone();e.data.urlKey&&n?t.portalUrl="https://"+e.data.urlKey.toLowerCase()+"."+n:t.portalUrl=i,t.popup=window!==window.top||!(Object(_core_urlUtils_js__WEBPACK_IMPORTED_MODULE_10__["hasSameOrigin"])(i,this._appOrigin)||this._gwDomains.some((e=>e.regex.test(i)&&e.regex.test(this._appOrigin)))),this.oAuthInfos.push(t)}}))}))}_doOAuthSignIn(e,t,r,s){const n=r._oAuthCred,a={portalUrl:r.portalUrl};!r.popup&&r.preserveUrlHash&&window.location.hash&&(a.hash=window.location.hash),n.stateUID&&(a.uid=n.stateUID);const h={client_id:r.appId,response_type:n.codeVerifier?"code":"token",state:JSON.stringify(a),expiration:r.expiration,locale:r.locale,redirect_uri:this._getRedirectURI(r,!!n.codeVerifier)};r.forceLogin&&(h.force_login=!0),r.forceUserId&&r.userId&&(h.prepopulatedusername=r.userId),!r.popup&&this._doPortalSignIn(e)&&(h.redirectToUserOrgUrl=!0),n.codeVerifier&&(h.code_challenge=s||n.codeVerifier,h.code_challenge_method=s?"S256":"plain");const l=r.portalUrl.replace(/^http:/i,"https:")+"/sharing/oauth2/authorize",c=l+"?"+Object(_core_urlUtils_js__WEBPACK_IMPORTED_MODULE_10__["objectToQuery"])(h);if(r.popup){const e=window.open(c,"esriJSAPIOAuth",r.popupWindowFeatures);if(e)e.focus(),this._oAuthDfd.oAuthWin_=e,this._oAuthIntervalId=setInterval((()=>{if(e.closed){clearInterval(this._oAuthIntervalId),this._oAuthOnPopupHandle.remove();const e=this._oAuthDfd;if(e){const t=new _core_Error_js__WEBPACK_IMPORTED_MODULE_4__["default"]("identity-manager:user-aborted","ABORTED");e.reject(t)}}}),500),this._oAuthOnPopupHandle=Object(_core_events_js__WEBPACK_IMPORTED_MODULE_6__["on"])(window,["arcgis:auth:hash","arcgis:auth:location:search"],(e=>{"arcgis:auth:hash"===e.type?this.setOAuthResponseHash(e.detail):this._setOAuthResponseQueryString(e.detail)}));else{const e=new _core_Error_js__WEBPACK_IMPORTED_MODULE_4__["default"]("identity-manager:popup-blocked","ABORTED");this._oAuthDfd.reject(e)}}else this._rejectOnPersistedPageShow=!0,this._oAuthRedirectFunc?this._oAuthRedirectFunc({authorizeParams:h,authorizeUrl:l,resourceUrl:e,serverInfo:t,oAuthInfo:r}):window.location.href=c}_getRedirectURI(e,t){const r=window.location.href.replace(/#.*$/,"");if(e.popup)return Object(_core_urlUtils_js__WEBPACK_IMPORTED_MODULE_10__["makeAbsolute"])(e.popupCallbackUrl);if(t){const e=Object(_core_urlUtils_js__WEBPACK_IMPORTED_MODULE_10__["urlToObject"])(r);return e.query&&["code","error","error_description","message_code","persist","state"].forEach((t=>{delete e.query[t]})),Object(_core_urlUtils_js__WEBPACK_IMPORTED_MODULE_10__["addQueryParameters"])(e.path,e.query)}return r}}q.prototype.declaredClass="esri.identity.IdentityManagerBase";let j=class extends _core_Evented_js__WEBPACK_IMPORTED_MODULE_5__["default"].EventedAccessor{constructor(e){super(e),this._oAuthCred=null,this.tokenRefreshBuffer=2,e&&e._oAuthCred&&(this._oAuthCred=e._oAuthCred)}initialize(){this.resources=this.resources||[],null==this.creationTime&&(this.creationTime=Date.now())}refreshToken(){const e=_kernel_js__WEBPACK_IMPORTED_MODULE_2__["id"].findServerInfo(this.server),t=e&&e.owningSystemUrl,s=!!t&&"server"===this.scope,i=s&&C(e,_kernel_js__WEBPACK_IMPORTED_MODULE_2__["id"]._legacyFed),n=e.webTierAuth,o=n&&_kernel_js__WEBPACK_IMPORTED_MODULE_2__["id"].normalizeWebTierAuth,a=P[this.server],h=a&&a[this.userId];let l,c=this.resources&&this.resources[0],d=s&&_kernel_js__WEBPACK_IMPORTED_MODULE_2__["id"].findServerInfo(t),u={username:this.userId,password:h};if(n&&!o)return;s&&!d&&_kernel_js__WEBPACK_IMPORTED_MODULE_2__["id"].serverInfos.some((e=>(_kernel_js__WEBPACK_IMPORTED_MODULE_2__["id"]._isIdProvider(t,e.server)&&(d=e),!!d)));const p=d&&_kernel_js__WEBPACK_IMPORTED_MODULE_2__["id"].findCredential(d.server,this.userId);if(!s||p){if(!i){if(s)l={serverUrl:c,token:p&&p.token,ssl:p&&p.ssl};else if(o)u=null,l={ssl:this.ssl};else{if(!h){let t;return c&&(c=_kernel_js__WEBPACK_IMPORTED_MODULE_2__["id"]._sanitizeUrl(c),this._enqueued=1,t=_kernel_js__WEBPACK_IMPORTED_MODULE_2__["id"]._enqueue(c,e,null,null,this.isAdmin,this),t.then((()=>{this._enqueued=0,this.refreshServerTokens()})).catch((()=>{this._enqueued=0}))),t}this.isAdmin&&(l={isAdmin:!0})}return _kernel_js__WEBPACK_IMPORTED_MODULE_2__["id"].generateToken(s?d:e,s?null:u,l).then((e=>{this.token=e.token,this.expires=null!=e.expires?Number(e.expires):null,this.creationTime=Date.now(),this.validity=e.validity,this.emitTokenChange(),this.refreshServerTokens()})).catch((()=>{}))}p.refreshToken()}}refreshServerTokens(){"portal"===this.scope&&_kernel_js__WEBPACK_IMPORTED_MODULE_2__["id"].credentials.forEach((e=>{const t=_kernel_js__WEBPACK_IMPORTED_MODULE_2__["id"].findServerInfo(e.server),s=t&&t.owningSystemUrl;e!==this&&e.userId===this.userId&&s&&"server"===e.scope&&(_kernel_js__WEBPACK_IMPORTED_MODULE_2__["id"]._hasSameServerInstance(this.server,s)||_kernel_js__WEBPACK_IMPORTED_MODULE_2__["id"]._isIdProvider(s,this.server))&&(C(t,_kernel_js__WEBPACK_IMPORTED_MODULE_2__["id"]._legacyFed)?(e.token=this.token,e.expires=this.expires,e.creationTime=this.creationTime,e.validity=this.validity,e.emitTokenChange()):e.refreshToken())}))}emitTokenChange(e){clearTimeout(this._refreshTimer);const t=this.server&&_kernel_js__WEBPACK_IMPORTED_MODULE_2__["id"].findServerInfo(this.server),s=t&&t.owningSystemUrl,i=s&&_kernel_js__WEBPACK_IMPORTED_MODULE_2__["id"].findServerInfo(s);!1===e||s&&"portal"!==this.scope&&(!i||!i.webTierAuth||_kernel_js__WEBPACK_IMPORTED_MODULE_2__["id"].normalizeWebTierAuth)||null==this.expires&&null==this.validity||this._startRefreshTimer(),this.emit("token-change")}destroy(){this.userId=this.server=this.token=this.expires=this.validity=this.resources=this.creationTime=null,this._oAuthCred&&(this._oAuthCred.destroy(),this._oAuthCred=null);const e=_kernel_js__WEBPACK_IMPORTED_MODULE_2__["id"].credentials.indexOf(this);e>-1&&_kernel_js__WEBPACK_IMPORTED_MODULE_2__["id"].credentials.splice(e,1),this.emitTokenChange(),this.emit("destroy")}toJSON(){const e=Object(_core_lang_js__WEBPACK_IMPORTED_MODULE_7__["fixJson"])({userId:this.userId,server:this.server,token:this.token,expires:this.expires,validity:this.validity,ssl:this.ssl,isAdmin:this.isAdmin,creationTime:this.creationTime,scope:this.scope}),t=this.resources;return t&&t.length>0&&(e.resources=t.slice()),e}_startRefreshTimer(){clearTimeout(this._refreshTimer);const e=6e4*this.tokenRefreshBuffer,t=2**31-1;let r=(this.validity?this.creationTime+6e4*this.validity:this.expires)-Date.now();r<0?r=0:r>t&&(r=t),this._refreshTimer=setTimeout(this.refreshToken.bind(this),r>e?r-e:r)}};Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_11__["property"])()],j.prototype,"creationTime",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_11__["property"])()],j.prototype,"expires",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_11__["property"])()],j.prototype,"isAdmin",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_11__["property"])()],j.prototype,"oAuthState",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_11__["property"])()],j.prototype,"resources",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_11__["property"])()],j.prototype,"scope",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_11__["property"])()],j.prototype,"server",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_11__["property"])()],j.prototype,"ssl",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_11__["property"])()],j.prototype,"token",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_11__["property"])()],j.prototype,"tokenRefreshBuffer",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_11__["property"])()],j.prototype,"userId",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_11__["property"])()],j.prototype,"validity",void 0),j=Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_13__["subclass"])("esri.identity.Credential")],j);


/***/ })

}]);
//# sourceMappingURL=identity-IdentityManager-js.js.map