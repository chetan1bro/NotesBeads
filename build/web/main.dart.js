define('zapp_user_main', ['dart_sdk', 'flutter_sdk'], (function load__zapp_user_main(dart_sdk, flutter_sdk) {
  'use strict';
  const core = dart_sdk.core;
  const async = dart_sdk.async;
  const _interceptors = dart_sdk._interceptors;
  const js = dart_sdk.js;
  const ui = dart_sdk.ui;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const framework = flutter_sdk.src__widgets__framework;
  const text = flutter_sdk.src__widgets__text;
  const app = flutter_sdk.src__material__app;
  const scaffold = flutter_sdk.src__material__scaffold;
  const app_bar = flutter_sdk.src__material__app_bar;
  const basic = flutter_sdk.src__widgets__basic;
  const flex = flutter_sdk.src__rendering__flex;
  const text_style = flutter_sdk.src__painting__text_style;
  const colors = flutter_sdk.src__material__colors;
  const scroll_view = flutter_sdk.src__widgets__scroll_view;
  const floating_action_button = flutter_sdk.src__material__floating_action_button;
  const navigator = flutter_sdk.src__widgets__navigator;
  const page = flutter_sdk.src__material__page;
  const icon = flutter_sdk.src__widgets__icon;
  const icons = flutter_sdk.src__material__icons;
  const binding = flutter_sdk.src__widgets__binding;
  const theme_data = flutter_sdk.src__material__theme_data;
  const app_bar_theme = flutter_sdk.src__material__app_bar_theme;
  const icon_theme_data = flutter_sdk.src__widgets__icon_theme_data;
  const editable_text = flutter_sdk.src__widgets__editable_text;
  const edge_insets = flutter_sdk.src__painting__edge_insets;
  const container = flutter_sdk.src__widgets__container;
  const text_field = flutter_sdk.src__material__text_field;
  const input_decorator = flutter_sdk.src__material__input_decorator;
  const input_border = flutter_sdk.src__material__input_border;
  const elevated_button = flutter_sdk.src__material__elevated_button;
  var $46zapp_entry = Object.create(dart.library);
  var main = Object.create(dart.library);
  var web_plugin_registrant = Object.create(dart.library);
  var new_event = Object.create(dart.library);
  var $toString = dartx.toString;
  var $length = dartx.length;
  var $_get = dartx._get;
  var $add = dartx.add;
  dart._checkModuleNullSafetyMode(true);
  dart._checkModuleRuntimeTypes(false);
  var T = {
    VoidTovoid: () => (T.VoidTovoid = dart.constFn(dart.fnType(dart.void, [])))(),
    ListOfString: () => (T.ListOfString = dart.constFn(core.List$(core.String)))(),
    ListOfStringTodynamic: () => (T.ListOfStringTodynamic = dart.constFn(dart.fnType(dart.dynamic, [T.ListOfString()])))(),
    JSArrayOfString: () => (T.JSArrayOfString = dart.constFn(_interceptors.JSArray$(core.String)))(),
    dynamicToNull: () => (T.dynamicToNull = dart.constFn(dart.fnType(core.Null, [dart.dynamic])))(),
    VoidToNull: () => (T.VoidToNull = dart.constFn(dart.fnType(core.Null, [])))(),
    ObjectAndStackTraceTovoid: () => (T.ObjectAndStackTraceTovoid = dart.constFn(dart.fnType(dart.void, [core.Object, core.StackTrace])))(),
    ZoneAndZoneDelegateAndZone__Tovoid: () => (T.ZoneAndZoneDelegateAndZone__Tovoid = dart.constFn(dart.fnType(dart.void, [async.Zone, async.ZoneDelegate, async.Zone, core.String])))(),
    JSArrayOfWidget: () => (T.JSArrayOfWidget = dart.constFn(_interceptors.JSArray$(framework.Widget)))(),
    BuildContextAndintToWidget: () => (T.BuildContextAndintToWidget = dart.constFn(dart.fnType(framework.Widget, [framework.BuildContext, core.int])))(),
    BuildContextToNewEventScreen: () => (T.BuildContextToNewEventScreen = dart.constFn(dart.fnType(new_event.NewEventScreen, [framework.BuildContext])))(),
    FutureOfvoid: () => (T.FutureOfvoid = dart.constFn(async.Future$(dart.void)))(),
    VoidToFutureOfvoid: () => (T.VoidToFutureOfvoid = dart.constFn(dart.fnType(T.FutureOfvoid(), [])))(),
    BuildContextToFloatingActionButton: () => (T.BuildContextToFloatingActionButton = dart.constFn(dart.fnType(floating_action_button.FloatingActionButton, [framework.BuildContext])))()
  };
  const CT = Object.create({
    _: () => (C, CT)
  });
  dart.defineLazy(CT, {
    get C0() {
      return C[0] = dart.fn(main.main, T.VoidTovoid());
    },
    get C1() {
      return C[1] = dart.const({
        __proto__: basic.SizedBox.prototype,
        [Widget_key]: null,
        [SingleChildRenderObjectWidget_child]: null,
        [SizedBox_height]: null,
        [SizedBox_width]: 10
      });
    },
    get C4() {
      return C[4] = dart.const({
        __proto__: ui.Color.prototype,
        [Color_value]: 4278190080
      });
    },
    get C3() {
      return C[3] = dart.const({
        __proto__: text_style.TextStyle.prototype,
        [TextStyle_overflow]: null,
        [TextStyle_fontVariations]: null,
        [TextStyle_fontFeatures]: null,
        [TextStyle_shadows]: null,
        [TextStyle_debugLabel]: null,
        [TextStyle_decorationThickness]: null,
        [TextStyle_decorationStyle]: null,
        [TextStyle_decorationColor]: null,
        [TextStyle_decoration]: null,
        [TextStyle_background]: null,
        [TextStyle_foreground]: null,
        [TextStyle_locale]: null,
        [TextStyle_leadingDistribution]: null,
        [TextStyle_height]: null,
        [TextStyle_textBaseline]: null,
        [TextStyle_wordSpacing]: null,
        [TextStyle_letterSpacing]: null,
        [TextStyle_fontStyle]: null,
        [TextStyle_fontWeight]: null,
        [TextStyle_fontSize]: null,
        [TextStyle__package]: null,
        [TextStyle__fontFamilyFallback]: null,
        [TextStyle_fontFamily]: null,
        [TextStyle_backgroundColor]: null,
        [TextStyle_color]: C[4] || CT.C4,
        [TextStyle_inherit]: true
      });
    },
    get C2() {
      return C[2] = dart.const({
        __proto__: text.Text.prototype,
        [Widget_key]: null,
        [Text_selectionColor]: null,
        [Text_textHeightBehavior]: null,
        [Text_textWidthBasis]: null,
        [Text_semanticsLabel]: null,
        [Text_maxLines]: null,
        [Text_textScaleFactor]: null,
        [Text_overflow]: null,
        [Text_softWrap]: null,
        [Text_locale]: null,
        [Text_textDirection]: null,
        [Text_textAlign]: null,
        [Text_strutStyle]: null,
        [Text_style]: C[3] || CT.C3,
        [Text_textSpan]: null,
        [Text_data]: "NotesBeads"
      });
    },
    get C5() {
      return C[5] = dart.const({
        __proto__: edge_insets.EdgeInsets.prototype,
        [EdgeInsets_bottom]: 0,
        [EdgeInsets_right]: 0,
        [EdgeInsets_top]: 0,
        [EdgeInsets_left]: 0
      });
    }
  }, false);
  var C = Array(6).fill(void 0);
  var I = [
    "file:///zapp/project/lib/main.dart",
    "file:///zapp/project/lib/new_event.dart"
  ];
  $46zapp_entry.runAppGuarded = function runAppGuarded() {
    async.runZonedGuarded(core.Null, dart.fn(() => {
      if (T.ListOfStringTodynamic().is(C[0] || CT.C0)) {
        T.ListOfStringTodynamic().as(C[0] || CT.C0)(T.JSArrayOfString().of([]));
      } else {
        (C[0] || CT.C0)();
      }
      if (js.context.hasProperty("__notifyFlutterRendered")) {
        async.Future.delayed(new core.Duration.new({milliseconds: 250})).then(core.Null, dart.fn(_ => {
          js.context.callMethod("__notifyFlutterRendered", [false]);
        }, T.dynamicToNull()));
      }
    }, T.VoidToNull()), dart.fn((e, stackTrace) => {
      if (js.context.hasProperty("zappHandlerUserError")) {
        js.context.callMethod("zappHandlerUserError", [e[$toString](), stackTrace.toString()]);
      }
    }, T.ObjectAndStackTraceTovoid()), {zoneSpecification: new async._ZoneSpecification.new({print: dart.fn((self, parent, zone, line) => {
          if (js.context.hasProperty("zappHandlerUserPrint")) {
            js.context.callMethod("zappHandlerUserPrint", [line]);
          }
        }, T.ZoneAndZoneDelegateAndZone__Tovoid())})});
  };
  $46zapp_entry.main = function main$() {
    return async.async(dart.void, function* main() {
      yield ui.webOnlyWarmupEngine({runApp: dart.fn(() => {
          $46zapp_entry.runAppGuarded();
        }, T.VoidToNull()), registerPlugins: dart.fn(() => {
          web_plugin_registrant.registerPlugins();
        }, T.VoidToNull())});
    });
  };
  main.MyApp = class MyApp extends framework.StatefulWidget {
    createState() {
      return new main._MyApp.new();
    }
    static ['_#new#tearOff']() {
      return new main.MyApp.new();
    }
  };
  (main.MyApp.new = function() {
    main.MyApp.__proto__.new.call(this);
    ;
  }).prototype = main.MyApp.prototype;
  dart.addTypeTests(main.MyApp);
  dart.addTypeCaches(main.MyApp);
  dart.setMethodSignature(main.MyApp, () => ({
    __proto__: dart.getMethods(main.MyApp.__proto__),
    createState: dart.fnType(framework.State$(framework.StatefulWidget), [])
  }));
  dart.setLibraryUri(main.MyApp, I[0]);
  var _list = dart.privateName(main, "_list");
  var Widget_key = dart.privateName(framework, "Widget.key");
  var SingleChildRenderObjectWidget_child = dart.privateName(framework, "SingleChildRenderObjectWidget.child");
  var SizedBox_height = dart.privateName(basic, "SizedBox.height");
  var SizedBox_width = dart.privateName(basic, "SizedBox.width");
  var Text_selectionColor = dart.privateName(text, "Text.selectionColor");
  var Text_textHeightBehavior = dart.privateName(text, "Text.textHeightBehavior");
  var Text_textWidthBasis = dart.privateName(text, "Text.textWidthBasis");
  var Text_semanticsLabel = dart.privateName(text, "Text.semanticsLabel");
  var Text_maxLines = dart.privateName(text, "Text.maxLines");
  var Text_textScaleFactor = dart.privateName(text, "Text.textScaleFactor");
  var Text_overflow = dart.privateName(text, "Text.overflow");
  var Text_softWrap = dart.privateName(text, "Text.softWrap");
  var Text_locale = dart.privateName(text, "Text.locale");
  var Text_textDirection = dart.privateName(text, "Text.textDirection");
  var Text_textAlign = dart.privateName(text, "Text.textAlign");
  var Text_strutStyle = dart.privateName(text, "Text.strutStyle");
  var TextStyle_overflow = dart.privateName(text_style, "TextStyle.overflow");
  var TextStyle_fontVariations = dart.privateName(text_style, "TextStyle.fontVariations");
  var TextStyle_fontFeatures = dart.privateName(text_style, "TextStyle.fontFeatures");
  var TextStyle_shadows = dart.privateName(text_style, "TextStyle.shadows");
  var TextStyle_debugLabel = dart.privateName(text_style, "TextStyle.debugLabel");
  var TextStyle_decorationThickness = dart.privateName(text_style, "TextStyle.decorationThickness");
  var TextStyle_decorationStyle = dart.privateName(text_style, "TextStyle.decorationStyle");
  var TextStyle_decorationColor = dart.privateName(text_style, "TextStyle.decorationColor");
  var TextStyle_decoration = dart.privateName(text_style, "TextStyle.decoration");
  var TextStyle_background = dart.privateName(text_style, "TextStyle.background");
  var TextStyle_foreground = dart.privateName(text_style, "TextStyle.foreground");
  var TextStyle_locale = dart.privateName(text_style, "TextStyle.locale");
  var TextStyle_leadingDistribution = dart.privateName(text_style, "TextStyle.leadingDistribution");
  var TextStyle_height = dart.privateName(text_style, "TextStyle.height");
  var TextStyle_textBaseline = dart.privateName(text_style, "TextStyle.textBaseline");
  var TextStyle_wordSpacing = dart.privateName(text_style, "TextStyle.wordSpacing");
  var TextStyle_letterSpacing = dart.privateName(text_style, "TextStyle.letterSpacing");
  var TextStyle_fontStyle = dart.privateName(text_style, "TextStyle.fontStyle");
  var TextStyle_fontWeight = dart.privateName(text_style, "TextStyle.fontWeight");
  var TextStyle_fontSize = dart.privateName(text_style, "TextStyle.fontSize");
  var TextStyle__package = dart.privateName(text_style, "TextStyle._package");
  var TextStyle__fontFamilyFallback = dart.privateName(text_style, "TextStyle._fontFamilyFallback");
  var TextStyle_fontFamily = dart.privateName(text_style, "TextStyle.fontFamily");
  var TextStyle_backgroundColor = dart.privateName(text_style, "TextStyle.backgroundColor");
  var Color_value = dart.privateName(ui, "Color.value");
  var TextStyle_color = dart.privateName(text_style, "TextStyle.color");
  var TextStyle_inherit = dart.privateName(text_style, "TextStyle.inherit");
  var Text_style = dart.privateName(text, "Text.style");
  var Text_textSpan = dart.privateName(text, "Text.textSpan");
  var Text_data = dart.privateName(text, "Text.data");
  main._MyApp = class _MyApp extends framework.State$(main.MyApp) {
    build(context) {
      return new app.MaterialApp.new({home: new scaffold.Scaffold.new({appBar: new app_bar.AppBar.new({centerTitle: true, title: new basic.Row.new({mainAxisAlignment: flex.MainAxisAlignment.center, children: T.JSArrayOfWidget().of([C[1] || CT.C1, C[2] || CT.C2])}), backgroundColor: colors.Colors.deepPurpleAccent}), body: new scroll_view.ListView.builder({itemCount: this[_list][$length], itemBuilder: dart.fn((context, index) => this[_list][$_get](index), T.BuildContextAndintToWidget())}), floatingActionButton: new basic.Builder.new({builder: dart.fn(context => new floating_action_button.FloatingActionButton.new({onPressed: dart.fn(() => async.async(dart.void, (function*() {
                let newText = core.String.as(yield navigator.Navigator.of(context).push(dart.dynamic, new page.MaterialPageRoute.new({builder: dart.fn(context => new new_event.NewEventScreen.new(), T.BuildContextToNewEventScreen())})));
                this.setState(dart.fn(() => {
                  this[_list][$add](new text.Text.new(newText));
                }, T.VoidTovoid()));
              }).bind(this)), T.VoidToFutureOfvoid()), child: new icon.Icon.new(icons.Icons.add)}), T.BuildContextToFloatingActionButton())})})});
    }
    static ['_#new#tearOff']() {
      return new main._MyApp.new();
    }
  };
  (main._MyApp.new = function() {
    this[_list] = T.JSArrayOfWidget().of([new text.Text.new("Notes")]);
    main._MyApp.__proto__.new.call(this);
    ;
  }).prototype = main._MyApp.prototype;
  dart.addTypeTests(main._MyApp);
  dart.addTypeCaches(main._MyApp);
  dart.setMethodSignature(main._MyApp, () => ({
    __proto__: dart.getMethods(main._MyApp.__proto__),
    build: dart.fnType(framework.Widget, [framework.BuildContext])
  }));
  dart.setLibraryUri(main._MyApp, I[0]);
  dart.setFieldSignature(main._MyApp, () => ({
    __proto__: dart.getFields(main._MyApp.__proto__),
    [_list]: dart.finalFieldType(core.List$(framework.Widget))
  }));
  main.main = function main$0() {
    return binding.runApp(new app.MaterialApp.new({title: "Flutter Demo", theme: theme_data.ThemeData.new({primarySwatch: colors.Colors.blue, appBarTheme: new app_bar_theme.AppBarTheme.new({iconTheme: new icon_theme_data.IconThemeData.new({color: colors.Colors.black}), color: new ui.Color.fromARGB(92, 255, 77, 77)})}), home: new main.MyApp.new()}));
  };
  web_plugin_registrant.registerPlugins = function registerPlugins() {
  };
  new_event.NewEventScreen = class NewEventScreen extends framework.StatefulWidget {
    createState() {
      return new new_event._NewEventScreen.new();
    }
    static ['_#new#tearOff']() {
      return new new_event.NewEventScreen.new();
    }
  };
  (new_event.NewEventScreen.new = function() {
    new_event.NewEventScreen.__proto__.new.call(this);
    ;
  }).prototype = new_event.NewEventScreen.prototype;
  dart.addTypeTests(new_event.NewEventScreen);
  dart.addTypeCaches(new_event.NewEventScreen);
  dart.setMethodSignature(new_event.NewEventScreen, () => ({
    __proto__: dart.getMethods(new_event.NewEventScreen.__proto__),
    createState: dart.fnType(framework.State$(framework.StatefulWidget), [])
  }));
  dart.setLibraryUri(new_event.NewEventScreen, I[1]);
  var _textEditingController = dart.privateName(new_event, "_textEditingController");
  var EdgeInsets_bottom = dart.privateName(edge_insets, "EdgeInsets.bottom");
  var EdgeInsets_right = dart.privateName(edge_insets, "EdgeInsets.right");
  var EdgeInsets_top = dart.privateName(edge_insets, "EdgeInsets.top");
  var EdgeInsets_left = dart.privateName(edge_insets, "EdgeInsets.left");
  new_event._NewEventScreen = class _NewEventScreen extends framework.State$(new_event.NewEventScreen) {
    build(context) {
      return new scaffold.Scaffold.new({appBar: new app_bar.AppBar.new({title: new text.Text.new("New Event"), backgroundColor: colors.Colors.deepPurpleAccent}), body: new basic.Column.new({children: T.JSArrayOfWidget().of([new basic.Padding.new({padding: new edge_insets.EdgeInsets.fromLTRB(0, 20, 0, 20), child: new container.Container.new({padding: C[5] || CT.C5})}), new text_field.TextField.new({decoration: new input_decorator.InputDecoration.new({border: new input_border.OutlineInputBorder.new(), hintText: "Enter a search term"}), controller: this[_textEditingController]}), new elevated_button.ElevatedButton.new({onPressed: dart.fn(() => {
                let newEventText = this[_textEditingController].text;
                navigator.Navigator.of(context).pop(core.String, newEventText);
              }, T.VoidTovoid()), child: new text.Text.new("ADD")})])})});
    }
    static ['_#new#tearOff']() {
      return new new_event._NewEventScreen.new();
    }
  };
  (new_event._NewEventScreen.new = function() {
    this[_textEditingController] = new editable_text.TextEditingController.new();
    new_event._NewEventScreen.__proto__.new.call(this);
    ;
  }).prototype = new_event._NewEventScreen.prototype;
  dart.addTypeTests(new_event._NewEventScreen);
  dart.addTypeCaches(new_event._NewEventScreen);
  dart.setMethodSignature(new_event._NewEventScreen, () => ({
    __proto__: dart.getMethods(new_event._NewEventScreen.__proto__),
    build: dart.fnType(framework.Widget, [framework.BuildContext])
  }));
  dart.setLibraryUri(new_event._NewEventScreen, I[1]);
  dart.setFieldSignature(new_event._NewEventScreen, () => ({
    __proto__: dart.getFields(new_event._NewEventScreen.__proto__),
    [_textEditingController]: dart.finalFieldType(editable_text.TextEditingController)
  }));
  dart.trackLibraries("zapp_user_main", {
    "file:///zapp/project/.zapp_entry.dart": $46zapp_entry,
    "file:///zapp/project/lib/main.dart": main,
    "file:///zapp/project/.dart_tool/dartpad/web_plugin_registrant.dart": web_plugin_registrant,
    "file:///zapp/project/lib/new_event.dart": new_event
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["/zapp/project/.zapp_entry.dart","/zapp/project/lib/main.dart","/zapp/project/.dart_tool/dartpad/web_plugin_registrant.dart","/zapp/project/lib/new_event.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;AA2CI,IA1BF,iCAAgB;AACd,UAAoB,6BAGD;AAF8B,QAA9B,AAAkB,6BAElB,eAF2B;;AAEL,QAAF,CAApB;;AAEnB,UAAO,AAAQ,uBAAY;AAKvB,QAJK,AAAqC,qBAA7B,qCAAuB,uBAAW,QAAC;AAG9C,UAFC,AAAQ,sBAAW,2BAA2B,CAC/C;;;wBAIL,SAAC,GAAG;AACL,UAAO,AAAQ,uBAAY;AAIvB,QAHC,AAAQ,sBAAW,wBAAwB,CAC5C,AAAE,CAAD,eACD,AAAW,UAAD;;2DAGM,yCACb,SAAC,MAAM,QAAQ,MAAM;AAC1B,cAAO,AAAQ,uBAAY;AAC4B,YAAlD,AAAQ,sBAAW,wBAAwB,CAAC,IAAI;;;EAI3D;;AAEiB;AAQd,MAPD,MAAS,gCACC;AACS,UAAf;6CAEe;AACmB,UAAjB;;IAGvB;;;;ACrCyC;IAAQ;;;;;;;;EACjD;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;UAU4B;AACxB,YAAO,gCACC,mCACI,qCAID,aACN,sCACgC,yCAC3B,2EAWY,wCAGH,6CACF,AAAM,mCACJ,SAAC,SAAQ,UAAU,AAAK,mBAAC,KAAK,4DACrB,gCACX,QAAC,WACH,gEACI;AACJ,6CAAU,MAAgB,AAAY,uBAAT,OAAO,qBAAO,yCAA2B,QAAC,WAAY;AAGxF,gBAFF,cAAS;AACmB,kBAA1B,AAAM,kBAAI,kBAAM,OAAO;;cAG1B,gDAIM,kBAAW;IAM5B;;;;;;IAlDqB,cAAQ,wBACzB,kBAAK;;;EAkDT;;;;;;;;;;;;;AAzEgB,0BAEd,gCACS,uBACF,yCACiB,iCACT,8CACE,8CAA4B,8BAC1B,sBAAS,IAAI,KAAK,IAAI,eAGnC;EAAS;;ECPO;;;ACAjB,YAAW;IACb;;;;;;;;EACL;;;;;;;;;;;;;;UAK+B;AACzB,YAAO,oCAAiB,+BACjB,kBAAK,+BACY,wCAEnB,gCACO,wBACP,gCACyB,oCAAS,GAAG,IAAI,GAAG,YAChC,yDAKb,0CAEe,iDACH,qDACE,qCAEA,gCAEd,mDAA0B;AACjB,mCAAe,AAAuB;AACN,gBAA7B,AAAY,uBAAT,OAAO,mBAAM,YAAY;yCAGlC,kBAAK;IAKhB;;;;;;IAlC4B,+BAAyB;;;EAmC1D","file":"main.js"}');
  // Exports:
  return {
    zapp__project__$46zapp_entry: $46zapp_entry,
    zapp__project__lib__main: main,
    zapp__project__$46dart_tool__dartpad__web_plugin_registrant: web_plugin_registrant,
    zapp__project__lib__new_event: new_event
  };
}));

//# sourceMappingURL=main.js.map
