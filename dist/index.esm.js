import {
  style,
  space,
  color,
  position,
  overflow,
  display,
  width,
  minWidth,
  maxWidth,
  height,
  minHeight,
  maxHeight,
  fontSize,
  textAlign,
  lineHeight,
  fontWeight,
  letterSpacing,
  compose,
  alignItems,
  alignContent,
  justifyContent,
  flexWrap,
  flexBasis,
  flexDirection,
  flex,
  gridGap,
  gridColumnGap,
  gridRowGap,
  gridColumn,
  gridRow,
  gridAutoFlow,
  gridAutoColumns,
  gridAutoRows,
  gridTemplateColumns,
  gridTemplateRows,
  gridTemplateAreas,
  justifySelf,
  alignSelf,
  order,
  gridArea,
  zIndex,
  left,
  top,
  right,
  bottom,
  boxShadow,
  background,
  backgroundImage,
  backgroundSize,
  backgroundPosition,
  backgroundRepeat,
  opacity,
  borders,
  borderRadius,
  borderColor,
  variant
} from "styled-system";
import React, {forwardRef, useState, useEffect} from "react";
import PropTypes, {string, number, oneOf, oneOfType, bool, node} from "prop-types";
import styled, {keyframes, css} from "styled-components";
import {
  borders as borders$1,
  borderRadiuses,
  fontSizes,
  fontWeights,
  colors,
  spacing,
  typography,
  breakpoints,
  fonts,
  lineHeights
} from "@makerdao/design-system-constants";
import {createPortal} from "react-dom";
import {Manager, Reference, Popper} from "react-popper";
import onClickOutside from "react-onclickoutside";

function _extends() {
  return (_extends = Object.assign || function (e) {
    for (var t = 1; t < arguments.length; t++) {
      var o = arguments[t];
      for (var n in o) Object.prototype.hasOwnProperty.call(o, n) && (e[n] = o[n])
    }
    return e
  }).apply(this, arguments)
}

function _inheritsLoose(e, t) {
  e.prototype = Object.create(t.prototype), e.prototype.constructor = e, e.__proto__ = t
}

function _objectWithoutPropertiesLoose(e, t) {
  if (null == e) return {};
  var o, n, r = {}, a = Object.keys(e);
  for (n = 0; n < a.length; n++) o = a[n], t.indexOf(o) >= 0 || (r[o] = e[o]);
  return r
}

function _assertThisInitialized(e) {
  if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e
}

function _taggedTemplateLiteralLoose(e, t) {
  return t || (t = e.slice(0)), e.raw = t, e
}

var flexGrow = style({prop: "flexGrow"}), flexShrink = style({prop: "flexShrink"}), fontFamily = style({
    prop: "fontFamily", cssProperty: "fontFamily", key: "fontFamilies", transformValue: function (e) {
      return e
    }
  }), transition = style({prop: "transition", key: "transitions", scale: {}}),
  core = compose(display, zIndex, position, opacity, overflow, transition),
  position$1 = compose(position, left, right, top, bottom), space$1 = space,
  dimensions = compose(width, minWidth, maxWidth, height, minHeight, maxHeight),
  typography$1 = compose(color, fontSize, fontFamily, textAlign, lineHeight, fontWeight, letterSpacing),
  flexboxParent = compose(flexWrap, flexBasis, flexDirection, flex),
  gridParent = compose(gridGap, gridColumnGap, gridRowGap, gridColumn, gridRow, gridAutoFlow, gridAutoColumns, gridAutoRows, gridTemplateColumns, gridTemplateRows, gridTemplateAreas),
  parent = compose(alignItems, alignContent, justifyContent),
  child = compose(justifySelf, alignSelf, order, gridArea, flexGrow, flexShrink), boxShadow$1 = boxShadow,
  background$1 = compose(color, background),
  backgroundImage$1 = compose(backgroundImage, backgroundSize, backgroundPosition, backgroundRepeat),
  borders$2 = compose(borders, borderRadius, borderColor),
  all = compose(core, space$1, dimensions, typography$1, child, boxShadow$1, background$1, borders$2, borderRadius);

function _templateObject2() {
  var e = _taggedTemplateLiteralLoose(["\n  border: ", ";\n  background-color: white;\n  border-radius: ", ";\n  ", " + ", " {\n    border-top: ", ";\n  }\n  ", "\n"]);
  return _templateObject2 = function () {
    return e
  }, e
}

function _templateObject() {
  var e = _taggedTemplateLiteralLoose(["\n  ", ";\n"]);
  return _templateObject = function () {
    return e
  }, e
}

var StyledCardBody = styled.div(_templateObject(), all),
  Card = styled.div(_templateObject2(), borders$1.default, borderRadiuses.default, StyledCardBody, StyledCardBody, function (e) {
    return e.border || e.borderColor && "1px solid " + e.borderColor || borders$1.default
  }, all), CardBody = function (e) {
    var t = e.children, o = _objectWithoutPropertiesLoose(e, ["children"]);
    return React.createElement(StyledCardBody, o, t)
  };
CardBody.propTypes = {children: PropTypes.node};
var tooltip = "data:image/svg+xml,%3Csvg%20width%3D%2212%22%20height%3D%2212%22%20viewBox%3D%220%200%2012%2012%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Ccircle%20cx%3D%226%22%20cy%3D%226%22%20r%3D%225.35%22%20stroke%3D%22%2353546A%22%20stroke-width%3D%221.3%22%2F%3E%3Cpath%20d%3D%22M8.09933%204.39204C8.09933%204.75446%207.99195%205.06318%207.77718%205.31822C7.64295%205.46587%207.42148%205.62694%207.11275%205.80144C6.95168%205.8954%206.8443%205.96923%206.7906%206.02292C6.69664%206.09003%206.64966%206.17057%206.64966%206.26453V6.38533C6.64966%206.45245%206.62617%206.50949%206.57919%206.55647C6.53221%206.60345%206.47517%206.62694%206.40805%206.62694H5.48188C5.41477%206.62694%205.35772%206.60345%205.31074%206.55647C5.26376%206.50949%205.24027%206.45245%205.24027%206.38533V6.20412C5.24027%205.8954%205.34765%205.63365%205.56242%205.41889C5.68322%205.29808%205.88456%205.15714%206.16644%204.99607L6.20671%204.97594C6.40805%204.85513%206.54899%204.76117%206.62953%204.69406C6.72349%204.6001%206.77047%204.49272%206.77047%204.37191C6.77047%204.21084%206.68658%204.07661%206.51879%203.96923C6.35101%203.86184%206.16309%203.80815%205.95503%203.80815C5.74698%203.80815%205.56913%203.85513%205.42148%203.94909C5.30067%204.02963%205.15302%204.18399%204.97852%204.41218C4.93825%204.45245%204.88792%204.47929%204.82752%204.49272C4.76711%204.50614%204.71007%204.49272%204.65638%204.45245L4.09262%204.02963C4.03893%203.98936%204.00872%203.93567%204.00201%203.86855C3.9953%203.80144%204.00537%203.74104%204.03221%203.68735C4.28725%203.32493%204.57584%203.05312%204.89799%202.87191C5.22013%202.6907%205.6094%202.6001%206.06577%202.6001C6.38792%202.6001%206.71007%202.68063%207.03221%202.84171C7.35436%203.00278%207.61275%203.21755%207.80738%203.486C8.00201%203.75446%208.09933%204.05647%208.09933%204.39204Z%22%20fill%3D%22%2353546A%22%2F%3E%3Cpath%20d%3D%22M6.7904%208.24578C6.7904%208.47397%206.7065%208.67196%206.53872%208.83974C6.37093%209.00753%206.17295%209.09142%205.94476%209.09142C5.71657%209.09142%205.51858%209.00753%205.3508%208.83974C5.18301%208.67196%205.09912%208.47397%205.09912%208.24578C5.09912%208.0176%205.18301%207.81961%205.3508%207.65182C5.51858%207.48404%205.71657%207.40015%205.94476%207.40015C6.17295%207.40015%206.37093%207.48404%206.53872%207.65182C6.7065%207.81961%206.7904%208.0176%206.7904%208.24578Z%22%20fill%3D%22%2353546A%22%2F%3E%3C%2Fsvg%3E",
  tooltipFilled = "data:image/svg+xml,%3Csvg%20width%3D%2212%22%20height%3D%2212%22%20viewBox%3D%220%200%2012%2012%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cpath%20fill-rule%3D%22evenodd%22%20clip-rule%3D%22evenodd%22%20d%3D%22M6%2012C9.31372%2012%2012%209.31372%2012%206C12%202.68628%209.31372%200%206%200C2.68628%200%200%202.68628%200%206C0%209.31372%202.68628%2012%206%2012ZM8.07397%204.68311C8.09082%204.59033%208.09912%204.49341%208.09912%204.39233C8.09912%204.27197%208.08667%204.15601%208.06152%204.04419C8.01685%203.84424%207.93188%203.65845%207.80713%203.48633C7.61255%203.21777%207.354%203.00293%207.03198%202.84204C6.70972%202.68091%206.3877%202.60034%206.06543%202.60034C5.73584%202.60034%205.44141%202.64771%205.18188%202.74219C5.1333%202.76001%205.08569%202.7793%205.03955%202.80029C4.99097%202.82227%204.9436%202.84619%204.89771%202.87207C4.74438%202.9585%204.59863%203.06519%204.46069%203.19263C4.30859%203.33276%204.16577%203.49756%204.03198%203.6875C4.00513%203.74121%203.99512%203.80176%204.00171%203.8689C4.00854%203.93579%204.03857%203.9895%204.09229%204.02979L4.65625%204.45264C4.70972%204.49292%204.76685%204.50635%204.82739%204.49292C4.8877%204.47949%204.93799%204.45264%204.97827%204.41235C5.15283%204.18433%205.30054%204.02979%205.42114%203.94922C5.56885%203.85547%205.74683%203.80835%205.95483%203.80835C6.16284%203.80835%206.35083%203.86206%206.51855%203.96948C6.68628%204.0769%206.77026%204.21118%206.77026%204.37207C6.77026%204.40967%206.76562%204.4458%206.75659%204.48071C6.73657%204.55835%206.69409%204.62964%206.62939%204.69434C6.54883%204.76147%206.40771%204.85547%206.20654%204.97607L6.16626%204.99634C5.88428%205.15747%205.68286%205.29834%205.56226%205.41919C5.4541%205.5271%205.37329%205.64722%205.31958%205.77905C5.2666%205.90918%205.23999%206.05103%205.23999%206.20435V6.3855C5.23999%206.41577%205.24463%206.44434%205.25439%206.4707C5.25757%206.47949%205.26147%206.48804%205.26587%206.49634C5.2771%206.51807%205.29199%206.53809%205.31055%206.55664C5.35742%206.60376%205.41455%206.6272%205.48169%206.6272H6.40771C6.47485%206.6272%206.53198%206.60376%206.57886%206.55664C6.62598%206.50977%206.64941%206.45264%206.64941%206.3855V6.26489C6.64941%206.21558%206.66235%206.16968%206.68823%206.12769C6.71167%206.08984%206.74561%206.05493%206.79028%206.02319C6.84399%205.96948%206.95142%205.89575%207.11255%205.80176C7.42114%205.6272%207.64282%205.46606%207.77686%205.31836C7.93164%205.13452%208.03076%204.92285%208.07397%204.68311ZM6.53833%208.83984C6.6062%208.77197%206.6604%208.69922%206.70068%208.62158C6.76025%208.50708%206.79004%208.38184%206.79004%208.24585C6.79004%208.09668%206.75439%207.96045%206.68262%207.83716C6.64453%207.77173%206.59644%207.70996%206.53833%207.65186C6.37061%207.48413%206.17261%207.40015%205.94434%207.40015C5.85181%207.40015%205.7644%207.41382%205.68188%207.44141C5.62012%207.46216%205.56128%207.49048%205.50513%207.52637C5.45117%207.56104%205.39966%207.60278%205.35059%207.65186C5.18262%207.81958%205.09888%208.01758%205.09888%208.24585C5.09888%208.47412%205.18262%208.67212%205.35059%208.83984C5.51831%209.00757%205.71631%209.09155%205.94434%209.09155C6.17261%209.09155%206.37061%209.00757%206.53833%208.83984Z%22%20fill%3D%22%2353546A%22%2F%3E%3C%2Fsvg%3E";

function _templateObject4() {
  var e = _taggedTemplateLiteralLoose([""]);
  return _templateObject4 = function () {
    return e
  }, e
}

function _templateObject3() {
  var e = _taggedTemplateLiteralLoose(["\n  opacity: 0;\n  z-index: 200003;\n  pointer-events: none;\n  transition: opacity 0.2s ease-in-out;\n\n  &.show {\n    pointer-events: auto;\n    opacity: 1;\n  }\n"]);
  return _templateObject3 = function () {
    return e
  }, e
}

function _templateObject2$1() {
  var e = _taggedTemplateLiteralLoose(["\n  ", "\n  cursor: pointer;\n  ", ";\n"]);
  return _templateObject2$1 = function () {
    return e
  }, e
}

function _templateObject$1() {
  var e = _taggedTemplateLiteralLoose(["\n  display: inline-block;\n  position: relative;\n  margin-bottom: 0.1em;\n  height: 0.7em;\n  width: 0.7em;\n  ", '\n  &:before,\n  &:after {\n    position: absolute;\n    content: "";\n    background-color: currentColor;\n    height: 1em;\n    width: 0.7em;\n    cursor: pointer;\n    transition: opacity 0.2s;\n  }\n\n  &:before {\n    mask: url(', ") no-repeat center center;\n    mask-size: contain;\n  }\n\n  &:after {\n    mask: url(", ") no-repeat center center;\n    mask-size: contain;\n    opacity: 0;\n  }\n\n  &:hover:before,\n  &:focus:before {\n    opacity: 0;\n  }\n\n  &:hover:after,\n  &:focus:after {\n    opacity: 1;\n  }\n"]);
  return _templateObject$1 = function () {
    return e
  }, e
}

var TooltipIcon = styled.span(_templateObject$1(), all, tooltip, tooltipFilled),
  InlineTooltip = styled.span.attrs(function () {
    return {display: "inline-block"}
  })(_templateObject2$1(), all, function (e) {
    return !e.noDecoration && "border-bottom: 1px dashed;"
  }), TooltipContentContainer = styled.div(_templateObject3()), TooltipBody = function (e) {
    function t() {
      return e.apply(this, arguments) || this
    }

    _inheritsLoose(t, e);
    var o = t.prototype;
    return o.componentDidUpdate = function (e) {
      this.props.show && !e.show && this.props.scheduleUpdate()
    }, o.render = function () {
      return React.createElement(TooltipContentContainer, _extends({}, this.props, {
        ref: this.props.passedRef,
        className: this.props.show ? "show" : ""
      }), this.props.children)
    }, t
  }(React.Component);
TooltipBody.propTypes = {
  show: PropTypes.bool,
  passedRef: PropTypes.any,
  children: PropTypes.node,
  scheduleUpdate: PropTypes.func.isRequired
}, TooltipBody.defaultProps = {show: !1};
var TooltipContent = styled(Card).attrs({
  p: "s",
  boxShadow: "0px 1px 3px rgba(190, 190, 190, 0.25)"
})(_templateObject4()), Tooltip = function (e) {
  function t(t) {
    var o;
    return (o = e.call(this, t) || this).state = {show: !1}, o.showTooltip = o.showTooltip.bind(_assertThisInitialized(o)), o.hideTooltip = o.hideTooltip.bind(_assertThisInitialized(o)), o
  }

  _inheritsLoose(t, e);
  var o = t.prototype;
  return o.showTooltip = function () {
    this.setState({show: !0})
  }, o.hideTooltip = function () {
    this.setState({show: !1})
  }, o.render = function () {
    var e = this, t = this.props, o = t.children, n = t.noDecoration, r = t.placement, a = t.content,
      l = _objectWithoutPropertiesLoose(t, ["children", "noDecoration", "placement", "content"]);
    return React.createElement(Manager, null, React.createElement(Reference, null, function (t) {
      var r = t.ref;
      return o ? React.createElement(InlineTooltip, _extends({
        onMouseEnter: e.showTooltip,
        onMouseLeave: e.hideTooltip,
        onFocus: e.showTooltip,
        onBlur: e.hideTooltip,
        ref: r,
        tabIndex: "0",
        noDecoration: n
      }, l), o) : React.createElement(TooltipIcon, _extends({
        onMouseEnter: e.showTooltip,
        onMouseLeave: e.hideTooltip,
        onFocus: e.showTooltip,
        onBlur: e.hideTooltip,
        ref: r,
        tabIndex: "0"
      }, l))
    }), createPortal(React.createElement(Popper, {placement: r, modifiers: {offset: {offset: "0, 50%"}}}, function (t) {
      var o = t.ref, n = t.style, r = t.placement, l = t.scheduleUpdate;
      return React.createElement(TooltipBody, {
        passedRef: o,
        style: n,
        "data-placement": r,
        show: e.state.show,
        scheduleUpdate: l
      }, a)
    }), document.body))
  }, t
}(React.Component);

function _templateObject$2() {
  var e = _taggedTemplateLiteralLoose(["\n  ", "\n  ", "\n"]);
  return _templateObject$2 = function () {
    return e
  }, e
}

Tooltip.propTypes = {
  content: PropTypes.element.isRequired,
  placement: PropTypes.oneOf(["bottom", "top", "left", "right", "bottom-start", "bottom-end", "top-start", "top-end", "left-start", "left-end", "right-start", "right-end"]),
  children: PropTypes.node,
  noDecoration: PropTypes.bool
}, Tooltip.defaultProps = {placement: "bottom-start", noDecoration: !1};
var StyledBox = styled.div(_templateObject$2(), all, backgroundImage$1), Box = forwardRef(function (e, t) {
  var o = e.children, n = _objectWithoutPropertiesLoose(e, ["children"]);
  return React.createElement(StyledBox, _extends({}, n, {ref: t}), o)
});
Box.displayName = "Box", Box.propTypes = {children: PropTypes.node};
var intoGroupsOfFourReducer = function (e, t) {
  var o = e[e.length - 1];
  return !o || o.length >= 4 ? e.push(t) : e[e.length - 1] = o + t, e
}, Address = function (e) {
  function t(t) {
    var o;
    return (o = e.call(this, t) || this).state = {expanded: !1}, o.updateAddresses = o.updateAddresses.bind(_assertThisInitialized(o)), o.expandAddress = o.expandAddress.bind(_assertThisInitialized(o)), o.updateAddresses(), o
  }

  _inheritsLoose(t, e);
  var o = t.prototype;
  return o.componentDidUpdate = function () {
    this.updateAddresses()
  }, o.updateAddresses = function () {
    var e = this.props.full || "", t = e.slice(2).split("").reduce(intoGroupsOfFourReducer, []);
    this.formattedAddress = "0x " + t.join(" "), this.veryShortAddress = e.slice(0, 4) + "..." + e.slice(-4), this.shortAddress = e.slice(0, 6) + "..." + e.slice(-7)
  }, o.expandAddress = function () {
    this.props.expandable && this.setState({expanded: !0})
  }, o.render = function () {
    var e = this;
    return React.createElement(React.Fragment, null, !this.props.shorten && !this.props.veryShort || this.state.expanded ? this.formattedAddress : React.createElement(Tooltip, {
      placement: this.props.placement,
      content: React.createElement(Box, {
        bg: "black",
        color: "white",
        py: "2xs",
        px: "xs",
        style: {pointerEvents: "none"}
      }, this.formattedAddress),
      noDecoration: !0
    }, React.createElement("span", {
      onClick: function () {
        return e.expandAddress()
      }
    }, this.props.shorten && this.shortAddress, this.props.veryShort && this.veryShortAddress)))
  }, t
}(React.Component);

function _templateObject6() {
  var e = _taggedTemplateLiteralLoose(["\n  animation: ", ";\n  border-radius: 10px;\n  display: inline-block;\n  transform-origin: center center;\n  margin: 0 3px;\n  width: 2px;\n  height: ", ";\n  &:nth-child(1) {\n    background: ", ";\n  }\n  &:nth-child(2) {\n    animation-delay: 180ms;\n    background: ", ";\n  }\n  &:nth-child(3) {\n    animation-delay: 360ms;\n    background: ", ";\n  }\n  &:nth-child(4) {\n    animation-delay: 540ms;\n    background: ", ";\n  }\n"]);
  return _templateObject6 = function () {
    return e
  }, e
}

function _templateObject5() {
  var e = _taggedTemplateLiteralLoose(["\n  position: relative;\n  font-size: ", ";\n  background: ", ";\n  animation: ", ';\n  &:before {\n    z-index: 1;\n    width: 50%;\n    height: 50%;\n    border-radius: 100% 0 0 0;\n    position: absolute;\n    top: 0;\n    left: 0;\n    content: "";\n  }\n  &:after {\n    z-index: 2;\n    width: 75%;\n    height: 75%;\n    background-color: ', ';\n    border-radius: 50%;\n    content: "";\n    margin: auto;\n    position: absolute;\n    top: 0;\n    left: 0;\n    bottom: 0;\n    right: 0;\n  }\n']);
  return _templateObject5 = function () {
    return e
  }, e
}

function _templateObject4$1() {
  var e = _taggedTemplateLiteralLoose(["\n  ", " 1s ease-in-out infinite;\n"]);
  return _templateObject4$1 = function () {
    return e
  }, e
}

function _templateObject3$1() {
  var e = _taggedTemplateLiteralLoose(["\n  ", " 1s infinite linear;\n"]);
  return _templateObject3$1 = function () {
    return e
  }, e
}

function _templateObject2$2() {
  var e = _taggedTemplateLiteralLoose(["\n  0% {\n    transform: scale(1);\n  };\n  25% {\n    transform: scale(2);\n  };\n"]);
  return _templateObject2$2 = function () {
    return e
  }, e
}

function _templateObject$3() {
  var e = _taggedTemplateLiteralLoose(["\n  0% {\n    transform: rotate(0deg);\n  };\n  100% {\n    transform: rotate(360deg);\n  };\n"]);
  return _templateObject$3 = function () {
    return e
  }, e
}

Address.propTypes = {
  full: PropTypes.string.isRequired,
  shorten: PropTypes.any,
  expandable: PropTypes.any,
  placement: PropTypes.string
}, Address.defaultProps = {placement: "top-start", expandable: !0, shorten: !1};
var load = keyframes(_templateObject$3()), expand = keyframes(_templateObject2$2()),
  loadingAnimation = css(_templateObject3$1(), load), expandingAnimation = css(_templateObject4$1(), expand),
  StyledLoader = styled(Box).attrs(function () {
    return {fontSize: "1em", width: "1em", height: "1em", borderRadius: "50%"}
  })(_templateObject5(), function (e) {
    return e.size
  }, function (e) {
    return "linear-gradient(to right, " + e.color + " 10%, transparent 42%)"
  }, loadingAnimation, function (e) {
    var t = e.bg, o = e.backgroundColor;
    return t || o
  }), Line = styled.div(_templateObject6(), expandingAnimation, function (e) {
    return e.size
  }, function (e) {
    return e.color
  }, function (e) {
    return e.color
  }, function (e) {
    return e.color
  }, function (e) {
    return e.color
  }), Loader = function (e) {
    var t = e.color, o = e.size, n = e.alt, r = _objectWithoutPropertiesLoose(e, ["color", "size", "alt"]);
    return n ? React.createElement("div", r, React.createElement(Line, {
      color: t,
      size: o
    }), React.createElement(Line, {color: t, size: o}), React.createElement(Line, {
      color: t,
      size: o
    }), React.createElement(Line, {color: t, size: o})) : React.createElement(StyledLoader, _extends({
      color: t,
      size: o
    }, r))
  };

function _templateObject$4() {
  var e = _taggedTemplateLiteralLoose(["\n  padding: 13px 26px;\n  font-size: ", ";\n  font-weight: ", ";\n  border: 1px solid;\n  border-radius: 4px;\n  box-shadow: none;\n  outline: none;\n  cursor: pointer;\n  transition: all 0.2s;\n  ", "\n  ", "\n\n  :disabled {\n    opacity: 0.5;\n    pointer-events: none;\n  }\n"]);
  return _templateObject$4 = function () {
    return e
  }, e
}

Loader.propTypes = {
  alt: PropTypes.bool,
  color: PropTypes.string,
  bg: PropTypes.string,
  size: PropTypes.string
}, Loader.defaultProps = {alt: !1, color: "black", bg: "white", size: "1em"};
var buttonStyle = variant({key: "buttons"}),
  StyledButton = styled.button(_templateObject$4(), fontSizes.l, fontWeights.semibold, all, buttonStyle),
  Button = forwardRef(function (e, t) {
    var o = e.children, n = e.loading, r = _objectWithoutPropertiesLoose(e, ["children", "loading"]);
    return React.createElement(StyledButton, _extends({}, r, {ref: t}), n ? React.createElement(Loader, {
      alt: !0,
      color: "currentColor"
    }) : o)
  });

function _templateObject7() {
  var e = _taggedTemplateLiteralLoose([""]);
  return _templateObject7 = function () {
    return e
  }, e
}

function _templateObject6$1() {
  var e = _taggedTemplateLiteralLoose([""]);
  return _templateObject6$1 = function () {
    return e
  }, e
}

function _templateObject5$1() {
  var e = _taggedTemplateLiteralLoose([""]);
  return _templateObject5$1 = function () {
    return e
  }, e
}

function _templateObject4$2() {
  var e = _taggedTemplateLiteralLoose([""]);
  return _templateObject4$2 = function () {
    return e
  }, e
}

function _templateObject3$2() {
  var e = _taggedTemplateLiteralLoose([""]);
  return _templateObject3$2 = function () {
    return e
  }, e
}

function _templateObject2$3() {
  var e = _taggedTemplateLiteralLoose([""]);
  return _templateObject2$3 = function () {
    return e
  }, e
}

function _templateObject$5() {
  var e = _taggedTemplateLiteralLoose(["\n  ", "\n  ", "\n"]);
  return _templateObject$5 = function () {
    return e
  }, e
}

Button.displayName = "Button", Button.defaultProps = {variant: "primary"}, Button.propTypes = {
  variant: PropTypes.oneOf(["primary", "secondary", "danger", "primary-outline", "secondary-outline", "danger-outline"]),
  children: PropTypes.node,
  loading: PropTypes.bool
};
var typography$2 = variant({prop: "t", key: "typography"}),
  StyledSpan = styled.span(_templateObject$5(), typography$2, all), Text = StyledSpan;

function _templateObject$6() {
  var e = _taggedTemplateLiteralLoose(["\n  display: flex;\n  ", "\n  ", "\n"]);
  return _templateObject$6 = function () {
    return e
  }, e
}

Text.propTypes = {
  t: PropTypes.string,
  children: PropTypes.node
}, Text.defaultProps = {t: "body"}, Text.span = StyledSpan, Text.p = StyledSpan.withComponent("p"), Text.a = styled(StyledSpan.withComponent("a"))(_templateObject2$3()), Text.h1 = styled(StyledSpan.withComponent("h1")).attrs({t: "h1"})(_templateObject3$2()), Text.h2 = styled(StyledSpan.withComponent("h2")).attrs({t: "h2"})(_templateObject4$2()), Text.h3 = styled(StyledSpan.withComponent("h3")).attrs({t: "h3"})(_templateObject5$1()), Text.h4 = styled(StyledSpan.withComponent("h4")).attrs({t: "h4"})(_templateObject6$1()), Text.h5 = styled(StyledSpan.withComponent("h5")).attrs({t: "h5"})(_templateObject7());
var Flex = styled(Box)(_templateObject$6(), parent, flexboxParent);

function _templateObject$7() {
  var e = _taggedTemplateLiteralLoose(["\n  position: relative;\n  display: block;\n\n  ", "\n"]);
  return _templateObject$7 = function () {
    return e
  }, e
}

var Hideable = styled.div(_templateObject$7(), function (e) {
  return e.hide && "\n    position: absolute;\n    display: none;\n    pointer-events: none;\n  }"
}), Tabs = function (e) {
  var t = e.selected, o = e.header, n = e.onChange, r = e.children, a = useState(0), l = a[0], i = a[1];
  return useEffect(function () {
    n(void 0 !== t ? t : l)
  }, [l, t]), React.createElement("div", null, React.cloneElement(o, {
    children: React.Children.map(o.props.children, function (e, o) {
      return React.cloneElement(e, {
        onClick: void 0 !== t ? null : function () {
          return i(o)
        }, selected: void 0 !== t ? o === t : l === o
      })
    })
  }), React.createElement(Box, {position: "relative"}, React.Children.map(r, function (e, o) {
    return React.createElement(Hideable, {hide: t ? t !== o : l !== o}, e)
  })))
};

function _templateObject$8() {
  var e = _taggedTemplateLiteralLoose(["\n  &:first-child {\n    border-top-left-radius: ", ";\n  }\n\n  &:last-child {\n    border-top-right-radius: ", ";\n  }\n\n  &:not(:last-child) {\n    border-right: ", ";\n  }\n\n  cursor: pointer;\n"]);
  return _templateObject$8 = function () {
    return e
  }, e
}

var TabHeaderContainer = styled(Box)(_templateObject$8(), borderRadiuses.default, borderRadiuses.default, borders$1.default),
  TabHeader = function (e) {
    var t = e.selected, o = e.children, n = _objectWithoutPropertiesLoose(e, ["selected", "children"]);
    return React.createElement(TabHeaderContainer, _extends({
      bg: t ? "white" : "lightGrey",
      py: "m",
      flexGrow: "1",
      textAlign: "center",
      borderBottom: t ? null : "default"
    }, n), React.createElement(Text, {t: "h5", color: t ? "darkPurple" : "darkLavender"}, o))
  }, CardTabs = function (e) {
    var t = e.headers, o = e.selected, n = e.onChange, r = e.children,
      a = _objectWithoutPropertiesLoose(e, ["headers", "selected", "onChange", "children"]);
    return React.createElement(Card, a, React.createElement(Tabs, {
      onChange: n,
      selected: o,
      header: React.createElement(Flex, null, t.map(function (e, t) {
        return React.createElement(TabHeader, {key: e + t}, e)
      }))
    }, r))
  };
CardTabs.propTypes = {
  headers: PropTypes.arrayOf(PropTypes.string),
  selected: PropTypes.number,
  onChange: PropTypes.func
}, CardTabs.defaultProps = {headers: []};
var checkmark = "data:image/svg+xml,%3Csvg%20width%3D%2214%22%20height%3D%2212%22%20viewBox%3D%220%200%2014%2012%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cpath%20d%3D%22M5.17794%208.31171L2.80728%205.82401L2%206.66518L5.17794%2010L12%202.84116L11.1984%202L5.17794%208.31171Z%22%20fill%3D%22white%22%20stroke%3D%22white%22%20stroke-width%3D%221.5%22%2F%3E%3C%2Fsvg%3E";

function _templateObject$9() {
  var e = _taggedTemplateLiteralLoose(["\n  font-size: 1em;\n  width: 1em;\n  height: 1em;\n  position: relative;\n  overflow: hidden;\n  ", ';\n  white-space: nowrap;\n  clip-path: inset(0 round 2px);\n  outline: none;\n  cursor: pointer;\n\n  &:after {\n    content: "";\n    mask: url(', ') no-repeat center center;\n    mask-size: 80%;\n    background-size: cover;\n    background-color: transparent;\n    line-height: 0.95;\n    height: 1em;\n    width: 1em;\n    display: block;\n    position: absolute;\n    top: 0;\n  }\n\n  &:before {\n    content: "";\n    height: 1em;\n    width: 1em;\n    display: block;\n    background-color: ', ";\n    border: ", ";\n    border-radius: 2px;\n    text-align: center;\n    transition: background-color 0.1s ease-out, border-color 0.1s ease-out;\n  }\n\n  &&:disabled:before {\n    background-color: ", ";\n    border-color: ", ";\n  }\n\n  &:disabled:checked:after {\n    background-color: ", ";\n  }\n\n  &:checked:before {\n    background-color: ", ";\n    border-color: ", ";\n  }\n\n  &:checked:after {\n    background-color: ", ";\n  }\n"]);
  return _templateObject$9 = function () {
    return e
  }, e
}

var Checkbox = styled.input.attrs(function () {
  return {type: "checkbox"}
})(_templateObject$9(), all, checkmark, colors.white, borders$1.default, colors.grey[100], colors.grey[300], colors.grey[300], colors.makerTeal, colors.makerTeal, colors.white);

function _templateObject4$3() {
  var e = _taggedTemplateLiteralLoose(["\n  white-space: nowrap;\n"]);
  return _templateObject4$3 = function () {
    return e
  }, e
}

function _templateObject3$3() {
  var e = _taggedTemplateLiteralLoose(["\n  background-color: white;\n  border-radius: ", ";\n  padding-left: ", "px;\n  padding-right: ", "px;\n  padding-top: ", "px;\n  padding-bottom: ", "px;\n  border: ", ";\n  filter: drop-shadow(rgba(159, 159, 159, 0.18) 0px 1px 2px);\n"]);
  return _templateObject3$3 = function () {
    return e
  }, e
}

function _templateObject2$4() {
  var e = _taggedTemplateLiteralLoose(["\n  opacity: 0;\n  transition: opacity 0.2s;\n  pointer-events: none;\n  z-index: 2000;\n  position: relative;\n  margin-top: ", "px;\n\n  ", ":hover + &,\n  ", ":active + &,\n  &:hover {\n    ", ";\n  }\n\n  ", ";\n"]);
  return _templateObject2$4 = function () {
    return e
  }, e
}

function _templateObject$a() {
  var e = _taggedTemplateLiteralLoose(["\n  cursor: pointer;\n"]);
  return _templateObject$a = function () {
    return e
  }, e
}

var Trigger = styled(Box)(_templateObject$a()),
  DropdownMenu = styled.div(_templateObject2$4(), spacing.xs, Trigger, Trigger, function (e) {
    return e.openOnHover && void 0 === e.show && "\n      opacity: 1;\n      pointer-events: auto;\n    "
  }, function (e) {
    return e.show && "\n  opacity: 1;\n  pointer-events: auto;\n  "
  }), Dropdown = function (e) {
    function t() {
      return e.apply(this, arguments) || this
    }

    _inheritsLoose(t, e);
    var o = t.prototype;
    return o.componentDidUpdate = function (e) {
      e.trigger !== this.props.trigger && this.scheduleUpdate && this.scheduleUpdate()
    }, o.render = function () {
      var e = this, t = this.props, o = t.children, n = t.placement, r = t.offset, a = t.show, l = t.openOnHover,
        i = t.hitBoxMargin,
        s = _objectWithoutPropertiesLoose(t, ["children", "placement", "offset", "show", "openOnHover", "hitBoxMargin"]);
      return React.createElement(Manager, null, React.createElement(Reference, null, function (e) {
        var t = e.ref;
        return React.createElement(Trigger, {
          m: "-" + i,
          p: i,
          tabindex: "0"
        }, React.createElement(Box, _extends({display: "inline-block"}, s), React.createElement("div", {ref: t}, s.trigger)))
      }), React.createElement(Popper, {placement: n, modifiers: {offset: {offset: r}}}, function (t) {
        var n = t.ref, r = t.style, i = t.placement, s = t.scheduleUpdate;
        return e.scheduleUpdate = s, React.createElement(DropdownMenu, {
          ref: n,
          style: r,
          "data-placement": i,
          show: a,
          openOnHover: l
        }, o)
      }))
    }, t
  }(React.Component);
Dropdown.propTypes = {
  placement: oneOf(["bottom", "top", "left", "right", "bottom-start", "bottom-end", "top-start", "top-end", "left-start", "left-end", "right-start", "right-end"]),
  offset: oneOfType([string, number]),
  show: bool,
  openOnHover: bool,
  trigger: node.isRequired,
  children: node,
  hitBoxMargin: string
}, Dropdown.defaultProps = {placement: "bottom-start", offset: "0", openOnHover: !0, hitBoxMargin: "25px"};
var StyledDefaultDropdown = styled(Box)(_templateObject3$3(), borderRadiuses.default, spacing.m, spacing.m, spacing["2xs"], spacing["2xs"], borders$1.default),
  DropdownItem = styled(Box).attrs({my: "xs"})(_templateObject4$3()), DefaultDropdown = function (e) {
    var t = e.children, o = _objectWithoutPropertiesLoose(e, ["children"]);
    return React.createElement(StyledDefaultDropdown, o, React.createElement("ul", null, React.Children.map(t, function (e) {
      return React.createElement("li", null, React.createElement(DropdownItem, null, e))
    })))
  };

function _templateObject$b() {
  var e = _taggedTemplateLiteralLoose(["\n  display: grid;\n  ", "\n  ", "\n"]);
  return _templateObject$b = function () {
    return e
  }, e
}

DefaultDropdown.propTypes = {children: node};
var Grid = styled(Box)(_templateObject$b(), parent, gridParent);

function _templateObject3$4() {
  var e = _taggedTemplateLiteralLoose(["\n  color: ", ";\n  margin-top: ", "px;\n  font-size: 0.9em;\n"]);
  return _templateObject3$4 = function () {
    return e
  }, e
}

function _templateObject2$5() {
  var e = _taggedTemplateLiteralLoose(["\n  color: ", ";\n  margin-top: ", "px;\n  font-size: 0.9em;\n"]);
  return _templateObject2$5 = function () {
    return e
  }, e
}

function _templateObject$c() {
  var e = _taggedTemplateLiteralLoose(["\n  padding: 1.4rem;\n  border: ", ";\n  border-radius: ", ";\n  ", "\n  ", "\n  align-items: center;\n  transition: all 200ms;\n  ", "\n  ", "\n  ", "\n  ", "\n\n  ", ";\n"]);
  return _templateObject$c = function () {
    return e
  }, e
}

var InputBorder = styled(Grid)(_templateObject$c(), borders$1.default, borderRadiuses.default, function (e) {
    return e.success && "border-color: " + colors.makerTeal + ";"
  }, function (e) {
    return e.error && "border-color: " + colors.makerOrange + ";"
  }, space$1, dimensions, borders$2, background$1, function (e) {
    return e.disabled && "\n    opacity: 0.6;\n    cursor: not-allowed;\n  "
  }), ErrorMessage = styled(Box)(_templateObject2$5(), colors.orange[500], spacing.xs),
  SuccessMessage = styled(Box)(_templateObject3$4(), colors.teal[500], spacing.xs);

function _templateObject2$6() {
  var e = _taggedTemplateLiteralLoose(["\n  position: relative;\n  background: transparent;\n  border: none;\n  width: 0px;\n  font-size: 1em;\n  color: ", ";\n  min-width: fill-available;\n  outline: none;\n  ", "\n\n  ::placeholder {\n    color: ", ";\n  }\n\n  ", ";\n"]);
  return _templateObject2$6 = function () {
    return e
  }, e
}

function _templateObject$d() {
  var e = _taggedTemplateLiteralLoose(["\n  ", "\n  font-size: 1em;\n"]);
  return _templateObject$d = function () {
    return e
  }, e
}

var Label = styled.label(_templateObject$d(), space$1),
  StyledInput = styled.input(_templateObject2$6(), colors.text, typography$1, colors.grey[400], function (e) {
    return e.disabled && "\n    cursor: not-allowed;\n  "
  }), Input = function (e) {
    var t = e.before, o = e.after, n = e.failureMessage, r = e.successMessage, a = e.success, l = e.error,
      i = _objectWithoutPropertiesLoose(e, ["before", "after", "failureMessage", "successMessage", "success", "error"]),
      s = (i.m, i.mx, i.my, i.mt, i.mb, i.ml, i.mr, _objectWithoutPropertiesLoose(i, ["m", "mx", "my", "mt", "mb", "ml", "mr"])),
      c = (i.p, i.px, i.py, i.pt, i.pb, i.pl, i.pr, _objectWithoutPropertiesLoose(i, ["p", "px", "py", "pt", "pb", "pl", "pr"])),
      p = "_" + Math.random().toString(36).substr(2, 9);
    return React.createElement(Box, c, React.createElement(InputBorder, _extends({
      error: l || n,
      success: a || r,
      gridTemplateColumns: (t ? "auto " : "") + "1fr" + (o ? " auto" : ""),
      gridColumnGap: "s"
    }, s), t ? React.createElement(Label, {htmlFor: p}, t) : null, React.createElement(StyledInput, _extends({}, i, {id: p})), o ? React.createElement(Label, {htmlFor: p}, o) : null), n ? React.createElement(ErrorMessage, null, n) : null, r ? React.createElement(SuccessMessage, null, r) : null)
  };

function _templateObject$e() {
  var e = _taggedTemplateLiteralLoose(["\n  color: ", ";\n  transition: color 0.2s;\n  cursor: pointer;\n  ", "\n\n  &:hover {\n    color: ", ";\n  }\n"]);
  return _templateObject$e = function () {
    return e
  }, e
}

Input.propTypes = {
  before: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
  after: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
  successMessage: PropTypes.string,
  failureMessage: PropTypes.string,
  success: PropTypes.any,
  error: PropTypes.any
};
var StyledLink = styled.a(_templateObject$e(), colors.linkBlue, all, colors.slate[600]), Link = function (e) {
  var t = e.children, o = _objectWithoutPropertiesLoose(e, ["children"]);
  return React.createElement(StyledLink, o, t)
};
Link.propTypes = {children: PropTypes.node};
var _extends$1 = Object.assign || function (e) {
  for (var t = 1; t < arguments.length; t++) {
    var o = arguments[t];
    for (var n in o) Object.prototype.hasOwnProperty.call(o, n) && (e[n] = o[n])
  }
  return e
};

function _objectWithoutProperties$1(e, t) {
  var o = {};
  for (var n in e) t.indexOf(n) >= 0 || Object.prototype.hasOwnProperty.call(e, n) && (o[n] = e[n]);
  return o
}

var Cross = e => {
  let t = _objectWithoutProperties$1(e, ["styles"]);
  return React.createElement("svg", _extends$1({
    width: "21",
    height: "21",
    viewBox: "0 0 21 21",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, t), React.createElement("path", {
    opacity: ".5",
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M11.246 10.5l8.6-8.6a.528.528 0 1 0-.746-.746l-8.6 8.6-8.6-8.6a.526.526 0 0 0-.9.374c0 .145.059.277.155.373L9.754 10.5l-8.6 8.6a.527.527 0 1 0 .746.746l8.6-8.6 8.6 8.6a.528.528 0 0 0 .745-.747L11.246 10.5z",
    fill: "#EBEBEB",
    stroke: "#8D8EA7"
  }))
};

function _templateObject$f() {
  var e = _taggedTemplateLiteralLoose(["\n  ", "\n"]);
  return _templateObject$f = function () {
    return e
  }, e
}

var StyledPosition = styled(Box)(_templateObject$f(), position$1), getPosition = function (e, t, o, n) {
  return e ? "relative" : t ? "absolute" : o ? "fixed" : n ? "sticky" : "static"
}, Position = function (e) {
  var t = e.children, o = e.relative, n = e.absolute, r = e.fixed, a = e.sticky,
    l = _objectWithoutPropertiesLoose(e, ["children", "relative", "absolute", "fixed", "sticky"]);
  return React.createElement(StyledPosition, _extends({position: getPosition(o, n, r, a)}, l), t)
};

function _templateObject2$7() {
  var e = _taggedTemplateLiteralLoose(["\n  background-color: white;\n  border-radius: ", ";\n  padding: ", "px;\n  box-shadow: 0px 3px 13px rgba(67, 67, 67, 0.13);\n"]);
  return _templateObject2$7 = function () {
    return e
  }, e
}

function _templateObject$g() {
  var e = _taggedTemplateLiteralLoose(["\n  background: rgba(0, 0, 0, 0.2);\n  transition: opacity 0.2s;\n  pointer-events: none;\n  opacity: 0;\n\n  ", ";\n"]);
  return _templateObject$g = function () {
    return e
  }, e
}

var FadeIn = styled(Position)(_templateObject$g(), function (e) {
    return e.show && "\n    pointer-events: unset;\n    opacity: 1;\n  "
  }), StyledDefaultModal = styled(Box)(_templateObject2$7(), borderRadiuses.default, spacing.m),
  ModalBackground = function (e) {
    function t() {
      return e.apply(this, arguments) || this
    }

    return _inheritsLoose(t, e), t.prototype.render = function () {
      return React.createElement(FadeIn, {
        position: "fixed",
        top: "0",
        left: "0",
        show: this.props.show,
        width: "100vw",
        height: "100vh",
        zIndex: "20000"
      }, React.createElement(Flex, {
        alignItems: "center",
        justifyContent: "center",
        height: "100%"
      }, this.props.children))
    }, t
  }(React.Component);
ModalBackground.propTypes = {show: PropTypes.bool, children: PropTypes.node}, ModalBackground.defaultProps = {show: !1};
var ModalPopupWithoutClickOutside = function (e) {
  function t() {
    return e.apply(this, arguments) || this
  }

  _inheritsLoose(t, e);
  var o = t.prototype;
  return o.handleClickOutside = function () {
    this.props.onClose()
  }, o.render = function () {
    return React.createElement(StyledDefaultModal, null, this.props.children)
  }, t
}(React.Component);
ModalPopupWithoutClickOutside.propTypes = {onClose: PropTypes.func, children: PropTypes.node};
var ModalPopup = onClickOutside(ModalPopupWithoutClickOutside), Modal = function (e) {
  function t() {
    return e.apply(this, arguments) || this
  }

  return _inheritsLoose(t, e), t.prototype.render = function () {
    return React.createElement(ModalBackground, {show: this.props.show}, this.props.show && React.createElement(ModalPopup, this.props, React.createElement(Flex, {justifyContent: "flex-end"}, React.createElement(Cross, {
      style: {cursor: "pointer"},
      onClick: this.props.onClose
    })), this.props.children))
  }, t
}(React.Component);

function _templateObject2$8() {
  var e = _taggedTemplateLiteralLoose(["\n  ", ";\n  ", ";\n  width: 100%;\n  overflow-x: ", ";\n  overflow-y: ", ";\n  ::-webkit-scrollbar {\n    display: none;\n  }\n  -ms-overflow-style: none;\n"]);
  return _templateObject2$8 = function () {
    return e
  }, e
}

function _templateObject$h() {
  var e = _taggedTemplateLiteralLoose(["\n  overflow: hidden;\n"]);
  return _templateObject$h = function () {
    return e
  }, e
}

Modal.propTypes = {
  show: PropTypes.bool,
  onClose: PropTypes.func,
  children: PropTypes.node
}, Modal.defaultProps = {
  show: !1, onClose: function () {
  }
};
var OuterContainer = styled(Box)(_templateObject$h()), InnerContainer = styled.div(_templateObject2$8(), function (e) {
  return "scroll" === e.x && "margin-bottom: -15px"
}, function (e) {
  return "scroll" === e.y && "margin-right: -15px"
}, function (e) {
  return e.x
}, function (e) {
  return e.y
}), Overflow = function (e) {
  var t = e.x, o = e.y, n = e.children, r = _objectWithoutPropertiesLoose(e, ["x", "y", "children"]);
  return React.createElement(OuterContainer, r, React.createElement(InnerContainer, {
    x: t,
    y: o
  }, React.createElement(Box, {width: r.width, height: r.height, maxWidth: r.maxWidth, maxHeight: r.maxHeight}, n)))
};

function _templateObject$i() {
  var e = _taggedTemplateLiteralLoose(["\n  font-size: 1em;\n  width: 1em;\n  height: 1em;\n  overflow: hidden;\n  ", ";\n  white-space: nowrap;\n  outline: none;\n  clip-path: circle(0.5em at center);\n  ", ';\n\n  &:before {\n    content: "";\n    border: ', ";\n    background-color: ", ";\n    display: block;\n    width: 1em;\n    height: 1em;\n    cursor: pointer;\n    transition: box-shadow 0.1s ease-out;\n    border-radius: ", ";\n  }\n\n  &:disabled:before {\n    background-color: ", ";\n  }\n\n  &:checked:before {\n    border-color: ", ";\n    box-shadow: inset 0 0 0 0.2em ", ";\n  }\n"]);
  return _templateObject$i = function () {
    return e
  }, e
}

Overflow.defaultProps = {x: "visible", y: "scroll"};
var Radio = styled.input.attrs(function () {
    return {type: "radio"}
  })(_templateObject$i(), all, all, borders$1.default, colors.white, borderRadiuses.circle, colors.grey[100], colors.makerTeal, colors.makerTeal),
  _extends$2 = Object.assign || function (e) {
    for (var t = 1; t < arguments.length; t++) {
      var o = arguments[t];
      for (var n in o) Object.prototype.hasOwnProperty.call(o, n) && (e[n] = o[n])
    }
    return e
  };

function _objectWithoutProperties$2(e, t) {
  var o = {};
  for (var n in e) t.indexOf(n) >= 0 || Object.prototype.hasOwnProperty.call(e, n) && (o[n] = e[n]);
  return o
}

var UpCaretSvg = e => {
  let t = _objectWithoutProperties$2(e, ["styles"]);
  return React.createElement("svg", _extends$2({
    width: "10",
    height: "7",
    viewBox: "0 0 10 7",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, t), React.createElement("path", {
    d: "M1 5.134L4.77 1.78l3.77 3.354",
    stroke: "#9898A6",
    strokeWidth: "1.8",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }))
};

function _templateObject2$9() {
  var e = _taggedTemplateLiteralLoose(["\n  transition: transform 0.2s;\n\n  ", ";\n"]);
  return _templateObject2$9 = function () {
    return e
  }, e
}

function _templateObject$j() {
  var e = _taggedTemplateLiteralLoose(["\n  cursor: pointer;\n\n  &:hover {\n    background: ", ";\n  }\n"]);
  return _templateObject$j = function () {
    return e
  }, e
}

var Selectable = styled(Box).attrs(function () {
  return {borderRadius: "m"}
})(_templateObject$j(), colors.backgroundGrey), UpCaret = styled(UpCaretSvg)(_templateObject2$9(), function (e) {
  return e.open && "transform: rotate(180deg);"
}), Select = function (e) {
  function t(t) {
    var o;
    return (o = e.call(this, t) || this).state = {open: !1}, o.onSelect = o.onSelect.bind(_assertThisInitialized(o)), o.toggleDropdown = o.toggleDropdown.bind(_assertThisInitialized(o)), o.closeDropdown = o.closeDropdown.bind(_assertThisInitialized(o)), o.handleClickOutside = o.handleClickOutside.bind(_assertThisInitialized(o)), o
  }

  _inheritsLoose(t, e);
  var o = t.prototype;
  return o.onSelect = function (e) {
    this.setState({open: !1}), this.props.onChange(e)
  }, o.toggleDropdown = function () {
    this.props.disabled || this.setState({open: !this.state.open})
  }, o.closeDropdown = function () {
    this.setState({open: !1})
  }, o.handleClickOutside = function () {
    this.closeDropdown()
  }, o.render = function () {
    var e = this, t = React.Children.toArray(this.props.children), o = t.find(function (t) {
      return t.props.value === e.props.value || t.props.value === e.props.defaultValue
    }) || t.length > 0 && t[0];
    return React.createElement(Dropdown, {
      show: this.state.open,
      openOnHover: !1,
      onClick: this.toggleDropdown,
      onClickOutside: this.closeDropdown,
      trigger: React.createElement(InputBorder, this.props, React.createElement(Grid, {
        gridTemplateColumns: "1fr auto",
        alignItems: "center",
        gridColumnGap: "s",
        width: "100%"
      }, o, React.createElement(UpCaret, {open: this.state.open})))
    }, React.createElement(Card, {width: "100%"}, React.Children.map(t, function (t) {
      return React.createElement(Selectable, {
        py: "xs", px: "s", onClick: function () {
          return e.onSelect(t.props.value)
        }
      }, t)
    })))
  }, t
}(React.Component);
Select.propTypes = {
  onChange: PropTypes.func,
  disabled: PropTypes.bool,
  children: PropTypes.node,
  value: PropTypes.string,
  defaultValue: PropTypes.string
}, Select.defaultProps = {
  onChange: function () {
  }, disabled: !1
};
var Select$1 = onClickOutside(Select);

function _templateObject$k() {
  var e = _taggedTemplateLiteralLoose(["\n  transform: scaleX(0);\n  transform-origin: right;\n  transition: transform 0.3s ease-in-out;\n\n  ", "\n\n  ", "\n"]);
  return _templateObject$k = function () {
    return e
  }, e
}

var Bar = styled(Box).attrs(function () {
  return {bg: "makerTeal", borderRadius: "m", width: "100%", height: "100%"}
})(_templateObject$k(), function (e) {
  return e.selected && "\n    transform-origin: left;\n    transform: scaleX(1);\n  "
}, function (e) {
  return e.backwards && "\n    transform-origin: " + (e.selected ? "right" : "left") + ";\n  "
}), Stepper = function (e) {
  function t(t) {
    var o;
    return (o = e.call(this, t) || this).state = {isGoingBackwards: !1}, o
  }

  _inheritsLoose(t, e);
  var o = t.prototype;
  return o.UNSAFE_componentWillReceiveProps = function (e) {
    this.setState({isGoingBackwards: e.selected < this.props.selected})
  }, o.render = function () {
    var e = this;
    return React.createElement(Box, null, React.createElement(Grid, _extends({
      maxWidth: 185 * this.props.steps.length - 1 + "px",
      justifyContent: "center",
      gridTemplateColumns: ["repeat(" + this.props.steps.length + ", 1fr)"],
      gridColumnGap: {s: 12, m: 25}
    }, this.props), this.props.steps.map(function (t, o) {
      var n = e.props.selected === o, r = e.state.isGoingBackwards;
      return React.createElement("div", {key: t}, React.createElement(Box, {
        bg: "grey.300",
        borderRadius: "full",
        height: "3px",
        mb: "s",
        width: "100%",
        className: 'stepper-bar' + (n ? ' selected' : '')
      }, React.createElement(Bar, {selected: n, backwards: r})), React.createElement(Box, {
        className: 'stepper-text' + (n ? ' selected' : ''),
        display: {
          s: "none",
          m: "block"
        }, textAlign: "center"
      }, React.createElement(Text, {color: n ? "makerTeal" : "grey.500", fontSize: "s", t: "subheading"}, t)))
    })))
  }, t
}(React.Component);

function _templateObject6$2() {
  var e = _taggedTemplateLiteralLoose(["\n  ", "\n"]);
  return _templateObject6$2 = function () {
    return e
  }, e
}

function _templateObject5$2() {
  var e = _taggedTemplateLiteralLoose(["\n  ", "\n"]);
  return _templateObject5$2 = function () {
    return e
  }, e
}

function _templateObject4$4() {
  var e = _taggedTemplateLiteralLoose(["\n  padding-bottom: ", "px;\n  padding-top: ", "px;\n\n  .cozy & {\n    padding-bottom: ", "px;\n    padding-top: ", "px;\n  }\n\n  && {\n    ", "\n  }\n"]);
  return _templateObject4$4 = function () {
    return e
  }, e
}

function _templateObject3$5() {
  var e = _taggedTemplateLiteralLoose(["\n  tbody & {\n    border-bottom: 1px solid;\n    border-color: ", ";\n  }\n  &:last-child {\n    border-bottom: none;\n  }\n  /* boosting specificity to remain backwards compatible but also allowing styled-system props */\n  &&& {\n    ", "\n  }\n"]);
  return _templateObject3$5 = function () {
    return e
  }, e
}

function _templateObject2$a() {
  var e = _taggedTemplateLiteralLoose(["\n  /* boosting specificity to remain backwards compatible but also allowing styled-system props */\n  && {\n    ", ";\n    color: ", ";\n    padding-bottom: ", "px;\n    ", "\n  }\n"]);
  return _templateObject2$a = function () {
    return e
  }, e
}

function _templateObject$l() {
  var e = _taggedTemplateLiteralLoose(["\n  ", ";\n\n  tr {\n    border-bottom: 1px solid;\n    border-color: ", ";\n  }\n\n  tr:last-child {\n    border-bottom: none;\n  }\n\n  th {\n    ", ";\n    color: ", ";\n    padding-bottom: ", "px;\n  }\n\n  td {\n    padding-bottom: ", "px;\n    padding-top: ", "px;\n    ", ";\n  }\n"]);
  return _templateObject$l = function () {
    return e
  }, e
}

Stepper.defaultProps = {steps: [], selected: 0}, Stepper.propTypes = {
  steps: PropTypes.arrayOf(PropTypes.string),
  selected: PropTypes.number
};
var StyledTable = styled.table(_templateObject$l(), all, colors.grey[200], typography.subheading, colors.darkLavender, spacing.xs, spacing.s, spacing.s, function (e) {
    return "cozy" === e.variant && "\n      padding-bottom: " + spacing.xs + "px;\n      padding-top: " + spacing.xs + "px;\n    "
  }), Th = styled.th(_templateObject2$a(), typography.subheading, colors.darkLavender, spacing.xs, all),
  Tr = styled.tr(_templateObject3$5(), colors.grey[200], all),
  Td = styled.td(_templateObject4$4(), spacing.s, spacing.s, spacing.xs, spacing.xs, all), Table = function (e) {
    var t = e.children, o = _objectWithoutPropertiesLoose(e, ["children"]);
    return React.createElement(StyledTable, _extends({className: o.variant}, o), t)
  };

function _templateObject$m() {
  var e = _taggedTemplateLiteralLoose(["\n  font-size: 1em;\n  width: 100%;\n  height: 100%;\n  border: 0;\n  resize: none;\n  outline: none;\n  color: ", ";\n  ", "\n\n  ::placeholder {\n    color: ", ";\n  }\n"]);
  return _templateObject$m = function () {
    return e
  }, e
}

Table.thead = styled.thead(_templateObject5$2(), all), Table.tbody = styled.tbody(_templateObject6$2(), all), Table.th = Th, Table.tr = Tr, Table.td = Td, Table.propTypes = {
  variant: oneOf(["normal", "cozy"]),
  children: node
}, Table.defaultProps = {variant: "normal"};
var StyledTextArea = styled.textarea(_templateObject$m(), colors.text, typography$1, colors.grey[400]),
  TextArea = function (e) {
    var t = e.error, o = e.success, n = e.successMessage, r = e.failureMessage,
      a = _objectWithoutPropertiesLoose(e, ["error", "success", "successMessage", "failureMessage"]),
      l = (a.m, a.mx, a.my, a.mt, a.mb, a.ml, a.mr, _objectWithoutPropertiesLoose(a, ["m", "mx", "my", "mt", "mb", "ml", "mr"])),
      i = (a.p, a.px, a.py, a.pt, a.pb, a.pl, a.pr, a.width, a.maxWidth, a.minWidth, a.height, a.minHeight, a.maxHeight, _objectWithoutPropertiesLoose(a, ["p", "px", "py", "pt", "pb", "pl", "pr", "width", "maxWidth", "minWidth", "height", "minHeight", "maxHeight"]));
    return React.createElement(Box, i, React.createElement(InputBorder, _extends({
      error: t || r,
      success: o || n
    }, l), React.createElement(StyledTextArea, a)), r ? React.createElement(ErrorMessage, null, r) : null, n ? React.createElement(SuccessMessage, null, n) : null)
  };

function _templateObject2$b() {
  var e = _taggedTemplateLiteralLoose(["\n  ", "\n"]);
  return _templateObject2$b = function () {
    return e
  }, e
}

function _templateObject$n() {
  var e = _taggedTemplateLiteralLoose(["\n  ", "\n"]);
  return _templateObject$n = function () {
    return e
  }, e
}

TextArea.propTypes = {
  successMessage: PropTypes.string,
  failureMessage: PropTypes.string,
  success: PropTypes.any,
  error: PropTypes.any
};
var TOGGLE_WIDTH = "3.8rem", BORDER_WIDTH = "0.2rem", TOGGLE_BUTTON_WIDTH = "1.7rem",
  OuterToggle = styled.button(_templateObject$n(), all), InnerToggle = styled(Box)(_templateObject2$b(), function (e) {
    return e.active && "\n    transform: translateX(calc(" + TOGGLE_WIDTH + " - ( 2 * " + BORDER_WIDTH + ") - " + TOGGLE_BUTTON_WIDTH + "));\n  "
  }), Toggle = function (e) {
    var t = e.active, o = _objectWithoutPropertiesLoose(e, ["active"]);
    return React.createElement(OuterToggle, _extends({
      p: "0",
      transition: "background-color 0.2s, border-color 0.2s",
      borderRadius: "pill",
      bg: t ? "makerTeal" : "coolGrey.400",
      width: TOGGLE_WIDTH,
      height: "2.3rem",
      border: BORDER_WIDTH + " solid",
      borderColor: t ? "makerTeal" : "coolGrey.400",
      style: {cursor: "pointer"},
      "aria-pressed": t
    }, o), React.createElement(InnerToggle, {
      "aria-hidden": "true",
      transition: "transform 0.2s",
      active: t,
      width: TOGGLE_BUTTON_WIDTH,
      height: TOGGLE_BUTTON_WIDTH,
      bg: "white",
      borderRadius: "circle"
    }))
  }, shared = {
    breakpoints: breakpoints,
    space: spacing,
    fontFamilies: fonts,
    colors: colors,
    fontSizes: fontSizes,
    fontWeights: fontWeights,
    typography: typography,
    radii: borderRadiuses,
    borders: borders$1,
    lineHeights: lineHeights,
    buttons: {
      primary: {
        color: colors.white,
        backgroundColor: colors.makerTeal,
        borderColor: colors.makerTeal,
        "&:hover": {color: colors.white, backgroundColor: colors.teal[600], borderColor: colors.teal[600]},
        "&:active": {color: colors.grey[100], backgroundColor: colors.teal[700], borderColor: colors.teal[700]}
      },
      "primary-outline": {
        color: colors.makerTeal,
        backgroundColor: "transparent",
        borderColor: colors.makerTeal,
        "&:hover": {color: colors.teal[700], backgroundColor: "transparent", borderColor: colors.teal[700]},
        "&:active": {
          color: colors.teal[800],
          backgroundColor: "rgba(237, 237, 237, 0.2)",
          borderColor: colors.teal[800],
          boxShadow: "none"
        }
      },
      secondary: {
        color: colors.darkLavender,
        backgroundColor: colors.coolGrey[300],
        borderColor: colors.coolGrey[300],
        "&:hover": {color: colors.slate[800], backgroundColor: colors.coolGrey[400], borderColor: colors.coolGrey[400]},
        "&:active": {color: colors.slate[800], backgroundColor: colors.coolGrey[500], borderColor: colors.coolGrey[500]}
      },
      "secondary-outline": {
        color: colors.slate[400],
        backgroundColor: "transparent",
        borderColor: colors.grey[400],
        "&:hover": {color: colors.slate[500], backgroundColor: "transparent", borderColor: colors.grey[500]},
        "&:active": {color: colors.slate[600], backgroundColor: "rgba(237, 237, 237, 0.2)", borderColor: colors.grey[500]}
      },
      danger: {
        color: colors.white,
        backgroundColor: colors.orange[600],
        borderColor: colors.orange[600],
        "&:hover": {color: colors.white, backgroundColor: colors.orange[700], borderColor: colors.orange[700]},
        "&:active": {color: colors.grey[200], backgroundColor: colors.orange[800], borderColor: colors.orange[800]}
      },
      "danger-outline": {
        color: colors.orange[600],
        backgroundColor: "transparent",
        borderColor: colors.orange[600],
        "&:hover": {color: colors.orange[800], backgroundColor: "transparent", borderColor: colors.orange[800]},
        "&:active": {
          color: colors.orange[900],
          backgroundColor: "rgba(237, 237, 237, 0.2)",
          borderColor: colors.orange[900]
        }
      }
    }
  }, dark = _extends({}, shared, {
    logo: {color: "#FFFFFF"},
    header: {linkHeaderColor: "#FFFFFF", backgroundColor: "black", linkColor: "#627685"},
    footer: {
      color: "white",
      backgroundColor: "black",
      listHeaderColor: "white",
      linkColor: "#CCCCCC",
      linkHoverColor: "white"
    }
  }), light = _extends({}, shared, {
    logo: {color: "#291A41"},
    header: {linkHeaderColor: "#291A41", backgroundColor: "white", linkColor: "#627685"},
    footer: {
      color: "#53546A",
      backgroundColor: "white",
      listHeaderColor: "#0E1029",
      linkColor: "#53546A",
      linkHoverColor: "black"
    }
  });
export {
  Address,
  Box,
  Button,
  Card,
  CardBody,
  CardTabs,
  Checkbox,
  Dropdown,
  DefaultDropdown,
  Flex,
  Grid,
  Input,
  Link,
  Loader,
  Modal,
  Overflow,
  Position,
  Radio,
  Select$1 as Select,
  Stepper,
  Table,
  Text,
  TextArea,
  Toggle,
  Tooltip,
  dark as themeDark,
  light as themeLight,
  shared as themeShared
};
