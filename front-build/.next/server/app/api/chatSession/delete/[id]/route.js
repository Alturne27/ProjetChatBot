/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "app/api/chatSession/delete/[id]/route";
exports.ids = ["app/api/chatSession/delete/[id]/route"];
exports.modules = {

/***/ "(rsc)/./app/api/chatSession/delete/[id]/route.ts":
/*!**************************************************!*\
  !*** ./app/api/chatSession/delete/[id]/route.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   DELETE: () => (/* binding */ DELETE)\n/* harmony export */ });\n/* harmony import */ var _auth__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/auth */ \"(rsc)/./auth.ts\");\n/* harmony import */ var _prisma__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/prisma */ \"(rsc)/./prisma.ts\");\n/* harmony import */ var next_server__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/server */ \"(rsc)/./node_modules/next/dist/api/server.js\");\n// app/api/chat/delete/[id]/route.ts\n\n\n\nconst DELETE = (0,_auth__WEBPACK_IMPORTED_MODULE_0__.auth)(async function DELETE(req, ctx) {\n    if (!req.auth) {\n        return next_server__WEBPACK_IMPORTED_MODULE_2__.NextResponse.json({\n            error: \"Utilisateur non authentifié\"\n        }, {\n            status: 401\n        });\n    }\n    const params = await ctx.params;\n    const sessionId = params.id;\n    const session = await _prisma__WEBPACK_IMPORTED_MODULE_1__.prisma.chatSession.findUnique({\n        where: {\n            id: sessionId\n        },\n        select: {\n            userId: true\n        }\n    });\n    if (!session) {\n        return next_server__WEBPACK_IMPORTED_MODULE_2__.NextResponse.json({\n            error: \"Session introuvable\"\n        }, {\n            status: 404\n        });\n    }\n    if (session.userId !== req.auth.user?.id) {\n        return next_server__WEBPACK_IMPORTED_MODULE_2__.NextResponse.json({\n            error: \"Accès non autorisé\"\n        }, {\n            status: 403\n        });\n    }\n    try {\n        await _prisma__WEBPACK_IMPORTED_MODULE_1__.prisma.chatSession.delete({\n            where: {\n                id: sessionId\n            }\n        });\n        return next_server__WEBPACK_IMPORTED_MODULE_2__.NextResponse.json({\n            success: true\n        });\n    } catch (error) {\n        console.error(\"Erreur suppression session\", error);\n        return next_server__WEBPACK_IMPORTED_MODULE_2__.NextResponse.json({\n            error: \"Échec de la suppression\"\n        }, {\n            status: 500\n        });\n    }\n});\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9hcHAvYXBpL2NoYXRTZXNzaW9uL2RlbGV0ZS9baWRdL3JvdXRlLnRzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQSxvQ0FBb0M7QUFDTjtBQUNJO0FBQ1M7QUFFcEMsTUFBTUcsU0FBU0gsMkNBQUlBLENBQUMsZUFBZUcsT0FBT0MsR0FBRyxFQUFFQyxHQUFHO0lBQ3ZELElBQUksQ0FBQ0QsSUFBSUosSUFBSSxFQUFFO1FBQ2IsT0FBT0UscURBQVlBLENBQUNJLElBQUksQ0FDdEI7WUFBRUMsT0FBTztRQUE4QixHQUN2QztZQUFFQyxRQUFRO1FBQUk7SUFFbEI7SUFFQSxNQUFNQyxTQUFTLE1BQU1KLElBQUlJLE1BQU07SUFDL0IsTUFBTUMsWUFBWUQsT0FBT0UsRUFBRTtJQUUzQixNQUFNQyxVQUFVLE1BQU1YLDJDQUFNQSxDQUFDWSxXQUFXLENBQUNDLFVBQVUsQ0FBQztRQUNsREMsT0FBTztZQUFFSixJQUFJRDtRQUFVO1FBQ3ZCTSxRQUFRO1lBQUVDLFFBQVE7UUFBSztJQUN6QjtJQUVBLElBQUksQ0FBQ0wsU0FBUztRQUNaLE9BQU9WLHFEQUFZQSxDQUFDSSxJQUFJLENBQUM7WUFBRUMsT0FBTztRQUFzQixHQUFHO1lBQUVDLFFBQVE7UUFBSTtJQUMzRTtJQUVBLElBQUlJLFFBQVFLLE1BQU0sS0FBS2IsSUFBSUosSUFBSSxDQUFDa0IsSUFBSSxFQUFFUCxJQUFJO1FBQ3hDLE9BQU9ULHFEQUFZQSxDQUFDSSxJQUFJLENBQUM7WUFBRUMsT0FBTztRQUFxQixHQUFHO1lBQUVDLFFBQVE7UUFBSTtJQUMxRTtJQUNBLElBQUk7UUFDRixNQUFNUCwyQ0FBTUEsQ0FBQ1ksV0FBVyxDQUFDTSxNQUFNLENBQUM7WUFDOUJKLE9BQU87Z0JBQUVKLElBQUlEO1lBQVU7UUFDekI7UUFFQSxPQUFPUixxREFBWUEsQ0FBQ0ksSUFBSSxDQUFDO1lBQUVjLFNBQVM7UUFBSztJQUMzQyxFQUFFLE9BQU9iLE9BQU87UUFDZGMsUUFBUWQsS0FBSyxDQUFDLDhCQUE4QkE7UUFDNUMsT0FBT0wscURBQVlBLENBQUNJLElBQUksQ0FDdEI7WUFBRUMsT0FBTztRQUEwQixHQUNuQztZQUFFQyxRQUFRO1FBQUk7SUFFbEI7QUFDRixHQUFHIiwic291cmNlcyI6WyIvYXBwL2FwcC9hcGkvY2hhdFNlc3Npb24vZGVsZXRlL1tpZF0vcm91dGUudHMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gYXBwL2FwaS9jaGF0L2RlbGV0ZS9baWRdL3JvdXRlLnRzXG5pbXBvcnQgeyBhdXRoIH0gZnJvbSBcIkAvYXV0aFwiO1xuaW1wb3J0IHsgcHJpc21hIH0gZnJvbSBcIkAvcHJpc21hXCI7XG5pbXBvcnQgeyBOZXh0UmVzcG9uc2UgfSBmcm9tIFwibmV4dC9zZXJ2ZXJcIjtcblxuZXhwb3J0IGNvbnN0IERFTEVURSA9IGF1dGgoYXN5bmMgZnVuY3Rpb24gREVMRVRFKHJlcSwgY3R4KSB7XG4gIGlmICghcmVxLmF1dGgpIHtcbiAgICByZXR1cm4gTmV4dFJlc3BvbnNlLmpzb24oXG4gICAgICB7IGVycm9yOiBcIlV0aWxpc2F0ZXVyIG5vbiBhdXRoZW50aWZpw6lcIiB9LFxuICAgICAgeyBzdGF0dXM6IDQwMSB9XG4gICAgKTtcbiAgfVxuXG4gIGNvbnN0IHBhcmFtcyA9IGF3YWl0IGN0eC5wYXJhbXM7XG4gIGNvbnN0IHNlc3Npb25JZCA9IHBhcmFtcy5pZDtcblxuICBjb25zdCBzZXNzaW9uID0gYXdhaXQgcHJpc21hLmNoYXRTZXNzaW9uLmZpbmRVbmlxdWUoe1xuICAgIHdoZXJlOiB7IGlkOiBzZXNzaW9uSWQgfSxcbiAgICBzZWxlY3Q6IHsgdXNlcklkOiB0cnVlIH0sXG4gIH0pO1xuXG4gIGlmICghc2Vzc2lvbikge1xuICAgIHJldHVybiBOZXh0UmVzcG9uc2UuanNvbih7IGVycm9yOiBcIlNlc3Npb24gaW50cm91dmFibGVcIiB9LCB7IHN0YXR1czogNDA0IH0pO1xuICB9XG5cbiAgaWYgKHNlc3Npb24udXNlcklkICE9PSByZXEuYXV0aC51c2VyPy5pZCkge1xuICAgIHJldHVybiBOZXh0UmVzcG9uc2UuanNvbih7IGVycm9yOiBcIkFjY8OocyBub24gYXV0b3Jpc8OpXCIgfSwgeyBzdGF0dXM6IDQwMyB9KTtcbiAgfVxuICB0cnkge1xuICAgIGF3YWl0IHByaXNtYS5jaGF0U2Vzc2lvbi5kZWxldGUoe1xuICAgICAgd2hlcmU6IHsgaWQ6IHNlc3Npb25JZCB9LFxuICAgIH0pO1xuXG4gICAgcmV0dXJuIE5leHRSZXNwb25zZS5qc29uKHsgc3VjY2VzczogdHJ1ZSB9KTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBjb25zb2xlLmVycm9yKFwiRXJyZXVyIHN1cHByZXNzaW9uIHNlc3Npb25cIiwgZXJyb3IpO1xuICAgIHJldHVybiBOZXh0UmVzcG9uc2UuanNvbihcbiAgICAgIHsgZXJyb3I6IFwiw4ljaGVjIGRlIGxhIHN1cHByZXNzaW9uXCIgfSxcbiAgICAgIHsgc3RhdHVzOiA1MDAgfVxuICAgICk7XG4gIH1cbn0pO1xuIl0sIm5hbWVzIjpbImF1dGgiLCJwcmlzbWEiLCJOZXh0UmVzcG9uc2UiLCJERUxFVEUiLCJyZXEiLCJjdHgiLCJqc29uIiwiZXJyb3IiLCJzdGF0dXMiLCJwYXJhbXMiLCJzZXNzaW9uSWQiLCJpZCIsInNlc3Npb24iLCJjaGF0U2Vzc2lvbiIsImZpbmRVbmlxdWUiLCJ3aGVyZSIsInNlbGVjdCIsInVzZXJJZCIsInVzZXIiLCJkZWxldGUiLCJzdWNjZXNzIiwiY29uc29sZSJdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./app/api/chatSession/delete/[id]/route.ts\n");

/***/ }),

/***/ "(rsc)/./auth.ts":
/*!*****************!*\
  !*** ./auth.ts ***!
  \*****************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   auth: () => (/* binding */ auth),\n/* harmony export */   handlers: () => (/* binding */ handlers),\n/* harmony export */   signIn: () => (/* binding */ signIn),\n/* harmony export */   signOut: () => (/* binding */ signOut)\n/* harmony export */ });\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next-auth */ \"(rsc)/./node_modules/next-auth/index.js\");\n/* harmony import */ var next_auth_providers_github__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-auth/providers/github */ \"(rsc)/./node_modules/next-auth/providers/github.js\");\n/* harmony import */ var next_auth_providers_resend__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next-auth/providers/resend */ \"(rsc)/./node_modules/next-auth/providers/resend.js\");\n/* harmony import */ var _auth_prisma_adapter__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @auth/prisma-adapter */ \"(rsc)/./node_modules/@auth/prisma-adapter/index.js\");\n/* harmony import */ var _prisma__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/prisma */ \"(rsc)/./prisma.ts\");\n\n\n\n\n\nconst { handlers, signIn, signOut, auth } = (0,next_auth__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({\n    adapter: (0,_auth_prisma_adapter__WEBPACK_IMPORTED_MODULE_3__.PrismaAdapter)(_prisma__WEBPACK_IMPORTED_MODULE_4__.prisma),\n    providers: [\n        next_auth_providers_github__WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n        (0,next_auth_providers_resend__WEBPACK_IMPORTED_MODULE_2__[\"default\"])({\n            from: \"no-reply@mail.ba-ba-baaa.engineer\"\n        })\n    ],\n    callbacks: {\n        session ({ session, user }) {\n            session.user.id = user.id;\n            return session;\n        }\n    }\n});\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9hdXRoLnRzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFpQztBQUNlO0FBQ0E7QUFDSztBQUNuQjtBQUUzQixNQUFNLEVBQUVLLFFBQVEsRUFBRUMsTUFBTSxFQUFFQyxPQUFPLEVBQUVDLElBQUksRUFBRSxHQUFHUixxREFBUUEsQ0FBQztJQUMxRFMsU0FBU04sbUVBQWFBLENBQUNDLDJDQUFNQTtJQUM3Qk0sV0FBVztRQUNUVCxrRUFBTUE7UUFDTkMsc0VBQU1BLENBQUM7WUFDTFMsTUFBTTtRQUNSO0tBQ0Q7SUFDREMsV0FBVztRQUNUQyxTQUFRLEVBQUVBLE9BQU8sRUFBRUMsSUFBSSxFQUFFO1lBQ3ZCRCxRQUFRQyxJQUFJLENBQUNDLEVBQUUsR0FBR0QsS0FBS0MsRUFBRTtZQUN6QixPQUFPRjtRQUNUO0lBQ0Y7QUFDRixHQUFHIiwic291cmNlcyI6WyIvYXBwL2F1dGgudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IE5leHRBdXRoIGZyb20gXCJuZXh0LWF1dGhcIjtcbmltcG9ydCBHaXRIdWIgZnJvbSBcIm5leHQtYXV0aC9wcm92aWRlcnMvZ2l0aHViXCI7XG5pbXBvcnQgUmVzZW5kIGZyb20gXCJuZXh0LWF1dGgvcHJvdmlkZXJzL3Jlc2VuZFwiO1xuaW1wb3J0IHsgUHJpc21hQWRhcHRlciB9IGZyb20gXCJAYXV0aC9wcmlzbWEtYWRhcHRlclwiO1xuaW1wb3J0IHsgcHJpc21hIH0gZnJvbSBcIkAvcHJpc21hXCI7XG5cbmV4cG9ydCBjb25zdCB7IGhhbmRsZXJzLCBzaWduSW4sIHNpZ25PdXQsIGF1dGggfSA9IE5leHRBdXRoKHtcbiAgYWRhcHRlcjogUHJpc21hQWRhcHRlcihwcmlzbWEpLFxuICBwcm92aWRlcnM6IFtcbiAgICBHaXRIdWIsXG4gICAgUmVzZW5kKHtcbiAgICAgIGZyb206IFwibm8tcmVwbHlAbWFpbC5iYS1iYS1iYWFhLmVuZ2luZWVyXCIsXG4gICAgfSksXG4gIF0sXG4gIGNhbGxiYWNrczoge1xuICAgIHNlc3Npb24oeyBzZXNzaW9uLCB1c2VyIH0pIHtcbiAgICAgIHNlc3Npb24udXNlci5pZCA9IHVzZXIuaWQ7XG4gICAgICByZXR1cm4gc2Vzc2lvbjtcbiAgICB9LFxuICB9LFxufSk7XG4iXSwibmFtZXMiOlsiTmV4dEF1dGgiLCJHaXRIdWIiLCJSZXNlbmQiLCJQcmlzbWFBZGFwdGVyIiwicHJpc21hIiwiaGFuZGxlcnMiLCJzaWduSW4iLCJzaWduT3V0IiwiYXV0aCIsImFkYXB0ZXIiLCJwcm92aWRlcnMiLCJmcm9tIiwiY2FsbGJhY2tzIiwic2Vzc2lvbiIsInVzZXIiLCJpZCJdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./auth.ts\n");

/***/ }),

/***/ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2FchatSession%2Fdelete%2F%5Bid%5D%2Froute&page=%2Fapi%2FchatSession%2Fdelete%2F%5Bid%5D%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2FchatSession%2Fdelete%2F%5Bid%5D%2Froute.ts&appDir=%2Fapp%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2Fapp&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2FchatSession%2Fdelete%2F%5Bid%5D%2Froute&page=%2Fapi%2FchatSession%2Fdelete%2F%5Bid%5D%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2FchatSession%2Fdelete%2F%5Bid%5D%2Froute.ts&appDir=%2Fapp%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2Fapp&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D! ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   patchFetch: () => (/* binding */ patchFetch),\n/* harmony export */   routeModule: () => (/* binding */ routeModule),\n/* harmony export */   serverHooks: () => (/* binding */ serverHooks),\n/* harmony export */   workAsyncStorage: () => (/* binding */ workAsyncStorage),\n/* harmony export */   workUnitAsyncStorage: () => (/* binding */ workUnitAsyncStorage)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/route-modules/app-route/module.compiled */ \"(rsc)/./node_modules/next/dist/server/route-modules/app-route/module.compiled.js\");\n/* harmony import */ var next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dist_server_route_kind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/server/route-kind */ \"(rsc)/./node_modules/next/dist/server/route-kind.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dist/server/lib/patch-fetch */ \"(rsc)/./node_modules/next/dist/server/lib/patch-fetch.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _app_app_api_chatSession_delete_id_route_ts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/api/chatSession/delete/[id]/route.ts */ \"(rsc)/./app/api/chatSession/delete/[id]/route.ts\");\n\n\n\n\n// We inject the nextConfigOutput here so that we can use them in the route\n// module.\nconst nextConfigOutput = \"\"\nconst routeModule = new next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__.AppRouteRouteModule({\n    definition: {\n        kind: next_dist_server_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.APP_ROUTE,\n        page: \"/api/chatSession/delete/[id]/route\",\n        pathname: \"/api/chatSession/delete/[id]\",\n        filename: \"route\",\n        bundlePath: \"app/api/chatSession/delete/[id]/route\"\n    },\n    resolvedPagePath: \"/app/app/api/chatSession/delete/[id]/route.ts\",\n    nextConfigOutput,\n    userland: _app_app_api_chatSession_delete_id_route_ts__WEBPACK_IMPORTED_MODULE_3__\n});\n// Pull out the exports that we need to expose from the module. This should\n// be eliminated when we've moved the other routes to the new format. These\n// are used to hook into the route.\nconst { workAsyncStorage, workUnitAsyncStorage, serverHooks } = routeModule;\nfunction patchFetch() {\n    return (0,next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__.patchFetch)({\n        workAsyncStorage,\n        workUnitAsyncStorage\n    });\n}\n\n\n//# sourceMappingURL=app-route.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LWFwcC1sb2FkZXIvaW5kZXguanM/bmFtZT1hcHAlMkZhcGklMkZjaGF0U2Vzc2lvbiUyRmRlbGV0ZSUyRiU1QmlkJTVEJTJGcm91dGUmcGFnZT0lMkZhcGklMkZjaGF0U2Vzc2lvbiUyRmRlbGV0ZSUyRiU1QmlkJTVEJTJGcm91dGUmYXBwUGF0aHM9JnBhZ2VQYXRoPXByaXZhdGUtbmV4dC1hcHAtZGlyJTJGYXBpJTJGY2hhdFNlc3Npb24lMkZkZWxldGUlMkYlNUJpZCU1RCUyRnJvdXRlLnRzJmFwcERpcj0lMkZhcHAlMkZhcHAmcGFnZUV4dGVuc2lvbnM9dHN4JnBhZ2VFeHRlbnNpb25zPXRzJnBhZ2VFeHRlbnNpb25zPWpzeCZwYWdlRXh0ZW5zaW9ucz1qcyZyb290RGlyPSUyRmFwcCZpc0Rldj10cnVlJnRzY29uZmlnUGF0aD10c2NvbmZpZy5qc29uJmJhc2VQYXRoPSZhc3NldFByZWZpeD0mbmV4dENvbmZpZ091dHB1dD0mcHJlZmVycmVkUmVnaW9uPSZtaWRkbGV3YXJlQ29uZmlnPWUzMCUzRCEiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBK0Y7QUFDdkM7QUFDcUI7QUFDSDtBQUMxRTtBQUNBO0FBQ0E7QUFDQSx3QkFBd0IseUdBQW1CO0FBQzNDO0FBQ0EsY0FBYyxrRUFBUztBQUN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsWUFBWTtBQUNaLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQSxRQUFRLHNEQUFzRDtBQUM5RDtBQUNBLFdBQVcsNEVBQVc7QUFDdEI7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUMwRjs7QUFFMUYiLCJzb3VyY2VzIjpbIiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBcHBSb3V0ZVJvdXRlTW9kdWxlIH0gZnJvbSBcIm5leHQvZGlzdC9zZXJ2ZXIvcm91dGUtbW9kdWxlcy9hcHAtcm91dGUvbW9kdWxlLmNvbXBpbGVkXCI7XG5pbXBvcnQgeyBSb3V0ZUtpbmQgfSBmcm9tIFwibmV4dC9kaXN0L3NlcnZlci9yb3V0ZS1raW5kXCI7XG5pbXBvcnQgeyBwYXRjaEZldGNoIGFzIF9wYXRjaEZldGNoIH0gZnJvbSBcIm5leHQvZGlzdC9zZXJ2ZXIvbGliL3BhdGNoLWZldGNoXCI7XG5pbXBvcnQgKiBhcyB1c2VybGFuZCBmcm9tIFwiL2FwcC9hcHAvYXBpL2NoYXRTZXNzaW9uL2RlbGV0ZS9baWRdL3JvdXRlLnRzXCI7XG4vLyBXZSBpbmplY3QgdGhlIG5leHRDb25maWdPdXRwdXQgaGVyZSBzbyB0aGF0IHdlIGNhbiB1c2UgdGhlbSBpbiB0aGUgcm91dGVcbi8vIG1vZHVsZS5cbmNvbnN0IG5leHRDb25maWdPdXRwdXQgPSBcIlwiXG5jb25zdCByb3V0ZU1vZHVsZSA9IG5ldyBBcHBSb3V0ZVJvdXRlTW9kdWxlKHtcbiAgICBkZWZpbml0aW9uOiB7XG4gICAgICAgIGtpbmQ6IFJvdXRlS2luZC5BUFBfUk9VVEUsXG4gICAgICAgIHBhZ2U6IFwiL2FwaS9jaGF0U2Vzc2lvbi9kZWxldGUvW2lkXS9yb3V0ZVwiLFxuICAgICAgICBwYXRobmFtZTogXCIvYXBpL2NoYXRTZXNzaW9uL2RlbGV0ZS9baWRdXCIsXG4gICAgICAgIGZpbGVuYW1lOiBcInJvdXRlXCIsXG4gICAgICAgIGJ1bmRsZVBhdGg6IFwiYXBwL2FwaS9jaGF0U2Vzc2lvbi9kZWxldGUvW2lkXS9yb3V0ZVwiXG4gICAgfSxcbiAgICByZXNvbHZlZFBhZ2VQYXRoOiBcIi9hcHAvYXBwL2FwaS9jaGF0U2Vzc2lvbi9kZWxldGUvW2lkXS9yb3V0ZS50c1wiLFxuICAgIG5leHRDb25maWdPdXRwdXQsXG4gICAgdXNlcmxhbmRcbn0pO1xuLy8gUHVsbCBvdXQgdGhlIGV4cG9ydHMgdGhhdCB3ZSBuZWVkIHRvIGV4cG9zZSBmcm9tIHRoZSBtb2R1bGUuIFRoaXMgc2hvdWxkXG4vLyBiZSBlbGltaW5hdGVkIHdoZW4gd2UndmUgbW92ZWQgdGhlIG90aGVyIHJvdXRlcyB0byB0aGUgbmV3IGZvcm1hdC4gVGhlc2Vcbi8vIGFyZSB1c2VkIHRvIGhvb2sgaW50byB0aGUgcm91dGUuXG5jb25zdCB7IHdvcmtBc3luY1N0b3JhZ2UsIHdvcmtVbml0QXN5bmNTdG9yYWdlLCBzZXJ2ZXJIb29rcyB9ID0gcm91dGVNb2R1bGU7XG5mdW5jdGlvbiBwYXRjaEZldGNoKCkge1xuICAgIHJldHVybiBfcGF0Y2hGZXRjaCh7XG4gICAgICAgIHdvcmtBc3luY1N0b3JhZ2UsXG4gICAgICAgIHdvcmtVbml0QXN5bmNTdG9yYWdlXG4gICAgfSk7XG59XG5leHBvcnQgeyByb3V0ZU1vZHVsZSwgd29ya0FzeW5jU3RvcmFnZSwgd29ya1VuaXRBc3luY1N0b3JhZ2UsIHNlcnZlckhvb2tzLCBwYXRjaEZldGNoLCAgfTtcblxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9YXBwLXJvdXRlLmpzLm1hcCJdLCJuYW1lcyI6W10sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2FchatSession%2Fdelete%2F%5Bid%5D%2Froute&page=%2Fapi%2FchatSession%2Fdelete%2F%5Bid%5D%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2FchatSession%2Fdelete%2F%5Bid%5D%2Froute.ts&appDir=%2Fapp%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2Fapp&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!\n");

/***/ }),

/***/ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-flight-client-entry-loader.js?server=true!":
/*!******************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-flight-client-entry-loader.js?server=true! ***!
  \******************************************************************************************************/
/***/ (() => {



/***/ }),

/***/ "(rsc)/./prisma.ts":
/*!*******************!*\
  !*** ./prisma.ts ***!
  \*******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   prisma: () => (/* binding */ prisma)\n/* harmony export */ });\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @prisma/client */ \"@prisma/client\");\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_prisma_client__WEBPACK_IMPORTED_MODULE_0__);\n\nconst globalForPrisma = globalThis;\nconst prisma = globalForPrisma.prisma || new _prisma_client__WEBPACK_IMPORTED_MODULE_0__.PrismaClient();\nif (true) globalForPrisma.prisma = prisma;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9wcmlzbWEudHMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQThDO0FBRTlDLE1BQU1DLGtCQUFrQkM7QUFFakIsTUFBTUMsU0FBU0YsZ0JBQWdCRSxNQUFNLElBQUksSUFBSUgsd0RBQVlBLEdBQUc7QUFFbkUsSUFBSUksSUFBcUMsRUFBRUgsZ0JBQWdCRSxNQUFNLEdBQUdBIiwic291cmNlcyI6WyIvYXBwL3ByaXNtYS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBQcmlzbWFDbGllbnQgfSBmcm9tIFwiQHByaXNtYS9jbGllbnRcIjtcblxuY29uc3QgZ2xvYmFsRm9yUHJpc21hID0gZ2xvYmFsVGhpcyBhcyB1bmtub3duIGFzIHsgcHJpc21hOiBQcmlzbWFDbGllbnQgfTtcblxuZXhwb3J0IGNvbnN0IHByaXNtYSA9IGdsb2JhbEZvclByaXNtYS5wcmlzbWEgfHwgbmV3IFByaXNtYUNsaWVudCgpO1xuXG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiKSBnbG9iYWxGb3JQcmlzbWEucHJpc21hID0gcHJpc21hO1xuIl0sIm5hbWVzIjpbIlByaXNtYUNsaWVudCIsImdsb2JhbEZvclByaXNtYSIsImdsb2JhbFRoaXMiLCJwcmlzbWEiLCJwcm9jZXNzIl0sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./prisma.ts\n");

/***/ }),

/***/ "(ssr)/./node_modules/next/dist/build/webpack/loaders/next-flight-client-entry-loader.js?server=true!":
/*!******************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-flight-client-entry-loader.js?server=true! ***!
  \******************************************************************************************************/
/***/ (() => {



/***/ }),

/***/ "../../server/app-render/action-async-storage.external":
/*!*******************************************************************************!*\
  !*** external "next/dist/server/app-render/action-async-storage.external.js" ***!
  \*******************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/app-render/action-async-storage.external.js");

/***/ }),

/***/ "../app-render/after-task-async-storage.external":
/*!***********************************************************************************!*\
  !*** external "next/dist/server/app-render/after-task-async-storage.external.js" ***!
  \***********************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/app-render/after-task-async-storage.external.js");

/***/ }),

/***/ "../app-render/work-async-storage.external":
/*!*****************************************************************************!*\
  !*** external "next/dist/server/app-render/work-async-storage.external.js" ***!
  \*****************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/app-render/work-async-storage.external.js");

/***/ }),

/***/ "./work-unit-async-storage.external":
/*!**********************************************************************************!*\
  !*** external "next/dist/server/app-render/work-unit-async-storage.external.js" ***!
  \**********************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/app-render/work-unit-async-storage.external.js");

/***/ }),

/***/ "@prisma/client":
/*!*********************************!*\
  !*** external "@prisma/client" ***!
  \*********************************/
/***/ ((module) => {

"use strict";
module.exports = require("@prisma/client");

/***/ }),

/***/ "crypto":
/*!*************************!*\
  !*** external "crypto" ***!
  \*************************/
/***/ ((module) => {

"use strict";
module.exports = require("crypto");

/***/ }),

/***/ "next/dist/compiled/next-server/app-page.runtime.dev.js":
/*!*************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-page.runtime.dev.js" ***!
  \*************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/compiled/next-server/app-page.runtime.dev.js");

/***/ }),

/***/ "next/dist/compiled/next-server/app-route.runtime.dev.js":
/*!**************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-route.runtime.dev.js" ***!
  \**************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/compiled/next-server/app-route.runtime.dev.js");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next","vendor-chunks/@auth","vendor-chunks/next-auth","vendor-chunks/oauth4webapi","vendor-chunks/jose","vendor-chunks/preact","vendor-chunks/preact-render-to-string","vendor-chunks/@panva"], () => (__webpack_exec__("(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2FchatSession%2Fdelete%2F%5Bid%5D%2Froute&page=%2Fapi%2FchatSession%2Fdelete%2F%5Bid%5D%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2FchatSession%2Fdelete%2F%5Bid%5D%2Froute.ts&appDir=%2Fapp%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2Fapp&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!")));
module.exports = __webpack_exports__;

})();