export const testDef = [
  {
    "methods": [
      {
        "params": [
          {
            "type": "string",
            "name": "zone",
            "label": "Zone",
            "description": "The deployment zone. Valid values: 'US' or 'EU'",
            "optional": true
          }
        ],
        "methodName": "getApps",
        "description": "Retrieves a list of applications for the specified zone.",
        "methodLabel": "Get Applications",
        "category": "Apps Management",
        "sampleResult": "[{\"version\":\"6.0.0\",\"created\":1700000000000,\"subscriptionId\":null,\"originDomains\":\"*\",\"customDomains\":[],\"showKitApiKey\":null,\"dbVersion\":165,\"lastDayOfUse\":1700000001000,\"ownerDeveloperId\":\"DEV-ID-123\",\"zoneId\":1,\"oldGeoServiceEnabled\":false,\"type\":\"general\",\"metaInfo\":{\"source\":null,\"enabledPanicModes\":[],\"compliance\":{\"hipaa\":null},\"mongoDbVersion\":10,\"useOldTableRelationsFormat\":false},\"id\":\"APP-ID-123\",\"name\":\"MyApp\"},{\"version\":\"6.0.0\",\"created\":1700000002000,\"subscriptionId\":\"SUB-456\",\"originDomains\":\"*\",\"customDomains\":[],\"showKitApiKey\":null,\"dbVersion\":165,\"lastDayOfUse\":1700000003000,\"ownerDeveloperId\":\"DEV-ID-123\",\"zoneId\":1,\"oldGeoServiceEnabled\":false,\"type\":\"general\",\"metaInfo\":{\"source\":null,\"enabledPanicModes\":[],\"compliance\":{\"hipaa\":null},\"mongoDbVersion\":10,\"useOldTableRelationsFormat\":false},\"id\":\"APP-ID-456\",\"name\":\"TestApp\"}]"
      },
      {
        "params": [
          {
            "type": "string",
            "name": "appId",
            "label": "Application ID",
            "description": "The identifier of the application to rename",
            "optional": true
          },
          {
            "type": "string",
            "name": "appName",
            "label": "New App Name",
            "description": "The new name for the application",
            "optional": true
          }
        ],
        "methodName": "renameApp",
        "description": "Changes the name of an existing application.",
        "methodLabel": "Rename Application",
        "category": "Apps Management",
        "sampleResult": "{\"appName\":\"RenamedApp\",\"appId\":\"APP-ID-123\",\"version\":\"6.0.0\",\"created\":1700000000000,\"subscriptionId\":\"SUB-456\",\"originDomains\":\"*\",\"customDomains\":[],\"showKitApiKey\":null,\"dbVersion\":165,\"lastDayOfUse\":1700000001000,\"ownerDeveloperId\":\"DEV-ID-123\",\"zoneId\":1,\"oldGeoServiceEnabled\":false,\"type\":\"general\",\"metaInfo\":{\"source\":null,\"enabledPanicModes\":[],\"compliance\":{\"hipaa\":null},\"mongoDbVersion\":10,\"useOldTableRelationsFormat\":false}}"
      },
      {
        "params": [
          {
            "type": "string",
            "name": "appId",
            "label": "Application ID",
            "description": "The identifier of the application to delete",
            "optional": true
          }
        ],
        "methodName": "deleteApp",
        "description": "Permanently deletes an application and all its data.",
        "methodLabel": "Delete Application",
        "category": "Apps Management",
        "sampleResult": "{\"success\":true}"
      },
      {
        "params": [
          {
            "type": "string",
            "name": "appId",
            "label": "Application ID",
            "description": "The identifier of the application to archive",
            "optional": true
          }
        ],
        "methodName": "generateAppZIP",
        "description": "Generates a ZIP archive of the application for backup or transfer.",
        "methodLabel": "Generate App ZIP",
        "category": "Apps Management",
        "sampleResult": "\"Application transfer started. At the end, you will receive an email with the link to download zip file.\""
      },
      {
        "params": [
          {
            "type": "array",
            "name": "appsIds",
            "label": "App IDs",
            "description": "List of application identifiers",
            "optional": true
          }
        ],
        "methodName": "loadAppsInfo",
        "description": "Retrieves detailed information for multiple applications.",
        "methodLabel": "Load Apps Info",
        "category": "Apps Management",
        "sampleResult": "[{\"id\":\"APP-ID-123\",\"name\":\"MyApp\",\"version\":\"6.0.0\",\"created\":1700000000000},{\"id\":\"APP-ID-456\",\"name\":\"TestApp\",\"version\":\"6.0.0\",\"created\":1700000001000}]"
      },
      {
        "params": [
          {
            "type": "string",
            "name": "appId",
            "label": "Application ID",
            "description": "The identifier of the application",
            "optional": true
          },
          {
            "type": "updateAppInfo__info",
            "name": "info",
            "label": "App Information",
            "description": "Object containing updated application information",
            "optional": true
          }
        ],
        "methodName": "updateAppInfo",
        "description": "Updates the information and metadata of an application.",
        "methodLabel": "Update App Info",
        "category": "Apps Management",
        "sampleResult": "{\"appId\":\"APP-ID-123\",\"devEmail\":\"developer@example.com\",\"appName\":\"UpdatedAppName\"}"
      }
    ],
    "serviceInfo": {
      "fileName": "/Users/macbookpro/dev/projects/backendless/Console-SDK/src/apps.js",
      "serviceName": "apps"
    }
  },
  {
    "methods": [],
    "serviceInfo": {
      "fileName": "/Users/macbookpro/dev/projects/backendless/Console-SDK/src/automation.js",
      "serviceName": "serviceName"
    }
  },
  {
    "methods": [
      {
        "params": [
          {
            "type": "string",
            "name": "appId",
            "label": "Application ID",
            "description": "The identifier of the application",
            "optional": true
          },
          {
            "type": "getCacxheData__params",
            "name": "params",
            "label": "Pagination Parameters",
            "description": "Optional parameters for pagination",
            "optional": true
          }
        ],
        "methodName": "get",
        "description": "Retrieves cache entries with pagination support and returns both data and total count.",
        "methodLabel": "Get Cache Data",
        "category": "Data",
        "sampleResult": "{\"data\":[{\"objectId\":\"user:123\",\"value\":\"John Doe\",\"expireAt\":1700000000000,\"key\":\"user:123\"}],\"totalRows\":25}"
      },
      {
        "params": [
          {
            "type": "string",
            "name": "appId",
            "label": "Application ID",
            "description": "The identifier of the application",
            "optional": true
          }
        ],
        "methodName": "count",
        "description": "Returns the total number of cache entries in the application.",
        "methodLabel": "Count Cache Entries",
        "category": "Data",
        "sampleResult": "42"
      },
      {
        "params": [
          {
            "type": "string",
            "name": "appId",
            "label": "Application ID",
            "description": "The identifier of the application",
            "optional": true
          },
          {
            "type": "object",
            "name": "record",
            "label": "Cache Record",
            "description": "The cache entry data",
            "properties": [
              {
                "name": "key",
                "label": "Key",
                "type": "string",
                "optional": true,
                "description": "The cache key (either key or objectId is required)"
              },
              {
                "name": "objectId",
                "label": "Object ID",
                "type": "string",
                "optional": true,
                "description": "Alternative identifier for the cache entry"
              },
              {
                "name": "value",
                "label": "Value",
                "type": "any",
                "optional": true,
                "description": "The value to be cached (can be any type, will be JSON stringified)"
              },
              {
                "name": "expireAt",
                "label": "Expire At",
                "type": "string",
                "optional": true,
                "description": "ISO date string when the cache entry should expire"
              }
            ],
            "expandedFromTypedef": "updateCacheEntry__record",
            "optional": true
          }
        ],
        "methodName": "update",
        "description": "Updates or creates a cache entry with the specified key, value, and expiration time.",
        "methodLabel": "Update Cache Entry",
        "category": "Data",
        "sampleResult": "\"\""
      },
      {
        "params": [
          {
            "type": "string",
            "name": "appId",
            "label": "Application ID",
            "description": "The identifier of the application",
            "optional": true
          },
          {
            "type": "string",
            "name": "key",
            "label": "Cache Key",
            "description": "The key of the cache entry to be removed",
            "optional": true
          }
        ],
        "methodName": "remove",
        "description": "Permanently removes a cache entry by its key.",
        "methodLabel": "Remove Cache Entry",
        "category": "Data",
        "sampleResult": "\"\""
      }
    ],
    "serviceInfo": {
      "fileName": "/Users/macbookpro/dev/projects/backendless/Console-SDK/src/cache.js",
      "serviceName": "cache"
    }
  },
  {
    "methods": [
      {
        "params": [
          {
            "type": "string",
            "name": "appId",
            "label": "Application ID",
            "description": "The identifier of the application",
            "optional": true
          },
          {
            "type": "object",
            "name": "params",
            "label": "Query Parameters",
            "description": "Optional pagination, sorting, and filtering parameters",
            "properties": [
              {
                "name": "pageSize",
                "label": "Page Size",
                "type": "number",
                "optional": true,
                "description": "Number of counters to return per page"
              },
              {
                "name": "offset",
                "label": "Offset",
                "type": "number",
                "optional": true,
                "description": "Number of counters to skip for pagination"
              },
              {
                "name": "sortField",
                "label": "Sort Field",
                "type": "string",
                "optional": true,
                "description": "Field name to sort counters by"
              },
              {
                "name": "sortDir",
                "label": "Sort Direction",
                "type": "string",
                "optional": true,
                "description": "Direction of sorting, either ASC or DESC"
              },
              {
                "name": "pattern",
                "label": "Pattern",
                "type": "string",
                "optional": true,
                "description": "Filter counters by name pattern (wildcards supported)"
              }
            ],
            "expandedFromTypedef": "getAtomicCounters__params",
            "optional": true
          }
        ],
        "methodName": "get",
        "description": "Retrieves a list of atomic counters with pagination and sorting support.",
        "methodLabel": "Get Atomic Counters",
        "category": "Counters",
        "sampleResult": "{\"data\":[{\"objectId\":\"counterA\",\"name\":\"counterA\",\"value\":10},{\"objectId\":\"counterB\",\"name\":\"counterB\",\"value\":25}],\"totalRows\":2}"
      },
      {
        "params": [
          {
            "type": "string",
            "name": "appId",
            "label": "Application ID",
            "description": "The identifier of the application",
            "optional": true
          },
          {
            "type": "string",
            "name": "pattern",
            "label": "Pattern",
            "description": "Filter counters by name pattern (wildcards supported)",
            "optional": true
          }
        ],
        "methodName": "listNames",
        "description": "Retrieves a list of all atomic counter names matching a specified pattern.",
        "methodLabel": "List Atomic Counter Names",
        "category": "Counters"
      },
      {
        "params": [
          {
            "type": "string",
            "name": "appId",
            "label": "Application ID",
            "description": "The identifier of the application",
            "optional": true
          },
          {
            "type": "array",
            "name": "names",
            "label": "Counter Names",
            "description": "Array of atomic counter names to retrieve",
            "optional": true
          }
        ],
        "methodName": "listCounters",
        "description": "Retrieves atomic counters by a list of specific names.",
        "methodLabel": "List Atomic Counters by Names",
        "category": "Counters"
      },
      {
        "params": [
          {
            "type": "string",
            "name": "appId",
            "label": "Application ID",
            "description": "The identifier of the application",
            "optional": true
          },
          {
            "type": "string",
            "name": "name",
            "label": "Counter Name",
            "description": "The name of the atomic counter",
            "optional": true
          },
          {
            "type": "number",
            "name": "value",
            "label": "Initial Value",
            "description": "Initial value for the counter",
            "optional": true
          }
        ],
        "methodName": "create",
        "description": "Creates a new atomic counter with the specified initial value.",
        "methodLabel": "Create Atomic Counter",
        "category": "Counters",
        "sampleResult": "{\"name\":\"counterA\",\"value\":10}"
      },
      {
        "params": [
          {
            "type": "string",
            "name": "appId",
            "label": "Application ID",
            "description": "The identifier of the application",
            "optional": true
          },
          {
            "type": "string",
            "name": "name",
            "label": "Counter Name",
            "description": "The name of the atomic counter to update",
            "optional": true
          },
          {
            "type": "number",
            "name": "currentValue",
            "label": "Current Value",
            "description": "The expected current value of the counter (used for optimistic concurrency)",
            "optional": true
          },
          {
            "type": "number",
            "name": "newValue",
            "label": "New Value",
            "description": "The new value to set for the counter",
            "optional": true
          }
        ],
        "methodName": "update",
        "description": "Updates the value of an atomic counter.",
        "methodLabel": "Update Atomic Counter",
        "category": "Counters",
        "sampleResult": "\"\""
      },
      {
        "params": [
          {
            "type": "string",
            "name": "appId",
            "label": "Application ID",
            "description": "The identifier of the application",
            "optional": true
          },
          {
            "type": "string",
            "name": "name",
            "label": "Counter Name",
            "description": "The name of the atomic counter to be removed",
            "optional": true
          }
        ],
        "methodName": "remove",
        "description": "Permanently removes an atomic counter by its name.",
        "methodLabel": "Remove Atomic Counter",
        "category": "Counters",
        "sampleResult": "\"\""
      }
    ],
    "serviceInfo": {
      "fileName": "/Users/macbookpro/dev/projects/backendless/Console-SDK/src/counters.js",
      "serviceName": "counters"
    }
  },
  {
    "methods": [
      {
        "params": [
          {
            "type": "string",
            "name": "appId",
            "label": "Application ID",
            "description": "The identifier of the application",
            "optional": true
          }
        ],
        "methodName": "getHiveNames",
        "description": "Retrieves all hive names for an application.",
        "methodLabel": "Get Hive Names",
        "category": "Data Hives",
        "sampleResult": "[\"hive1\",\"hive2\",\"testHive\"]"
      },
      {
        "params": [
          {
            "type": "string",
            "name": "appId",
            "label": "Application ID",
            "description": "The identifier of the application",
            "optional": true
          },
          {
            "type": "string",
            "name": "hiveName",
            "label": "Hive Name",
            "description": "The name of the hive to create",
            "optional": true
          }
        ],
        "methodName": "createHive",
        "description": "Creates a new data hive in an application.",
        "methodLabel": "Create Hive",
        "category": "Data Hives",
        "sampleResult": "\"\""
      },
      {
        "params": [
          {
            "type": "string",
            "name": "appId",
            "label": "Application ID",
            "description": "The identifier of the application",
            "optional": true
          },
          {
            "type": "string",
            "name": "oldName",
            "label": "Old Name",
            "description": "The current name of the hive",
            "optional": true
          },
          {
            "type": "string",
            "name": "newName",
            "label": "New Name",
            "description": "The new name for the hive",
            "optional": true
          }
        ],
        "methodName": "renameHive",
        "description": "Renames an existing data hive.",
        "methodLabel": "Rename Hive",
        "category": "Data Hives",
        "sampleResult": "{\"success\":true}"
      },
      {
        "params": [
          {
            "type": "string",
            "name": "appId",
            "label": "Application ID",
            "description": "The identifier of the application",
            "optional": true
          },
          {
            "type": "string",
            "name": "hiveName",
            "label": "Hive Name",
            "description": "The name of the hive to delete",
            "optional": true
          }
        ],
        "methodName": "deleteHive",
        "description": "Deletes a data hive and all its data.",
        "methodLabel": "Delete Hive",
        "category": "Data Hives",
        "sampleResult": "{\"success\":true}"
      },
      {
        "params": [
          {
            "type": "string",
            "name": "appId",
            "label": "Application ID",
            "description": "The identifier of the application",
            "optional": true
          },
          {
            "type": "string",
            "name": "hiveName",
            "label": "Hive Name",
            "description": "The name of the hive",
            "optional": true
          },
          {
            "type": "string",
            "name": "storeType",
            "label": "Store Type",
            "description": "The type of store. Valid values: 'key-value', 'list', 'map', 'set', 'sorted-set'",
            "optional": true
          },
          {
            "type": "string",
            "name": "keyName",
            "label": "Key Name",
            "description": "The key name",
            "optional": true
          },
          {
            "type": "HiveStorePayload",
            "name": "payload",
            "label": "Payload",
            "description": "Object with 'value' field containing data to store",
            "optional": true
          }
        ],
        "methodName": "setHiveStoreValue",
        "description": "Sets a value in the hive store for any store type (key-value, list, map, set, sorted-set). Value must be wrapped in object with 'value' field.",
        "methodLabel": "Set Hive Store Value",
        "category": "Data Hives",
        "sampleResult": "true"
      },
      {
        "params": [
          {
            "type": "string",
            "name": "appId",
            "label": "Application ID",
            "description": "The identifier of the application",
            "optional": true
          },
          {
            "type": "string",
            "name": "hiveName",
            "label": "Hive Name",
            "description": "The name of the hive",
            "optional": true
          },
          {
            "type": "string",
            "name": "storeType",
            "label": "Store Type",
            "description": "The type of store. Valid values: 'key-value', 'list', 'map', 'set', 'sorted-set'",
            "optional": true
          },
          {
            "type": "string",
            "name": "keyName",
            "label": "Key Name",
            "description": "The key name",
            "optional": true
          },
          {
            "type": "HiveStorePayload",
            "name": "payload",
            "label": "Payload",
            "description": "Object with 'value' field containing data to store",
            "optional": true
          }
        ],
        "methodName": "addHiveStoreValue",
        "description": "Adds/creates a value in the hive store for any store type (key-value, list, map, set, sorted-set). Value must be wrapped in object with 'value' field.",
        "methodLabel": "Add Hive Store Value",
        "category": "Data Hives",
        "sampleResult": "true"
      },
      {
        "params": [
          {
            "type": "string",
            "name": "appId",
            "label": "Application ID",
            "description": "The identifier of the application",
            "optional": true
          },
          {
            "type": "string",
            "name": "hiveName",
            "label": "Hive Name",
            "description": "The name of the hive",
            "optional": true
          },
          {
            "type": "string",
            "name": "storeType",
            "label": "Store Type",
            "description": "The type of store. Valid values: 'key-value', 'list', 'map', 'set', 'sorted-set'",
            "optional": true
          },
          {
            "type": "array",
            "name": "keys",
            "label": "Keys",
            "description": "Array of key names to remove",
            "optional": true
          }
        ],
        "methodName": "removeHiveStoreRecords",
        "description": "Removes multiple records from a hive store by their keys. Works with any store type (key-value, list, map, set, sorted-set).",
        "methodLabel": "Remove Hive Store Records",
        "category": "Data Hives",
        "sampleResult": "1"
      },
      {
        "params": [
          {
            "type": "string",
            "name": "appId",
            "label": "Application ID",
            "description": "The identifier of the application",
            "optional": true
          },
          {
            "type": "string",
            "name": "hiveName",
            "label": "Hive Name",
            "description": "The name of the hive",
            "optional": true
          },
          {
            "type": "string",
            "name": "storeType",
            "label": "Store Type",
            "description": "The type of store. Valid values: 'key-value', 'list', 'map', 'set', 'sorted-set'",
            "optional": true
          },
          {
            "type": "string",
            "name": "keyName",
            "label": "Key Name",
            "description": "The key name",
            "optional": true
          },
          {
            "type": "array",
            "name": "values",
            "label": "Values",
            "description": "Array of values to remove from the key",
            "optional": true
          }
        ],
        "methodName": "removeHiveStoreValue",
        "description": "Removes specific values from a hive store key. Works with any store type (key-value, list, map, set, sorted-set).",
        "methodLabel": "Remove Hive Store Value",
        "category": "Data Hives",
        "sampleResult": "1"
      },
      {
        "params": [
          {
            "type": "string",
            "name": "appId",
            "label": "Application ID",
            "description": "The identifier of the application",
            "optional": true
          },
          {
            "type": "string",
            "name": "hiveName",
            "label": "Hive Name",
            "description": "The name of the hive",
            "optional": true
          },
          {
            "type": "string",
            "name": "storeType",
            "label": "Store Type",
            "description": "The type of store. Valid values: 'key-value', 'list', 'map', 'set', 'sorted-set'",
            "optional": true
          },
          {
            "type": "string",
            "name": "key",
            "label": "Key",
            "description": "The key name",
            "optional": true
          },
          {
            "type": "SetKeyExpiration__options",
            "name": "options",
            "label": "Expiration Options",
            "description": "Object with either ttl (seconds from now) or unixTime (Unix timestamp in seconds)",
            "optional": true
          }
        ],
        "methodName": "setKeyExpiration",
        "description": "Sets expiration time for a hive key of any store type (key-value, list, map, set, sorted-set). Use either TTL (seconds from now) or Unix timestamp (in seconds).",
        "methodLabel": "Set Key Expiration",
        "category": "Data Hives",
        "sampleResult": "\"\""
      },
      {
        "params": [
          {
            "type": "string",
            "name": "appId",
            "label": "Application ID",
            "description": "The identifier of the application",
            "optional": true
          },
          {
            "type": "string",
            "name": "hiveName",
            "label": "Hive Name",
            "description": "The name of the hive",
            "optional": true
          },
          {
            "type": "string",
            "name": "storeType",
            "label": "Store Type",
            "description": "The type of store. Valid values: 'key-value', 'list', 'map', 'set', 'sorted-set'",
            "optional": true
          },
          {
            "type": "string",
            "name": "key",
            "label": "Key",
            "description": "The key name",
            "optional": true
          }
        ],
        "methodName": "getKeyExpirationTTL",
        "description": "Gets the time-to-live for a hive key of any store type (key-value, list, map, set, sorted-set).",
        "methodLabel": "Get Key Expiration TTL",
        "category": "Data Hives",
        "sampleResult": "34"
      },
      {
        "params": [
          {
            "type": "string",
            "name": "appId",
            "label": "Application ID",
            "description": "The identifier of the application",
            "optional": true
          },
          {
            "type": "string",
            "name": "hiveName",
            "label": "Hive Name",
            "description": "The name of the hive",
            "optional": true
          },
          {
            "type": "string",
            "name": "storeType",
            "label": "Store Type",
            "description": "The type of store. Valid values: 'key-value', 'list', 'map', 'set', 'sorted-set'",
            "optional": true
          },
          {
            "type": "string",
            "name": "key",
            "label": "Key",
            "description": "The key name",
            "optional": true
          }
        ],
        "methodName": "clearKeyExpiration",
        "description": "Removes expiration from a hive key of any store type (key-value, list, map, set, sorted-set).",
        "methodLabel": "Clear Key Expiration",
        "category": "Data Hives",
        "sampleResult": "true"
      },
      {
        "params": [
          {
            "type": "string",
            "name": "appId",
            "label": "Application ID",
            "description": "The identifier of the application",
            "optional": true
          },
          {
            "type": "string",
            "name": "hiveName",
            "label": "Hive Name",
            "description": "The name of the hive",
            "optional": true
          },
          {
            "type": "string",
            "name": "storeType",
            "label": "Store Type",
            "description": "The type of store. Valid values: 'key-value', 'list', 'map', 'set', 'sorted-set'",
            "optional": true
          },
          {
            "type": "string",
            "name": "key",
            "label": "Key",
            "description": "The key name",
            "optional": true
          }
        ],
        "methodName": "getKeySecondsSinceLastOperation",
        "description": "Gets seconds elapsed since the last operation on a key of any store type (key-value, list, map, set, sorted-set).",
        "methodLabel": "Get Key Seconds Since Last Operation",
        "category": "Data Hives",
        "sampleResult": "4"
      },
      {
        "params": [
          {
            "type": "string",
            "name": "appId",
            "label": "Application ID",
            "description": "The identifier of the application",
            "optional": true
          },
          {
            "type": "string",
            "name": "hiveName",
            "label": "Hive Name",
            "description": "The name of the hive",
            "optional": true
          },
          {
            "type": "string",
            "name": "key",
            "label": "Key",
            "description": "The key name",
            "optional": true
          },
          {
            "type": "array",
            "name": "items",
            "label": "Items",
            "description": "Array of items to add to the list",
            "optional": true
          }
        ],
        "methodName": "addHiveListStoreItems",
        "description": "[LIST STORE TYPE] Adds items to the end of a list store. Lists maintain insertion order and allow duplicates. Creates the list if it doesn't exist.",
        "methodLabel": "Add List Store Items",
        "category": "Data Hives",
        "sampleResult": "6"
      },
      {
        "params": [
          {
            "type": "string",
            "name": "appId",
            "label": "Application ID",
            "description": "The identifier of the application",
            "optional": true
          },
          {
            "type": "string",
            "name": "hiveName",
            "label": "Hive Name",
            "description": "The name of the hive",
            "optional": true
          },
          {
            "type": "string",
            "name": "key",
            "label": "Key",
            "description": "The key name",
            "optional": true
          },
          {
            "type": "string",
            "name": "value",
            "label": "Value",
            "description": "The value to remove",
            "optional": true
          }
        ],
        "methodName": "removeHiveListStoreItemByValue",
        "description": "[LIST STORE TYPE] Removes items with specified value from a list store. Lists maintain insertion order and allow duplicates.",
        "methodLabel": "Remove List Item by Value",
        "category": "Data Hives",
        "sampleResult": "1"
      },
      {
        "params": [
          {
            "type": "string",
            "name": "appId",
            "label": "Application ID",
            "description": "The identifier of the application",
            "optional": true
          },
          {
            "type": "string",
            "name": "hiveName",
            "label": "Hive Name",
            "description": "The name of the hive",
            "optional": true
          },
          {
            "type": "string",
            "name": "key",
            "label": "Key",
            "description": "The key name",
            "optional": true
          },
          {
            "type": "number",
            "name": "index",
            "label": "Index",
            "description": "The index position",
            "optional": true
          },
          {
            "type": "string",
            "name": "value",
            "label": "Value",
            "description": "The new value",
            "optional": true
          }
        ],
        "methodName": "updateHiveListStoreItemByIndex",
        "description": "[LIST STORE TYPE] Updates a list item at specified index. Lists are zero-indexed and maintain insertion order.",
        "methodLabel": "Update List Item by Index",
        "category": "Data Hives",
        "sampleResult": "\"\""
      },
      {
        "params": [
          {
            "type": "string",
            "name": "appId",
            "label": "Application ID",
            "description": "The identifier of the application",
            "optional": true
          },
          {
            "type": "string",
            "name": "hiveName",
            "label": "Hive Name",
            "description": "The name of the hive",
            "optional": true
          },
          {
            "type": "string",
            "name": "key",
            "label": "Key",
            "description": "The key name",
            "optional": true
          },
          {
            "type": "array",
            "name": "items",
            "label": "Items",
            "description": "Array of items to add to the set (duplicates will be filtered out)",
            "optional": true
          }
        ],
        "methodName": "addHiveSetStoreItems",
        "description": "[SET STORE TYPE] Adds items to a set store. Sets automatically handle duplicates - only unique values are stored. Creates the set if it doesn't exist.",
        "methodLabel": "Add Set Store Items",
        "category": "Data Hives",
        "sampleResult": "3"
      },
      {
        "params": [
          {
            "type": "string",
            "name": "appId",
            "label": "Application ID",
            "description": "The identifier of the application",
            "optional": true
          },
          {
            "type": "string",
            "name": "hiveName",
            "label": "Hive Name",
            "description": "The name of the hive",
            "optional": true
          },
          {
            "type": "string",
            "name": "key",
            "label": "Key",
            "description": "The key name",
            "optional": true
          },
          {
            "type": "string",
            "name": "value",
            "label": "Value",
            "description": "The value to remove",
            "optional": true
          }
        ],
        "methodName": "removeHiveSetStoreItemByValue",
        "description": "[SET STORE TYPE] Removes specified value from a set store. Sets contain only unique values.",
        "methodLabel": "Remove Set Item by Value",
        "category": "Data Hives",
        "sampleResult": "1"
      }
    ],
    "serviceInfo": {
      "fileName": "/Users/macbookpro/dev/projects/backendless/Console-SDK/src/data-hives.js",
      "serviceName": "dataHives"
    }
  },
  {
    "methods": [
      {
        "params": [
          {
            "type": "string",
            "name": "appId",
            "label": "Application ID",
            "description": "The identifier of the application",
            "optional": true
          }
        ],
        "methodName": "getDevelopers",
        "description": "Retrieve list of developers for an application",
        "methodLabel": "Get Developers",
        "category": "Development Team",
        "sampleResult": "[{\"id\":\"D7ED38DB-2CD5-4E2D-BBCE-131F7D40254C\",\"name\":\"Sergey Androsov\",\"email\":\"androsov.srg@gmail.com\"}]"
      },
      {
        "params": [
          {
            "type": "string",
            "name": "appId",
            "label": "Application ID",
            "description": "The identifier of the application",
            "optional": true
          },
          {
            "type": "object",
            "name": "email",
            "label": "Email Object",
            "description": "Object containing the email address of the developer to invite",
            "properties": [
              {
                "name": "email",
                "label": "Email Address",
                "type": "string",
                "optional": true,
                "description": "The email address of the developer to invite to the team"
              }
            ],
            "expandedFromTypedef": "inviteDeveloper__email",
            "optional": true
          }
        ],
        "methodName": "inviteDeveloper",
        "description": "Send an invitation to a developer to join the application team",
        "methodLabel": "Invite Developer",
        "category": "Development Team",
        "sampleResult": "{\"id\":\"ABC123-DEF456-GHI789\",\"name\":\"Invited\",\"email\":\"developer@example.com\",\"lastLogin\":null,\"registrationDate\":1672531200000,\"system\":false,\"permissionGroups\":[{\"groupName\":\"Data Service\",\"permissions\":[{\"id\":\"40\",\"operation\":\"Create/Rename/Delete tables\",\"access\":\"DENY\",\"visible\":true}],\"visible\":true}],\"notifications\":[{\"type\":\"PERCENT_80\",\"group\":\"Limits\",\"enabled\":false}]}"
      },
      {
        "params": [
          {
            "type": "string",
            "name": "appId",
            "label": "Application ID",
            "description": "The identifier of the application",
            "optional": true
          },
          {
            "type": "string",
            "name": "devId",
            "label": "Developer ID",
            "description": "The identifier of the developer to remove",
            "optional": true
          }
        ],
        "methodName": "removeDeveloper",
        "description": "Remove a developer from the application team",
        "methodLabel": "Remove Developer",
        "category": "Development Team",
        "sampleResult": "\"\""
      },
      {
        "params": [],
        "methodName": "generateDeveloperSignature",
        "description": "Generate a signature for the current developer",
        "methodLabel": "Generate Developer Signature",
        "category": "Development Team",
        "sampleResult": "\"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.sampleSignatureHashExample\""
      }
    ],
    "serviceInfo": {
      "fileName": "/Users/macbookpro/dev/projects/backendless/Console-SDK/src/dev-team.js",
      "serviceName": "devTeam"
    }
  },
  {
    "methods": [
      {
        "params": [
          {
            "type": "string",
            "name": "appId",
            "label": "Application ID",
            "description": "The identifier of the application",
            "optional": true
          }
        ],
        "methodName": "loadEmailTemplates",
        "description": "Load email templates for an application",
        "methodLabel": "Load Email Templates",
        "category": "Email",
        "sampleResult": "[{\"eventId\":6,\"name\":\"Registration Confirmation\",\"triggersEmail\":true}]"
      },
      {
        "params": [
          {
            "type": "string",
            "name": "appId",
            "label": "Application ID",
            "description": "The identifier of the application",
            "optional": true
          }
        ],
        "methodName": "loadCustomTemplates",
        "description": "Load custom email templates for an application",
        "methodLabel": "Load Custom Templates",
        "category": "Email",
        "sampleResult": "[]"
      },
      {
        "params": [
          {
            "type": "string",
            "name": "appId",
            "label": "Application ID",
            "description": "The identifier of the application",
            "optional": true
          },
          {
            "type": "object",
            "name": "payload",
            "label": "Template Data",
            "description": "Object containing template name, subject, and HTML body",
            "properties": [
              {
                "name": "name",
                "label": "Template Name",
                "type": "string",
                "optional": true,
                "description": "The name of the custom email template"
              },
              {
                "name": "subject",
                "label": "Subject",
                "type": "string",
                "optional": true,
                "description": "The email subject line"
              },
              {
                "name": "body",
                "label": "HTML Body",
                "type": "string",
                "optional": true,
                "description": "The HTML content of the email template. Use {{variableName}} for template variables that can be replaced when sending emails"
              }
            ],
            "expandedFromTypedef": "createCustomTemplate__payload",
            "optional": true
          }
        ],
        "methodName": "createCustomTemplate",
        "description": "Create a new custom email template",
        "methodLabel": "Create Custom Template",
        "category": "Email",
        "sampleResult": "\"\""
      },
      {
        "params": [
          {
            "type": "string",
            "name": "appId",
            "label": "Application ID",
            "description": "The identifier of the application",
            "optional": true
          },
          {
            "type": "object",
            "name": "payload",
            "label": "Template Data",
            "description": "Object containing template name, subject, and HTML body",
            "properties": [
              {
                "name": "name",
                "label": "Template Name",
                "type": "string",
                "optional": true,
                "description": "The name of the email template"
              },
              {
                "name": "subject",
                "label": "Subject",
                "type": "string",
                "optional": true,
                "description": "The email subject line"
              },
              {
                "name": "body",
                "label": "Body",
                "type": "string",
                "optional": true,
                "description": "The HTML content of the email template. Use {{variableName}} for template variables that can be replaced when sending emails"
              },
              {
                "name": "attachments",
                "label": "Attachments",
                "type": "array",
                "optional": true,
                "description": "Array of email attachments (optional)"
              }
            ],
            "expandedFromTypedef": "updateCustomTemplate__payload",
            "optional": true
          },
          {
            "type": "string",
            "name": "templateName",
            "label": "Template Name",
            "description": "The name of the template to update",
            "optional": true
          }
        ],
        "methodName": "updateCustomTemplate",
        "description": "Update an existing custom email template",
        "methodLabel": "Update Custom Template",
        "category": "Email",
        "sampleResult": "\"\""
      },
      {
        "params": [
          {
            "type": "string",
            "name": "appId",
            "label": "Application ID",
            "description": "The identifier of the application",
            "optional": true
          },
          {
            "type": "string",
            "name": "templateName",
            "label": "Template Name",
            "description": "The name of the template to delete",
            "optional": true
          }
        ],
        "methodName": "deleteCustomTemplate",
        "description": "Delete a custom email template",
        "methodLabel": "Delete Custom Template",
        "category": "Email",
        "sampleResult": "\"\""
      },
      {
        "params": [
          {
            "type": "string",
            "name": "appId",
            "label": "Application ID",
            "description": "The identifier of the application",
            "optional": true
          },
          {
            "type": "object",
            "name": "payload",
            "label": "Email Data",
            "description": "Object containing template name, variables, attachments, and recipient email",
            "properties": [
              {
                "name": "template-name",
                "label": "Template Name",
                "type": "string",
                "optional": true,
                "description": "The name of the custom email template to use"
              },
              {
                "name": "template-values",
                "label": "Template Values",
                "type": "sendtestcustomemail__templatevalues",
                "optional": true,
                "description": "Object containing template variables to replace in HTML. For {{key}} in HTML, provide key: 'value'"
              },
              {
                "name": "attachment",
                "label": "Attachments",
                "type": "array",
                "optional": true,
                "description": "Array of file paths from Backendless Files service (e.g., ['folder/file.pdf', 'image.jpg'])"
              },
              {
                "name": "email",
                "label": "Recipient Email",
                "type": "string",
                "optional": true,
                "description": "Email address to send the test email to"
              }
            ],
            "expandedFromTypedef": "sendTestCustomEmail__payload",
            "optional": true
          }
        ],
        "methodName": "sendTestCustomEmail",
        "description": "Send a test email using a custom template. Template variables in HTML like {{key}} will be replaced with values from template-values object.",
        "methodLabel": "Send Test Custom Email",
        "category": "Email",
        "sampleResult": "\"\""
      },
      {
        "params": [
          {
            "type": "string",
            "name": "appId",
            "label": "Application ID",
            "description": "The identifier of the application",
            "optional": true
          },
          {
            "type": "object",
            "name": "payload",
            "label": "Template Data",
            "description": "Object containing template name, subject, and HTML body to extract variables from",
            "properties": [
              {
                "name": "name",
                "label": "Template Name",
                "type": "string",
                "optional": true,
                "description": "The name of the email template to parse"
              },
              {
                "name": "subject",
                "label": "Subject",
                "type": "string",
                "optional": true,
                "description": "The email subject line"
              },
              {
                "name": "body",
                "label": "HTML Body",
                "type": "string",
                "optional": true,
                "description": "The HTML content of the email template to extract variables from"
              },
              {
                "name": "attachments",
                "label": "Attachments",
                "type": "array",
                "optional": true,
                "description": "Array of email attachments (optional)"
              }
            ],
            "expandedFromTypedef": "parseCustomTemplateKeys__payload",
            "optional": true
          }
        ],
        "methodName": "parseCustomTemplateKeys",
        "description": "Parse and validate custom template keys",
        "methodLabel": "Parse Custom Template Keys",
        "category": "Email",
        "sampleResult": "[\"username\",\"email\",\"date\"]"
      }
    ],
    "serviceInfo": {
      "fileName": "/Users/macbookpro/dev/projects/backendless/Console-SDK/src/email.js",
      "serviceName": "email"
    }
  },
  {
    "methods": [
      {
        "params": [
          {
            "type": "string",
            "name": "appId",
            "label": "Application ID",
            "description": "The identifier of the application",
            "optional": true
          },
          {
            "type": "string",
            "name": "path",
            "label": "Path",
            "description": "The directory path to load. If not specified, root path will be used",
            "optional": true
          },
          {
            "type": "object",
            "name": "params",
            "label": "Parameters",
            "description": "Optional parameters for filtering, sorting and pagination",
            "properties": [
              {
                "name": "pattern",
                "label": "Pattern",
                "type": "string",
                "optional": true,
                "description": "Optional search pattern to filter files and directories by name"
              },
              {
                "name": "sub",
                "label": "Sub",
                "type": "boolean",
                "optional": true,
                "description": "Whether to include subdirectories in the search"
              },
              {
                "name": "sortBy",
                "label": "Sort By",
                "type": "string",
                "optional": true,
                "description": "Field to sort results by (e.g., 'name', 'size', 'modified')"
              },
              {
                "name": "sortDirection",
                "label": "Sort Direction",
                "type": "string",
                "optional": true,
                "description": "Sort direction: 'asc' for ascending, 'desc' for descending"
              },
              {
                "name": "pageSize",
                "label": "Page Size",
                "type": "number",
                "optional": true,
                "description": "Number of items to return per page for pagination"
              },
              {
                "name": "offset",
                "label": "Offset",
                "type": "number",
                "optional": true,
                "description": "Number of items to skip for pagination"
              }
            ],
            "expandedFromTypedef": "loadDirectory__params",
            "optional": true
          }
        ],
        "methodName": "loadDirectory",
        "description": "Loads the contents of a directory with optional filtering, sorting and pagination support.",
        "methodLabel": "Load Directory",
        "category": "Data",
        "sampleResult": "{\"data\":[{\"name\":\"documents\",\"createdOn\":1609459200000,\"updatedOn\":1609459200000,\"publicUrl\":\"https://your-server.com/your-app-id/your-api-key/files/documents\",\"url\":\"documents\"},{\"name\":\"config.json\",\"createdOn\":1609459200000,\"updatedOn\":1609459200000,\"publicUrl\":\"https://your-server.com/your-app-id/your-api-key/files/config.json\",\"size\":1024,\"url\":\"config.json\"}],\"totalRows\":2}"
      },
      {
        "params": [
          {
            "type": "string",
            "name": "appId",
            "label": "Application ID",
            "description": "The identifier of the application",
            "optional": true
          },
          {
            "type": "string",
            "name": "path",
            "label": "Path",
            "description": "The directory path to load completely. If not specified, root path will be used",
            "optional": true
          },
          {
            "type": "object",
            "name": "params",
            "label": "Parameters",
            "description": "Optional parameters for filtering and sorting (pagination handled automatically)",
            "properties": [
              {
                "name": "pattern",
                "label": "Pattern",
                "type": "string",
                "optional": true,
                "description": "Optional search pattern to filter files and directories by name"
              },
              {
                "name": "sub",
                "label": "Sub",
                "type": "boolean",
                "optional": true,
                "description": "Whether to include subdirectories in the search"
              },
              {
                "name": "sortBy",
                "label": "Sort By",
                "type": "string",
                "optional": true,
                "description": "Field to sort results by (e.g., 'name', 'size', 'modified')"
              },
              {
                "name": "sortDirection",
                "label": "Sort Direction",
                "type": "string",
                "optional": true,
                "description": "Sort direction: 'asc' for ascending, 'desc' for descending"
              }
            ],
            "expandedFromTypedef": "loadFullDirectory__params",
            "optional": true
          }
        ],
        "methodName": "loadFullDirectory",
        "description": "Loads the complete contents of a directory by automatically paginating through all results. Unlike loadDirectory, this method returns all items without pagination limits.",
        "methodLabel": "Load Full Directory",
        "category": "Data",
        "sampleResult": "[{\"name\":\"documents\",\"createdOn\":1609459200000,\"updatedOn\":1609459200000,\"publicUrl\":\"https://your-server.com/your-app-id/your-api-key/files/documents\",\"url\":\"documents\"},{\"name\":\"config.json\",\"createdOn\":1609459200000,\"updatedOn\":1609459200000,\"publicUrl\":\"https://your-server.com/your-app-id/your-api-key/files/config.json\",\"size\":1024,\"url\":\"config.json\"}]"
      },
      {
        "params": [
          {
            "type": "string",
            "name": "appId",
            "label": "Application ID",
            "description": "The identifier of the application",
            "optional": true
          },
          {
            "type": "string",
            "name": "path",
            "label": "Path",
            "description": "The path where the directory will be created. If not specified, root path will be used",
            "optional": true
          },
          {
            "type": "string",
            "name": "folderName",
            "label": "Folder Name",
            "description": "The name of the directory to be created",
            "optional": true
          }
        ],
        "methodName": "createDir",
        "description": "Creates a new directory in the specified path.",
        "methodLabel": "Create Directory",
        "category": "Data",
        "sampleResult": "{\"name\":\"documents\",\"createdOn\":1609459200000,\"updatedOn\":1609459200000,\"publicUrl\":\"https://your-server.com/your-app-id/your-api-key/files/documents\",\"url\":\"documents\"}"
      },
      {
        "params": [
          {
            "type": "string",
            "name": "appId",
            "label": "Application ID",
            "description": "The identifier of the application",
            "optional": true
          },
          {
            "type": "string",
            "name": "filePath",
            "label": "File Path",
            "description": "The path to the file within the application",
            "optional": true
          }
        ],
        "methodName": "getFileContent",
        "description": "Downloads and returns the content of a specified file.",
        "methodLabel": "Get File Content",
        "category": "Data",
        "sampleResult": "\"This is the content of the file\""
      },
      {
        "params": [
          {
            "type": "string",
            "name": "appId",
            "label": "Application ID",
            "description": "The identifier of the application",
            "optional": true
          },
          {
            "type": "string",
            "name": "filePath",
            "label": "File Path",
            "description": "The path to the file or directory to operate on. Use '/' for root directory operations",
            "optional": true
          },
          {
            "type": "string",
            "name": "operation",
            "label": "Operation",
            "description": "The operation to perform. Valid values: 'zip' (compress directory) or 'unzip' (extract archive)",
            "optional": true
          }
        ],
        "methodName": "performOperation",
        "description": "Performs file operations such as compressing directories into ZIP archives or extracting ZIP files.              For root directory operations, the path should be '/' or empty.",
        "methodLabel": "Perform File Operation",
        "category": "Data",
        "sampleResult": "\"Operation started successfully. You will receive an email notification when complete.\""
      },
      {
        "params": [
          {
            "type": "string",
            "name": "appId",
            "label": "Application ID",
            "description": "The identifier of the application",
            "optional": true
          },
          {
            "type": "string",
            "name": "filePath",
            "label": "File Path",
            "description": "The path to check for file existence",
            "optional": true
          }
        ],
        "methodName": "fileExists",
        "description": "Checks if a file exists at the specified path.",
        "methodLabel": "Check File Exists",
        "category": "Data",
        "sampleResult": "\"true\""
      },
      {
        "params": [
          {
            "type": "string",
            "name": "appId",
            "label": "Application ID",
            "description": "The identifier of the application",
            "optional": true
          },
          {
            "type": "string",
            "name": "filePath",
            "label": "File Path",
            "description": "The path to the file to be edited",
            "optional": true
          },
          {
            "type": "string",
            "name": "fileContent",
            "label": "File Content",
            "description": "The new content to be written to the file",
            "optional": true
          }
        ],
        "methodName": "editFile",
        "description": "Modifies the content of an existing file.",
        "methodLabel": "Edit File",
        "category": "Data",
        "sampleResult": "{\"name\":\"example.txt\",\"createdOn\":1609459200000,\"updatedOn\":1609459200000,\"publicUrl\":\"https://your-server.com/your-app-id/your-api-key/files/example.txt\",\"size\":1024,\"url\":\"example.txt\"}"
      },
      {
        "params": [
          {
            "type": "string",
            "name": "appId",
            "label": "Application ID",
            "description": "The identifier of the application",
            "optional": true
          },
          {
            "type": "string",
            "name": "filePath",
            "label": "File Path",
            "description": "The path where the file will be created",
            "optional": true
          },
          {
            "type": "string",
            "name": "fileContent",
            "label": "File Content",
            "description": "The content to be written to the new file",
            "optional": true
          }
        ],
        "methodName": "createFile",
        "description": "Creates a new file with the specified content at the given path.",
        "methodLabel": "Create File",
        "category": "Data",
        "sampleResult": "{\"name\":\"example.txt\",\"createdOn\":1609459200000,\"updatedOn\":1609459200000,\"publicUrl\":\"https://your-server.com/your-app-id/your-api-key/files/example.txt\",\"size\":1024,\"url\":\"example.txt\"}"
      },
      {
        "params": [
          {
            "type": "string",
            "name": "appId",
            "label": "Application ID",
            "description": "The identifier of the application",
            "optional": true
          },
          {
            "type": "string",
            "name": "filePath",
            "label": "Source File Path",
            "description": "The current path of the file to be moved",
            "optional": true
          },
          {
            "type": "string",
            "name": "newFilePath",
            "label": "Destination File Path",
            "description": "The new path where the file will be moved",
            "optional": true
          }
        ],
        "methodName": "moveFile",
        "description": "Moves a file from one location to another within the application.",
        "methodLabel": "Move File",
        "category": "Data",
        "sampleResult": "\"https://your-server.com/your-app-id/your-api-key/files/destination/filename.txt\""
      },
      {
        "params": [
          {
            "type": "string",
            "name": "appId",
            "label": "Application ID",
            "description": "The identifier of the application",
            "optional": true
          },
          {
            "type": "string",
            "name": "filePath",
            "label": "Source File Path",
            "description": "The path of the file to be copied",
            "optional": true
          },
          {
            "type": "string",
            "name": "newFilePath",
            "label": "Destination File Path",
            "description": "The path where the copy will be created",
            "optional": true
          }
        ],
        "methodName": "copyFile",
        "description": "Creates a copy of an existing file at a new location.",
        "methodLabel": "Copy File",
        "category": "Data",
        "sampleResult": "\"https://your-server.com/your-app-id/your-api-key/files/destination/copy-filename.txt\""
      },
      {
        "params": [
          {
            "type": "string",
            "name": "appId",
            "label": "Application ID",
            "description": "The identifier of the application",
            "optional": true
          },
          {
            "type": "string",
            "name": "filePath",
            "label": "File Path",
            "description": "The path of the file to be renamed",
            "optional": true
          },
          {
            "type": "string",
            "name": "newFileName",
            "label": "New File Name",
            "description": "The new name for the file (without path)",
            "optional": true
          }
        ],
        "methodName": "renameFile",
        "description": "Renames an existing file to a new name.",
        "methodLabel": "Rename File",
        "category": "Data",
        "sampleResult": "\"https://your-server.com/your-app-id/your-api-key/files/new-filename.txt\""
      },
      {
        "params": [
          {
            "type": "string",
            "name": "appId",
            "label": "Application ID",
            "description": "The identifier of the application",
            "optional": true
          },
          {
            "type": "string",
            "name": "filePath",
            "label": "File Path",
            "description": "The path of the file to be deleted",
            "optional": true
          }
        ],
        "methodName": "deleteFile",
        "description": "Permanently deletes a file from the application.",
        "methodLabel": "Delete File",
        "category": "Data",
        "sampleResult": "\"\""
      },
      {
        "params": [
          {
            "type": "string",
            "name": "appId",
            "label": "Application ID",
            "description": "The identifier of the application where the file will be stored",
            "optional": true
          },
          {
            "type": "file",
            "name": "file",
            "label": "File",
            "description": "The file to be uploaded (sent as multipart/form-data)",
            "optional": true
          },
          {
            "type": "string",
            "name": "path",
            "label": "Target Path",
            "description": "The destination folder path where the file will be uploaded",
            "optional": true
          },
          {
            "type": "string",
            "name": "fileName",
            "label": "File Name",
            "description": "The name under which the file will be saved",
            "optional": true
          },
          {
            "type": "boolean",
            "name": "overwrite",
            "label": "Overwrite Existing",
            "description": "Whether to overwrite the file if one with the same name already exists (default: false)",
            "optional": true
          }
        ],
        "methodName": "uploadFile",
        "description": "Uploads a file to the specified path in the application storage.              The file must be sent as multipart/form-data. If a file with the same name exists, it can be optionally overwritten.",
        "methodLabel": "Upload File",
        "category": "Data",
        "sampleResult": "{\"name\":\"uploaded-file.txt\",\"createdOn\":1609459200000,\"updatedOn\":1609459200000,\"publicUrl\":\"https://your-server.com/your-app-id/your-api-key/files/uploads/uploaded-file.txt\",\"size\":2048,\"url\":\"uploads/uploaded-file.txt\"}"
      },
      {
        "params": [
          {
            "type": "string",
            "name": "appId",
            "label": "Application ID",
            "description": "The identifier of the application",
            "optional": true
          },
          {
            "type": "string",
            "name": "path",
            "label": "Path",
            "description": "The directory path to view. Defaults to root if not specified",
            "optional": true
          }
        ],
        "methodName": "viewFiles",
        "description": "Retrieves a view of files and directories for browsing purposes.",
        "methodLabel": "View Files",
        "category": "Data",
        "sampleResult": "[{\"name\":\"documents\",\"createdOn\":1609459200000,\"updatedOn\":1609459200000,\"publicUrl\":\"https://your-server.com/your-app-id/your-api-key/files/documents\",\"url\":\"documents\"},{\"name\":\"config.json\",\"createdOn\":1609459200000,\"updatedOn\":1609459200000,\"publicUrl\":\"https://your-server.com/your-app-id/your-api-key/files/config.json\",\"size\":1024,\"url\":\"config.json\"}]"
      }
    ],
    "serviceInfo": {
      "fileName": "/Users/macbookpro/dev/projects/backendless/Console-SDK/src/files.js",
      "serviceName": "files"
    }
  },
  {
    "methods": [],
    "serviceInfo": {
      "fileName": "/Users/macbookpro/dev/projects/backendless/Console-SDK/src/fr-extensions.js",
      "serviceName": "serviceName"
    }
  },
  {
    "methods": [
      {
        "params": [
          {
            "type": "string",
            "name": "appId",
            "label": "Application ID",
            "description": "The identifier of the application",
            "optional": true
          }
        ],
        "methodName": "loadChannels",
        "description": "Load all messaging channels for an application",
        "methodLabel": "Load Channels",
        "category": "Messaging",
        "sampleResult": "[{\"channelid\":\"test-channel\",\"name\":\"test-channel\",\"settings\":{\"polling\":true,\"rtmp\":0,\"websocket\":8888}}]"
      },
      {
        "params": [
          {
            "type": "string",
            "name": "appId",
            "label": "Application ID",
            "description": "The identifier of the application",
            "optional": true
          },
          {
            "type": "string",
            "name": "channelName",
            "label": "Channel Name",
            "description": "The name of the channel to create",
            "optional": true
          }
        ],
        "methodName": "createChannel",
        "description": "Create a new messaging channel",
        "methodLabel": "Create Channel",
        "category": "Messaging",
        "sampleResult": "{\"channelid\":\"new-channel\",\"name\":\"new-channel\",\"settings\":{\"polling\":true,\"rtmp\":0,\"websocket\":8888}}"
      },
      {
        "params": [
          {
            "type": "string",
            "name": "appId",
            "label": "Application ID",
            "description": "The identifier of the application",
            "optional": true
          },
          {
            "type": "object",
            "name": "oldChannel",
            "label": "Channel Object",
            "description": "Object containing channelid and current name",
            "properties": [
              {
                "name": "channelid",
                "label": "Channel ID",
                "type": "string",
                "optional": true,
                "description": "The unique identifier of the channel"
              },
              {
                "name": "name",
                "label": "Channel Name",
                "type": "string",
                "optional": true,
                "description": "The current name of the channel"
              }
            ],
            "expandedFromTypedef": "renameChannel__oldChannel",
            "optional": true
          },
          {
            "type": "string",
            "name": "newName",
            "label": "New Name",
            "description": "The new name for the channel",
            "optional": true
          }
        ],
        "methodName": "renameChannel",
        "description": "Rename an existing messaging channel. Settings are automatically maintained.",
        "methodLabel": "Rename Channel",
        "category": "Messaging",
        "sampleResult": "{\"channelid\":\"90B294D5-0C04-47DC-8893-D131845311FA\",\"name\":\"new-channel-name\",\"settings\":{\"polling\":true,\"rtmp\":0,\"websocket\":8888}}"
      },
      {
        "params": [
          {
            "type": "string",
            "name": "appId",
            "label": "Application ID",
            "description": "The identifier of the application",
            "optional": true
          },
          {
            "type": "string",
            "name": "channelId",
            "label": "Channel ID",
            "description": "The identifier of the channel to delete",
            "optional": true
          }
        ],
        "methodName": "deleteChannel",
        "description": "Delete a messaging channel",
        "methodLabel": "Delete Channel",
        "category": "Messaging",
        "sampleResult": "true"
      },
      {
        "params": [
          {
            "type": "string",
            "name": "appId",
            "label": "Application ID",
            "description": "The identifier of the application",
            "optional": true
          },
          {
            "type": "string",
            "name": "channelId",
            "label": "Channel ID",
            "description": "The identifier of the channel",
            "optional": true
          },
          {
            "type": "array",
            "name": "devicesIds",
            "label": "Device IDs",
            "description": "Array of device IDs to delete",
            "optional": true
          }
        ],
        "methodName": "deleteDevices",
        "description": "Delete devices from a messaging channel",
        "methodLabel": "Delete Devices",
        "category": "Messaging",
        "sampleResult": "true"
      },
      {
        "params": [
          {
            "type": "string",
            "name": "appId",
            "label": "Application ID",
            "description": "The identifier of the application",
            "optional": true
          },
          {
            "type": "string",
            "name": "channelId",
            "label": "Channel ID",
            "description": "The identifier of the channel",
            "optional": true
          },
          {
            "type": "object",
            "name": "params",
            "label": "Query Parameters",
            "description": "Query parameters for filtering messages",
            "optional": true
          }
        ],
        "methodName": "loadMessages",
        "description": "Load messages from a messaging channel",
        "methodLabel": "Load Messages",
        "category": "Messaging",
        "sampleResult": "{\"totalRows\": 1,\"data\": [{\"publisherId\": \"samplePublisherId\",\"isPush\": true,\"sentTo\": \"sampleUserId\",\"isBroadcast\": false,\"messageId\": \"message:SAMPLE-ID-123456\",\"message\": \"sample message\",\"subtopic\": \"sampleSubtopic\",\"timestamp\": 1757603031106}]}"
      },
      {
        "params": [
          {
            "type": "string",
            "name": "appId",
            "label": "Application ID",
            "description": "The identifier of the application",
            "optional": true
          },
          {
            "type": "string",
            "name": "channelName",
            "label": "Channel Name",
            "description": "The name of the channel",
            "optional": true
          },
          {
            "type": "object",
            "name": "params",
            "label": "Message Parameters",
            "description": "Message content with push broadcast settings and optional headers",
            "properties": [
              {
                "name": "message",
                "label": "Message",
                "type": "string",
                "optional": true,
                "description": "The message content to publish"
              },
              {
                "name": "publisherId",
                "label": "Publisher ID",
                "type": "string",
                "optional": true,
                "description": "Optional identifier of the message publisher"
              },
              {
                "name": "pushBroadcast",
                "label": "Push Broadcast",
                "type": "string",
                "optional": true,
                "description": "Target platform for push notifications: IOS, ANDROID, or ALL"
              },
              {
                "name": "headers",
                "label": "Headers",
                "type": "publishmessage__headers",
                "optional": true,
                "description": "Optional custom headers for the message"
              }
            ],
            "expandedFromTypedef": "publishMessage__params",
            "optional": true
          }
        ],
        "methodName": "publishMessage",
        "description": "Publish a message to a messaging channel with optional push notification broadcast",
        "methodLabel": "Publish Message",
        "category": "Messaging",
        "sampleResult": "{\"errorMessage\":null,\"messageId\":\"message:6ED94D19-172B-48AE-BB2C-7AA8E305CD31\",\"status\":\"scheduled\"}"
      },
      {
        "params": [
          {
            "type": "string",
            "name": "appId",
            "label": "Application ID",
            "description": "The identifier of the application",
            "optional": true
          }
        ],
        "methodName": "getMessagingChannels",
        "description": "Get all messaging channels for an application",
        "methodLabel": "Get Messaging Channels",
        "category": "Messaging",
        "sampleResult": "[{\"channelid\":\"channel1\",\"name\":\"channel1\",\"settings\":{\"polling\":true,\"rtmp\":0,\"websocket\":8888}}]"
      },
      {
        "params": [
          {
            "type": "string",
            "name": "appId",
            "label": "Application ID",
            "description": "The identifier of the application",
            "optional": true
          }
        ],
        "methodName": "getPushTemplates",
        "description": "Get all push notification templates for an application",
        "methodLabel": "Get Push Templates",
        "category": "Messaging",
        "sampleResult": "[{\"id\":\"68c2e72c3f5cad82dae4d86a\",\"name\":\"welcome\",\"message\":\"Welcome to our app!\",\"platforms\":[],\"channelName\":\"default\",\"segmentQuery\":null,\"options\":{\"ios\":{\"alertTitle\":null,\"alertSubtitle\":null,\"customHeaders\":null,\"badge\":1,\"sound\":null,\"attachmentUrl\":null,\"mutableContent\":0,\"contentAvailable\":0,\"buttonTemplate\":\"\",\"threadId\":null,\"summaryFormat\":null},\"android\":{\"contentTitle\":null,\"summarySubText\":null,\"customHeaders\":null,\"badge\":0,\"badgeNumber\":1,\"icon\":null,\"largeIcon\":null,\"colorCode\":\"#3E86C4\",\"cancel\":{\"after\":60,\"ontap\":false},\"attachmentUrl\":null,\"actionOnTap\":null,\"contentAvailable\":null,\"buttonTemplate\":\"\",\"channelTemplate\":\"\",\"directBoot\":false,\"deliveryPriority\":\"normal\",\"ttlSeconds\":2419200},\"osx\":{\"alertTitle\":null,\"alertSubtitle\":null,\"customHeaders\":null,\"badge\":1,\"sound\":\"default\",\"contentAvailable\":0}}}]"
      },
      {
        "params": [
          {
            "type": "string",
            "name": "appId",
            "label": "Application ID",
            "description": "The identifier of the application",
            "optional": true
          },
          {
            "type": "string",
            "name": "pushTemplateName",
            "label": "Template Name",
            "description": "The name of the template to retrieve",
            "optional": true
          }
        ],
        "methodName": "getPushTemplate",
        "description": "Get a specific push notification template",
        "methodLabel": "Get Push Template",
        "category": "Messaging",
        "sampleResult": "{\"id\":\"68c2e72c3f5cad82dae4d86a\",\"name\":\"ooo\",\"message\":\"jj\",\"platforms\":[],\"channelName\":\"default\",\"segmentQuery\":null,\"options\":{\"ios\":{\"alertTitle\":null,\"alertSubtitle\":null,\"customHeaders\":null,\"badge\":1,\"sound\":null,\"attachmentUrl\":null,\"mutableContent\":0,\"contentAvailable\":0,\"buttonTemplate\":\"\",\"threadId\":null,\"summaryFormat\":null},\"android\":{\"contentTitle\":null,\"summarySubText\":null,\"customHeaders\":null,\"badge\":0,\"badgeNumber\":1,\"icon\":null,\"largeIcon\":null,\"colorCode\":\"#3E86C4\",\"cancel\":{\"after\":60,\"ontap\":false},\"attachmentUrl\":null,\"actionOnTap\":null,\"contentAvailable\":null,\"buttonTemplate\":\"\",\"channelTemplate\":\"\",\"directBoot\":false,\"deliveryPriority\":\"normal\",\"ttlSeconds\":2419200},\"osx\":{\"alertTitle\":null,\"alertSubtitle\":null,\"customHeaders\":null,\"badge\":1,\"sound\":\"default\",\"contentAvailable\":0}}}"
      },
      {
        "params": [
          {
            "type": "string",
            "name": "appId",
            "label": "Application ID",
            "description": "The identifier of the application",
            "optional": true
          },
          {
            "type": "array",
            "name": "pushTemplateNames",
            "label": "Template Names",
            "description": "Array of template names to delete",
            "optional": true
          }
        ],
        "methodName": "deletePushTemplates",
        "description": "Delete multiple push notification templates",
        "methodLabel": "Delete Push Templates",
        "category": "Messaging",
        "sampleResult": "true"
      },
      {
        "params": [
          {
            "type": "string",
            "name": "appId",
            "label": "Application ID",
            "description": "The identifier of the application",
            "optional": true
          },
          {
            "type": "object",
            "name": "push",
            "label": "Push Notification",
            "description": "Push notification object with message and platform-specific options",
            "properties": [
              {
                "name": "platforms",
                "label": "Platforms",
                "type": "array",
                "optional": true,
                "description": "Target platforms for push notification (IOS, ANDROID, OSX) arr empty array for all platforms"
              },
              {
                "name": "message",
                "label": "Message",
                "type": "string",
                "optional": true,
                "description": "The push notification message"
              },
              {
                "name": "options",
                "label": "Options",
                "type": "sendpush__options",
                "optional": true,
                "description": "Platform-specific options for the notification"
              },
              {
                "name": "name",
                "label": "Name",
                "type": "string",
                "optional": true,
                "description": "Name identifier for the push notification"
              },
              {
                "name": "channelName",
                "label": "Channel Name",
                "type": "string",
                "optional": true,
                "description": "Channel name for the notification"
              }
            ],
            "expandedFromTypedef": "sendPush__push",
            "optional": true
          }
        ],
        "methodName": "sendPush",
        "description": "Send a push notification with platform-specific options",
        "methodLabel": "Send Push",
        "category": "Messaging",
        "sampleResult": "{\"messageId\":\"message:829739EB-443D-4591-B7E5-BAB07D7BC231\",\"errorMessage\":null,\"status\":\"SCHEDULED\",\"sendingTimeInMillis\":0,\"successfulSendsAmount\":1,\"failedSendsAmount\":0}"
      },
      {
        "params": [
          {
            "type": "string",
            "name": "appId",
            "label": "Application ID",
            "description": "The identifier of the application",
            "optional": true
          }
        ],
        "methodName": "getPushChannelTemplates",
        "description": "Get push notification channel templates for a platform",
        "methodLabel": "Get Push Channel Templates",
        "category": "Messaging",
        "sampleResult": "[{\"id\":\"68c2eb2d3f5cad82dae4d86b\",\"name\":\"Name\",\"message\":\"Message\",\"platforms\":[\"IOS\",\"OSX\"],\"channelName\":\"default\",\"segmentQuery\":null,\"options\":{\"ios\":{\"alertTitle\":\"Title\",\"alertSubtitle\":\"Subtitle\",\"customHeaders\":{\"Header\":\"1\"},\"badge\":1,\"sound\":null,\"attachmentUrl\":null,\"mutableContent\":0,\"contentAvailable\":0,\"buttonTemplate\":\"\",\"threadId\":null,\"summaryFormat\":null},\"android\":{\"contentTitle\":\"Title\",\"summarySubText\":\"Subtitle\",\"customHeaders\":{\"Header\":\"1\"},\"badge\":1,\"badgeNumber\":5,\"icon\":null,\"largeIcon\":null,\"colorCode\":\"#3E86C4\",\"cancel\":{\"after\":60,\"ontap\":false},\"attachmentUrl\":null,\"actionOnTap\":null,\"contentAvailable\":null,\"buttonTemplate\":\"\",\"channelTemplate\":\"\",\"directBoot\":false,\"deliveryPriority\":\"normal\",\"ttlSeconds\":2419200},\"osx\":{\"alertTitle\":\"Title\",\"alertSubtitle\":\"Subtitle\",\"customHeaders\":{\"Header\":\"1\"},\"badge\":1,\"sound\":\"default\",\"contentAvailable\":0}}}]"
      }
    ],
    "serviceInfo": {
      "fileName": "/Users/macbookpro/dev/projects/backendless/Console-SDK/src/messaging.js",
      "serviceName": "messaging"
    }
  },
  {
    "methods": [
      {
        "params": [
          {
            "type": "string",
            "name": "appId",
            "label": "Application ID",
            "description": "The identifier of the application",
            "optional": true
          }
        ],
        "methodName": "listTemplates",
        "description": "Get all PDF templates for an application",
        "methodLabel": "List Templates",
        "category": "PDF",
        "sampleResult": "[{\"id\":\"template1\",\"name\":\"Invoice Template\",\"created\":1234567890}]"
      },
      {
        "params": [
          {
            "type": "string",
            "name": "appId",
            "label": "Application ID",
            "description": "The identifier of the application",
            "optional": true
          },
          {
            "type": "string",
            "name": "templateId",
            "label": "Template ID",
            "description": "The identifier of the template to load",
            "optional": true
          }
        ],
        "methodName": "loadTemplate",
        "description": "Load a specific PDF template",
        "methodLabel": "Load Template",
        "category": "PDF",
        "sampleResult": "{\"id\":\"template1\",\"name\":\"Invoice Template\",\"content\":\"<html>...</html>\",\"created\":1234567890}"
      },
      {
        "params": [
          {
            "type": "string",
            "name": "appId",
            "label": "Application ID",
            "description": "The identifier of the application",
            "optional": true
          },
          {
            "type": "string",
            "name": "templateId",
            "label": "Template ID",
            "description": "The identifier of the template to delete",
            "optional": true
          }
        ],
        "methodName": "deleteTemplate",
        "description": "Delete a PDF template",
        "methodLabel": "Delete Template",
        "category": "PDF",
        "sampleResult": "true"
      }
    ],
    "serviceInfo": {
      "fileName": "/Users/macbookpro/dev/projects/backendless/Console-SDK/src/pdf.js",
      "serviceName": "pdf"
    }
  },
  {
    "methods": [
      {
        "params": [
          {
            "type": "string",
            "name": "appId",
            "label": "Application ID",
            "description": "The identifier of the application",
            "optional": true
          },
          {
            "type": "object",
            "name": "query",
            "label": "Query Parameters",
            "description": "Query parameters including force refresh option",
            "properties": [
              {
                "name": "forceRefresh",
                "label": "Force Refresh",
                "type": "boolean",
                "optional": true,
                "description": "Force refresh of tables data from the server, bypassing cache"
              }
            ],
            "expandedFromTypedef": "get__query",
            "optional": true
          }
        ],
        "methodName": "get",
        "description": "Get all tables for an application with optional cache refresh",
        "methodLabel": "Get Tables",
        "category": "Data",
        "sampleResult": "{\"mode\":\"internal\",\"tables\":[{\"tableId\":\"83C2C5B4-2249-48F2-816A-CA009958A64F\",\"view\":false,\"name\":\"Users\",\"dataConnector\":false,\"columns\":[{\"columnId\":\"4827244D-CE8D-4C31-8258-392E2100552A\",\"name\":\"objectId\",\"dataType\":\"STRING_ID\",\"isPrimaryKey\":true},{\"columnId\":\"1D8C7FFF-19BB-4B79-9D5F-ECE91F4772AB\",\"name\":\"name\",\"dataType\":\"STRING\",\"isPrimaryKey\":false}],\"relations\":[],\"system\":true,\"parentRelations\":[],\"geoRelations\":[]}]}"
      },
      {
        "params": [
          {
            "type": "string",
            "name": "appId",
            "label": "Application ID",
            "description": "The identifier of the application",
            "optional": true
          },
          {
            "type": "object",
            "name": "table",
            "label": "Table Data",
            "description": "Object containing table name and configuration",
            "properties": [
              {
                "name": "name",
                "label": "Table Name",
                "type": "string",
                "optional": true,
                "description": "The name of the table to create"
              }
            ],
            "expandedFromTypedef": "create__table",
            "optional": true
          }
        ],
        "methodName": "create",
        "description": "Create a new data table",
        "methodLabel": "Create Table",
        "category": "Data",
        "sampleResult": "{\"tableId\":\"table123\",\"view\":false,\"name\":\"NewTable\",\"dataConnector\":false,\"columns\":[{\"columnId\":\"col123\",\"name\":\"objectId\",\"dataType\":\"STRING_ID\",\"isPrimaryKey\":true}],\"relations\":[],\"system\":false,\"parentRelations\":null,\"geoRelations\":[]}"
      },
      {
        "params": [
          {
            "type": "string",
            "name": "appId",
            "label": "Application ID",
            "description": "The identifier of the application",
            "optional": true
          },
          {
            "type": "object",
            "name": "table",
            "label": "Table Object",
            "description": "Object containing current table name",
            "properties": [
              {
                "name": "name",
                "label": "Table Name",
                "type": "string",
                "optional": true,
                "description": "The current name of the table to update"
              }
            ],
            "expandedFromTypedef": "update__table",
            "optional": true
          },
          {
            "type": "object",
            "name": "props",
            "label": "Update Properties",
            "description": "Object containing the new table name",
            "properties": [
              {
                "name": "name",
                "label": "New Name",
                "type": "string",
                "optional": true,
                "description": "The new name for the table"
              }
            ],
            "expandedFromTypedef": "update__props",
            "optional": true
          }
        ],
        "methodName": "update",
        "description": "Update a data table name",
        "methodLabel": "Update Table",
        "category": "Data",
        "sampleResult": "{\"name\":\"UpdatedTable\",\"tableId\":\"table123\",\"columns\":[{\"columnId\":\"col123\",\"name\":\"objectId\",\"dataType\":\"STRING_ID\",\"isPrimaryKey\":true}],\"relations\":[],\"geoRelations\":[]}"
      },
      {
        "params": [
          {
            "type": "string",
            "name": "appId",
            "label": "Application ID",
            "description": "The identifier of the application",
            "optional": true
          },
          {
            "type": "object",
            "name": "table",
            "label": "Table Object",
            "description": "Object containing table name to remove",
            "properties": [
              {
                "name": "name",
                "label": "Table Name",
                "type": "string",
                "optional": true,
                "description": "The name of the table to remove"
              }
            ],
            "expandedFromTypedef": "remove__table",
            "optional": true
          }
        ],
        "methodName": "remove",
        "description": "Remove a data table",
        "methodLabel": "Remove Table",
        "category": "Data",
        "sampleResult": "true"
      },
      {
        "params": [
          {
            "type": "string",
            "name": "appId",
            "label": "Application ID",
            "description": "The identifier of the application",
            "optional": true
          },
          {
            "type": "object",
            "name": "table",
            "label": "Table Object",
            "description": "Object containing table name",
            "properties": [
              {
                "name": "name",
                "label": "Table Name",
                "type": "string",
                "optional": true,
                "description": "The name of the table to load records from"
              }
            ],
            "expandedFromTypedef": "loadRecords__table",
            "optional": true
          },
          {
            "type": "object",
            "name": "query",
            "label": "Query Parameters",
            "description": "Query options for filtering, sorting, and pagination",
            "properties": [
              {
                "name": "pageSize",
                "label": "Page Size",
                "type": "number",
                "optional": true,
                "description": "Number of records to retrieve (default: 15)"
              },
              {
                "name": "offset",
                "label": "Offset",
                "type": "number",
                "optional": true,
                "description": "Starting position for record retrieval (default: 0)"
              },
              {
                "name": "where",
                "label": "Where Clause",
                "type": "string",
                "optional": true,
                "description": "WHERE clause condition for filtering records (e.g., \"coll='value'\")"
              },
              {
                "name": "property",
                "label": "Properties",
                "type": "array",
                "optional": true,
                "description": "Array of specific properties to retrieve (e.g., [\"`created`\", \"`objectId`\"])"
              },
              {
                "name": "groupBy",
                "label": "Group By",
                "type": "string",
                "optional": true,
                "description": "Field to group results by (e.g., \"objectId\")"
              }
            ],
            "expandedFromTypedef": "loadRecords__query",
            "optional": true
          },
          {
            "type": "boolean",
            "name": "ignoreCounter",
            "label": "Ignore Counter",
            "description": "Whether to ignore the row counter for better performance",
            "optional": true
          }
        ],
        "methodName": "loadRecords",
        "description": "Load records from a data table with flexible query options",
        "methodLabel": "Load Records",
        "category": "Data",
        "sampleResult": "{\"totalRows\":4,\"data\":[{\"coll\":null,\"created\":1757609268010,\"___class\":\"testTable\",\"ownerId\":null,\"updated\":null,\"objectId\":\"SAMPLE-ID-1\"},{\"coll\":\"sample_value\",\"created\":1757609221217,\"___class\":\"testTable\",\"ownerId\":null,\"updated\":1757609259012,\"objectId\":\"SAMPLE-ID-2\"}]}"
      },
      {
        "params": [
          {
            "type": "string",
            "name": "appId",
            "label": "Application ID",
            "description": "The identifier of the application",
            "optional": true
          },
          {
            "type": "object",
            "name": "table",
            "label": "Table Object",
            "description": "Full table object (obtain from tables.get() method)",
            "properties": [
              {
                "name": "name",
                "label": "Table Name",
                "type": "string",
                "optional": true,
                "description": "The name of the table to count records in"
              },
              {
                "name": "tableId",
                "label": "Table ID",
                "type": "string",
                "optional": true,
                "description": "The unique identifier of the table"
              },
              {
                "name": "relations",
                "label": "Relations",
                "type": "array",
                "optional": true,
                "description": "Array of relation objects (obtained from get tables method)"
              },
              {
                "name": "geoRelations",
                "label": "Geo Relations",
                "type": "array",
                "optional": true,
                "description": "Array of geo relation objects (obtained from get tables method)"
              }
            ],
            "expandedFromTypedef": "getRecordsCount__table",
            "optional": true
          },
          {
            "type": "object",
            "name": "query",
            "label": "Query",
            "description": "The query parameters for filtering records",
            "optional": true
          },
          {
            "type": "boolean",
            "name": "resetCache",
            "label": "Reset Cache",
            "description": "Whether to reset the cache",
            "optional": true
          }
        ],
        "methodName": "getRecordsCount",
        "description": "Get the count of records in a table",
        "methodLabel": "Get Records Count",
        "category": "Data",
        "sampleResult": "150"
      },
      {
        "params": [
          {
            "type": "string",
            "name": "appId",
            "label": "Application ID",
            "description": "The identifier of the application",
            "optional": true
          },
          {
            "type": "object",
            "name": "table",
            "label": "Table Object",
            "description": "Full table object (obtain from tables.get() method)",
            "properties": [
              {
                "name": "name",
                "label": "Table Name",
                "type": "string",
                "optional": true,
                "description": "The name of the table to count records in"
              },
              {
                "name": "tableId",
                "label": "Table ID",
                "type": "string",
                "optional": true,
                "description": "The unique identifier of the table"
              },
              {
                "name": "relations",
                "label": "Relations",
                "type": "array",
                "optional": true,
                "description": "Array of relation objects (obtained from get tables method)"
              },
              {
                "name": "geoRelations",
                "label": "Geo Relations",
                "type": "array",
                "optional": true,
                "description": "Array of geo relation objects (obtained from get tables method)"
              }
            ],
            "expandedFromTypedef": "getCount__table",
            "optional": true
          },
          {
            "type": "object",
            "name": "query",
            "label": "Query",
            "description": "The query parameters for filtering records",
            "optional": true
          }
        ],
        "methodName": "getCount",
        "description": "Get the count of records matching a query",
        "methodLabel": "Get Count",
        "category": "Data",
        "sampleResult": "75"
      },
      {
        "params": [
          {
            "type": "string",
            "name": "appId",
            "label": "Application ID",
            "description": "The identifier of the application",
            "optional": true
          },
          {
            "type": "array",
            "name": "tables",
            "label": "Tables",
            "description": "Array of table names",
            "optional": true
          },
          {
            "type": "string",
            "name": "connectorId",
            "label": "Connector ID",
            "description": "The connector identifier",
            "optional": true
          },
          {
            "type": "boolean",
            "name": "resetCache",
            "label": "Reset Cache",
            "description": "Whether to reset the cache",
            "optional": true
          }
        ],
        "methodName": "getRecordsCountForTables",
        "description": "Get record counts for multiple tables",
        "methodLabel": "Get Records Count For Tables",
        "category": "Data",
        "sampleResult": "{\"Users\":150,\"Orders\":75,\"Products\":300}"
      },
      {
        "params": [
          {
            "type": "string",
            "name": "appId",
            "label": "Application ID",
            "description": "The identifier of the application",
            "optional": true
          },
          {
            "type": "string",
            "name": "tableName",
            "label": "Table Name",
            "description": "The name of the table",
            "optional": true
          },
          {
            "type": "string",
            "name": "recordId",
            "label": "Record ID",
            "description": "The identifier of the record",
            "optional": true
          },
          {
            "type": "string",
            "name": "columnName",
            "label": "Column Name",
            "description": "The name of the column",
            "optional": true
          }
        ],
        "methodName": "getCellData",
        "description": "Get data from a specific table cell",
        "methodLabel": "Get Cell Data",
        "category": "Data",
        "sampleResult": "\"John Doe\""
      },
      {
        "params": [
          {
            "type": "string",
            "name": "appId",
            "label": "Application ID",
            "description": "The identifier of the application",
            "optional": true
          },
          {
            "type": "object",
            "name": "table",
            "label": "Table Object",
            "description": "Object containing table name",
            "properties": [
              {
                "name": "name",
                "label": "Table Name",
                "type": "string",
                "optional": true,
                "description": "The name of the table to create record in"
              }
            ],
            "expandedFromTypedef": "createRecord__table",
            "optional": true
          },
          {
            "type": "object",
            "name": "record",
            "label": "Record",
            "description": "The record data to create",
            "optional": true
          }
        ],
        "methodName": "createRecord",
        "description": "Create a new record in a data table",
        "methodLabel": "Create Record",
        "category": "Data",
        "sampleResult": "{\"coll\":\"test_value\",\"created\":1757611485750,\"name\":\"Test User\",\"___class\":\"testTable\",\"ownerId\":null,\"updated\":null,\"email\":\"test@example.com\",\"objectId\":\"SAMPLE-ID-123\"}"
      },
      {
        "params": [
          {
            "type": "string",
            "name": "appId",
            "label": "Application ID",
            "description": "The identifier of the application",
            "optional": true
          },
          {
            "type": "string",
            "name": "tableName",
            "label": "Table Name",
            "description": "The name of the table",
            "optional": true
          },
          {
            "type": "array",
            "name": "records",
            "label": "Records",
            "description": "Array of record objects to create",
            "optional": true
          }
        ],
        "methodName": "bulkCreateRecords",
        "description": "Create multiple records at once",
        "methodLabel": "Bulk Create Records",
        "category": "Data",
        "sampleResult": "[{\"objectId\":\"rec123\",\"name\":\"John\"},{\"objectId\":\"rec124\",\"name\":\"Jane\"}]"
      },
      {
        "params": [
          {
            "type": "string",
            "name": "appId",
            "label": "Application ID",
            "description": "The identifier of the application",
            "optional": true
          },
          {
            "type": "string",
            "name": "tableName",
            "label": "Table Name",
            "description": "The name of the table",
            "optional": true
          },
          {
            "type": "array",
            "name": "records",
            "label": "Records",
            "description": "Array of record objects to upsert",
            "optional": true
          }
        ],
        "methodName": "bulkUpsertRecords",
        "description": "Create or update multiple records at once",
        "methodLabel": "Bulk Upsert Records",
        "category": "Data",
        "sampleResult": "[{\"objectId\":\"rec123\",\"name\":\"Updated John\"},{\"objectId\":\"rec124\",\"name\":\"New Jane\"}]"
      },
      {
        "params": [
          {
            "type": "string",
            "name": "appId",
            "label": "Application ID",
            "description": "The identifier of the application",
            "optional": true
          },
          {
            "type": "object",
            "name": "table",
            "label": "Table Object",
            "description": "Object containing table name",
            "properties": [
              {
                "name": "name",
                "label": "Table Name",
                "type": "string",
                "optional": true,
                "description": "The name of the table to update record in"
              }
            ],
            "expandedFromTypedef": "updateRecord__table",
            "optional": true
          },
          {
            "type": "object",
            "name": "record",
            "label": "Record",
            "description": "The record data to update (must include objectId)",
            "optional": true
          }
        ],
        "methodName": "updateRecord",
        "description": "Update an existing record in a data table",
        "methodLabel": "Update Record",
        "category": "Data",
        "sampleResult": "{\"coll\":\"updated_value\",\"created\":1757611485750,\"name\":\"Updated Test User\",\"___class\":\"testTable\",\"ownerId\":null,\"updated\":1757663392976,\"email\":\"updated@example.com\",\"objectId\":\"SAMPLE-ID-456\"}"
      },
      {
        "params": [
          {
            "type": "string",
            "name": "appId",
            "label": "Application ID",
            "description": "The identifier of the application",
            "optional": true
          },
          {
            "type": "object",
            "name": "table",
            "label": "Table Object",
            "description": "Full table object with tableId (obtain from tables.get() method)",
            "properties": [
              {
                "name": "name",
                "label": "Table Name",
                "type": "string",
                "optional": true,
                "description": "The name of the table to delete records from"
              },
              {
                "name": "tableId",
                "label": "Table ID",
                "type": "string",
                "optional": true,
                "description": "The unique identifier of the table (needed for cache management)"
              },
              {
                "name": "relations",
                "label": "Relations",
                "type": "array",
                "optional": true,
                "description": "Array of relation objects (obtained from get tables method)"
              },
              {
                "name": "geoRelations",
                "label": "Geo Relations",
                "type": "array",
                "optional": true,
                "description": "Array of geo relation objects (obtained from get tables method)"
              }
            ],
            "expandedFromTypedef": "deleteRecords__table",
            "optional": true
          },
          {
            "type": "array",
            "name": "recordIds",
            "label": "Record IDs",
            "description": "Array of record IDs to delete, or null to delete all",
            "optional": true
          }
        ],
        "methodName": "deleteRecords",
        "description": "Delete records from a data table",
        "methodLabel": "Delete Records",
        "category": "Data",
        "sampleResult": "true"
      },
      {
        "params": [
          {
            "type": "string",
            "name": "appId",
            "label": "Application ID",
            "description": "The identifier of the application",
            "optional": true
          },
          {
            "type": "string",
            "name": "tableName",
            "label": "Table Name",
            "description": "The name of the table",
            "optional": true
          },
          {
            "type": "string",
            "name": "columnName",
            "label": "Column Name",
            "description": "The name of the image column",
            "optional": true
          },
          {
            "type": "string",
            "name": "recordId",
            "label": "Record ID",
            "description": "The identifier of the record",
            "optional": true
          }
        ],
        "methodName": "deleteImageTypeRecord",
        "description": "Delete an image type field from a record",
        "methodLabel": "Delete Image Type Record",
        "category": "Data",
        "sampleResult": "true"
      },
      {
        "params": [
          {
            "type": "string",
            "name": "appId",
            "label": "Application ID",
            "description": "The identifier of the application",
            "optional": true
          },
          {
            "type": "object",
            "name": "table",
            "label": "Table Object",
            "description": "Full table object with relations array (obtain from tables.get() method)",
            "properties": [
              {
                "name": "name",
                "label": "Table Name",
                "type": "string",
                "optional": true,
                "description": "The name of the table containing the relation column"
              },
              {
                "name": "tableId",
                "label": "Table ID",
                "type": "string",
                "optional": true,
                "description": "The unique identifier of the table"
              },
              {
                "name": "relations",
                "label": "Relations",
                "type": "array",
                "optional": true,
                "description": "Array of relation objects defining table relationships (obtained from get tables method)"
              },
              {
                "name": "geoRelations",
                "label": "Geo Relations",
                "type": "array",
                "optional": true,
                "description": "Array of geo relation objects (obtained from get tables method)"
              }
            ],
            "expandedFromTypedef": "updateRelations__table",
            "optional": true
          },
          {
            "type": "string",
            "name": "columnName",
            "label": "Column Name",
            "description": "The name of the relation column",
            "optional": true
          },
          {
            "type": "string",
            "name": "recordId",
            "label": "Record ID",
            "description": "The identifier of the record",
            "optional": true
          },
          {
            "type": "array",
            "name": "relationIds",
            "label": "Relation IDs",
            "description": "Array of related record IDs",
            "optional": true
          }
        ],
        "methodName": "updateRelations",
        "description": "Update relations for a record",
        "methodLabel": "Update Relations",
        "category": "Data",
        "sampleResult": "\"\""
      },
      {
        "params": [
          {
            "type": "string",
            "name": "appId",
            "label": "Application ID",
            "description": "The identifier of the application",
            "optional": true
          },
          {
            "type": "object",
            "name": "table",
            "label": "Table Object",
            "description": "Full table object with relations array (obtain from tables.get() method)",
            "properties": [
              {
                "name": "name",
                "label": "Table Name",
                "type": "string",
                "optional": true,
                "description": "The name of the table containing the relation column"
              },
              {
                "name": "tableId",
                "label": "Table ID",
                "type": "string",
                "optional": true,
                "description": "The unique identifier of the table"
              },
              {
                "name": "relations",
                "label": "Relations",
                "type": "array",
                "optional": true,
                "description": "Array of relation objects defining table relationships (obtained from get tables method)"
              },
              {
                "name": "geoRelations",
                "label": "Geo Relations",
                "type": "array",
                "optional": true,
                "description": "Array of geo relation objects (obtained from get tables method)"
              }
            ],
            "expandedFromTypedef": "removeRelations__table",
            "optional": true
          },
          {
            "type": "string",
            "name": "columnName",
            "label": "Column Name",
            "description": "The name of the relation column",
            "optional": true
          },
          {
            "type": "string",
            "name": "recordId",
            "label": "Record ID",
            "description": "The identifier of the record",
            "optional": true
          },
          {
            "type": "array",
            "name": "relationIds",
            "label": "Relation IDs",
            "description": "Array of related record IDs to remove",
            "optional": true
          }
        ],
        "methodName": "removeRelations",
        "description": "Remove relations from a record",
        "methodLabel": "Remove Relations",
        "category": "Data",
        "sampleResult": "true"
      },
      {
        "params": [
          {
            "type": "string",
            "name": "appId",
            "label": "Application ID",
            "description": "The identifier of the application",
            "optional": true
          },
          {
            "type": "object",
            "name": "table",
            "label": "Table Object",
            "description": "Object containing table name",
            "properties": [
              {
                "name": "name",
                "label": "Table Name",
                "type": "string",
                "optional": true,
                "description": "The name of the table containing the column to delete"
              }
            ],
            "expandedFromTypedef": "deleteColumn__table",
            "optional": true
          },
          {
            "type": "object",
            "name": "column",
            "label": "Column Object",
            "description": "Object containing column name to delete",
            "properties": [
              {
                "name": "name",
                "label": "Column Name",
                "type": "string",
                "optional": true,
                "description": "The name of the column to delete"
              }
            ],
            "expandedFromTypedef": "deleteColumn__column",
            "optional": true
          }
        ],
        "methodName": "deleteColumn",
        "description": "Delete a column from a data table",
        "methodLabel": "Delete Column",
        "category": "Data",
        "sampleResult": "\"\""
      },
      {
        "params": [
          {
            "type": "string",
            "name": "appId",
            "label": "Application ID",
            "description": "The identifier of the application",
            "optional": true
          }
        ],
        "methodName": "loadConfigs",
        "description": "Load data configuration settings for an application",
        "methodLabel": "Load Configs",
        "category": "Data",
        "sampleResult": "{\"dynamicSchema\":true,\"includeObjectIdByDefault\":false}"
      },
      {
        "params": [
          {
            "type": "string",
            "name": "appId",
            "label": "Application ID",
            "description": "The identifier of the application",
            "optional": true
          },
          {
            "type": "object",
            "name": "configs",
            "label": "Configurations",
            "description": "The configuration settings to set",
            "properties": [
              {
                "name": "dynamicSchema",
                "label": "Dynamic Schema",
                "type": "boolean",
                "optional": true,
                "description": "Enable or disable dynamic schema for tables"
              },
              {
                "name": "includeObjectIdByDefault",
                "label": "Include Object ID By Default",
                "type": "boolean",
                "optional": true,
                "description": "Whether to include objectId field in API responses by default"
              }
            ],
            "expandedFromTypedef": "setConfigs__configs",
            "optional": true
          }
        ],
        "methodName": "setConfigs",
        "description": "Set data configuration settings for an application",
        "methodLabel": "Set Configs",
        "category": "Data",
        "sampleResult": "{\"dynamicSchema\":false,\"includeObjectIdByDefault\":true}"
      }
    ],
    "serviceInfo": {
      "fileName": "/Users/macbookpro/dev/projects/backendless/Console-SDK/src/tables.js",
      "serviceName": "tables"
    }
  },
  {
    "methods": [],
    "serviceInfo": {
      "fileName": "/Users/macbookpro/dev/projects/backendless/Console-SDK/src/transfer.js",
      "serviceName": "transfer"
    }
  },
  {
    "methods": [
      {
        "params": [
          {
            "type": "string",
            "name": "authKey",
            "label": "Auth Key",
            "description": "Optional authentication key",
            "optional": true
          }
        ],
        "methodName": "getAccountInfo",
        "description": "Get account information for the current user",
        "methodLabel": "Get Account Info",
        "category": "User",
        "sampleResult": "{\"name\":\"John Developer\",\"email\":\"john@example.com\",\"authKey\":\"auth123\"}"
      },
      {
        "params": [
          {
            "type": "string",
            "name": "appId",
            "label": "Application ID",
            "description": "The identifier of the application",
            "optional": true
          }
        ],
        "methodName": "getPermissions",
        "description": "Get user permissions for an application",
        "methodLabel": "Get Permissions",
        "category": "User",
        "sampleResult": "{\"canRead\":true,\"canWrite\":false,\"canDelete\":false,\"roles\":[\"viewer\"]}"
      }
    ],
    "serviceInfo": {
      "fileName": "/Users/macbookpro/dev/projects/backendless/Console-SDK/src/user.js",
      "serviceName": "user"
    }
  },
  {
    "methods": [
      {
        "params": [
          {
            "type": "string",
            "name": "appId",
            "label": "Application ID",
            "description": "The identifier of the application",
            "optional": true
          }
        ],
        "methodName": "getUsersRegs",
        "description": "Get user registration settings",
        "methodLabel": "Get Users Regs",
        "category": "Users",
        "sampleResult": "{\"enabled\":true,\"emailConfirmation\":true,\"roles\":[\"default\"]}"
      },
      {
        "params": [
          {
            "type": "string",
            "name": "appId",
            "label": "Application ID",
            "description": "The identifier of the application",
            "optional": true
          },
          {
            "type": "object",
            "name": "data",
            "label": "Registration Data",
            "description": "The registration settings to update",
            "optional": true
          }
        ],
        "methodName": "updateUsersRegs",
        "description": "Update user registration settings",
        "methodLabel": "Update Users Regs",
        "category": "Users",
        "sampleResult": "{\"enabled\":false,\"emailConfirmation\":false,\"updated\":true}"
      },
      {
        "params": [
          {
            "type": "string",
            "name": "appId",
            "label": "Application ID",
            "description": "The identifier of the application",
            "optional": true
          }
        ],
        "methodName": "getUsersLogin",
        "description": "Get user login settings",
        "methodLabel": "Get Users Login",
        "category": "Users",
        "sampleResult": "{\"sessionTimeout\":3600,\"maxFailedAttempts\":5,\"lockoutDuration\":300}"
      },
      {
        "params": [
          {
            "type": "string",
            "name": "appId",
            "label": "Application ID",
            "description": "The identifier of the application",
            "optional": true
          }
        ],
        "methodName": "logoutAllUsers",
        "description": "Logout all users from the application",
        "methodLabel": "Logout All Users",
        "category": "Users",
        "sampleResult": "{\"loggedOut\":150,\"success\":true}"
      },
      {
        "params": [
          {
            "type": "string",
            "name": "provider",
            "label": "Provider",
            "description": "The social provider name",
            "optional": true
          }
        ],
        "methodName": "getUserSocialLogin",
        "description": "Get social login URL for a provider",
        "methodLabel": "Get User Social Login",
        "category": "Users",
        "sampleResult": "{\"url\":\"https://accounts.google.com/oauth/authorize?...\"}"
      },
      {
        "params": [
          {
            "type": "string",
            "name": "appId",
            "label": "Application ID",
            "description": "The identifier of the application",
            "optional": true
          },
          {
            "type": "object",
            "name": "data",
            "label": "Login Data",
            "description": "The login settings to update",
            "optional": true
          }
        ],
        "methodName": "updateUsersLogin",
        "description": "Update user login settings",
        "methodLabel": "Update Users Login",
        "category": "Users",
        "sampleResult": "{\"sessionTimeout\":7200,\"updated\":true}"
      },
      {
        "params": [
          {
            "type": "string",
            "name": "appId",
            "label": "Application ID",
            "description": "The identifier of the application",
            "optional": true
          }
        ],
        "methodName": "getOAuth1Providers",
        "description": "Get all OAuth1 providers",
        "methodLabel": "Get OAuth1 Providers",
        "category": "Users",
        "sampleResult": "[{\"id\":\"provider1\",\"name\":\"Twitter\",\"enabled\":true}]"
      },
      {
        "params": [
          {
            "type": "string",
            "name": "appId",
            "label": "Application ID",
            "description": "The identifier of the application",
            "optional": true
          }
        ],
        "methodName": "getOAuth2Providers",
        "description": "Get all OAuth2 providers",
        "methodLabel": "Get OAuth2 Providers",
        "category": "Users",
        "sampleResult": "[{\"id\":\"provider2\",\"name\":\"Google\",\"enabled\":true}]"
      },
      {
        "params": [
          {
            "type": "string",
            "name": "appId",
            "label": "Application ID",
            "description": "The identifier of the application",
            "optional": true
          },
          {
            "type": "string",
            "name": "providerId",
            "label": "Provider ID",
            "description": "The identifier of the OAuth1 provider",
            "optional": true
          }
        ],
        "methodName": "getOAuth1Provider",
        "description": "Get a specific OAuth1 provider",
        "methodLabel": "Get OAuth1 Provider",
        "category": "Users",
        "sampleResult": "{\"id\":\"provider1\",\"name\":\"Twitter\",\"consumerKey\":\"key123\",\"enabled\":true}"
      },
      {
        "params": [
          {
            "type": "string",
            "name": "appId",
            "label": "Application ID",
            "description": "The identifier of the application",
            "optional": true
          },
          {
            "type": "string",
            "name": "providerId",
            "label": "Provider ID",
            "description": "The identifier of the OAuth2 provider",
            "optional": true
          }
        ],
        "methodName": "getOAuth2Provider",
        "description": "Get a specific OAuth2 provider",
        "methodLabel": "Get OAuth2 Provider",
        "category": "Users",
        "sampleResult": "{\"id\":\"provider2\",\"name\":\"Google\",\"clientId\":\"client123\",\"enabled\":true}"
      }
    ],
    "serviceInfo": {
      "fileName": "/Users/macbookpro/dev/projects/backendless/Console-SDK/src/users.js",
      "serviceName": "users"
    }
  }
]
