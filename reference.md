# Reference

## EntityGroup

<details><summary><code>client.entityGroup.<a href="/src/api/resources/entityGroup/client/Client.ts">getAll</a>({ ...params }) -> Mercoa.EntityGroupFindResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Get all entity groups. If using a JWT, will return all groups the entity is part of. If using an API key, will return all groups for the organization.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.entityGroup.getAll();
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Mercoa.entityGroup.EntityGroupFindRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `EntityGroup.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.entityGroup.<a href="/src/api/resources/entityGroup/client/Client.ts">create</a>({ ...params }) -> Mercoa.EntityGroupResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Create an entity group

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.entityGroup.create({
    foreignId: "your-group-id",
    name: "AcmeConglomerate",
    emailToName: "acmegroup",
    entityIds: ["ent_8545a84e-a45f-41bf-bdf1-33b42a55812c", "ent_21661ac1-a2a8-4465-a6c0-64474ba8181d"],
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Mercoa.EntityGroupCreateRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `EntityGroup.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.entityGroup.<a href="/src/api/resources/entityGroup/client/Client.ts">get</a>(entityGroupId, { ...params }) -> Mercoa.EntityGroupResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Get an entity group

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.entityGroup.get("entg_a3582b70-fd04-4888-9185-a640ae9048be");
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**entityGroupId:** `Mercoa.EntityGroupId` — Entity Group ID or Entity Group ForeignID

</dd>
</dl>

<dl>
<dd>

**request:** `Mercoa.entityGroup.EntityGroupGetRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `EntityGroup.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.entityGroup.<a href="/src/api/resources/entityGroup/client/Client.ts">update</a>(entityGroupId, { ...params }) -> Mercoa.EntityGroupResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Update an entity group

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.entityGroup.update("entg_a3582b70-fd04-4888-9185-a640ae9048be", {
    foreignId: "your-group-id",
    name: "AcmeConglomerate",
    emailToName: "acmegroup",
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**entityGroupId:** `Mercoa.EntityGroupId` — Entity Group ID or Entity Group ForeignID

</dd>
</dl>

<dl>
<dd>

**request:** `Mercoa.EntityGroupUpdateRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `EntityGroup.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.entityGroup.<a href="/src/api/resources/entityGroup/client/Client.ts">delete</a>(entityGroupId) -> void</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Delete an entity group

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.entityGroup.delete("string");
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**entityGroupId:** `Mercoa.EntityGroupId` — Entity Group ID or Entity Group ForeignID

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `EntityGroup.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.entityGroup.<a href="/src/api/resources/entityGroup/client/Client.ts">getToken</a>(entityGroupId, { ...params }) -> string</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Generate a JWT token for an entity group with the given options. This token can be used to authenticate to any entity in the entity group in the Mercoa API and iFrame.

<Warning>We recommend using [this endpoint](/api-reference/entity-group/user/get-token). This will enable features such as approvals and comments.</Warning>

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.entityGroup.getToken("entg_a0f6ea94-0761-4a5e-a416-3c453cb7eced", {
    expiresIn: "1h",
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**entityGroupId:** `Mercoa.EntityGroupId` — Entity Group ID or Entity Group ForeignID

</dd>
</dl>

<dl>
<dd>

**request:** `Mercoa.TokenGenerationOptions`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `EntityGroup.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.entityGroup.<a href="/src/api/resources/entityGroup/client/Client.ts">addEntities</a>(entityGroupId, { ...params }) -> Mercoa.EntityGroupResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Add entities to an entity group

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.entityGroup.addEntities("entg_a0f6ea94-0761-4a5e-a416-3c453cb7eced", {
    entityIds: ["ent_8545a84e-a45f-41bf-bdf1-33b42a55812c", "ent_21661ac1-a2a8-4465-a6c0-64474ba8181d"],
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**entityGroupId:** `Mercoa.EntityGroupId` — Entity Group ID or Entity Group ForeignID

</dd>
</dl>

<dl>
<dd>

**request:** `Mercoa.EntityGroupAddEntitiesRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `EntityGroup.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.entityGroup.<a href="/src/api/resources/entityGroup/client/Client.ts">removeEntities</a>(entityGroupId, { ...params }) -> Mercoa.EntityGroupResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Remove entities from an entity group

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.entityGroup.removeEntities("entg_a0f6ea94-0761-4a5e-a416-3c453cb7eced", {
    entityIds: ["ent_8545a84e-a45f-41bf-bdf1-33b42a55812c", "ent_21661ac1-a2a8-4465-a6c0-64474ba8181d"],
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**entityGroupId:** `Mercoa.EntityGroupId` — Entity Group ID or Entity Group ForeignID

</dd>
</dl>

<dl>
<dd>

**request:** `Mercoa.EntityGroupRemoveEntitiesRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `EntityGroup.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

## EntityGroup User

<details><summary><code>client.entityGroup.user.<a href="/src/api/resources/entityGroup/resources/user/client/Client.ts">find</a>(entityGroupId, { ...params }) -> Mercoa.FindEntityGroupUserResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Search entity group users

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.entityGroup.user.find("entg_8545a84e-a45f-41bf-bdf1-33b42a55812c", {
    name: "John",
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**entityGroupId:** `Mercoa.EntityGroupId` — Entity Group ID or Entity Group ForeignID

</dd>
</dl>

<dl>
<dd>

**request:** `Mercoa.entityGroup.user.EntityFindEntityRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `User.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.entityGroup.user.<a href="/src/api/resources/entityGroup/resources/user/client/Client.ts">create</a>(entityGroupId, { ...params }) -> Mercoa.EntityGroupUserResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Create entity user that will be added to all entities in the group.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.entityGroup.user.create("entg_8545a84e-a45f-41bf-bdf1-33b42a55812c", {
    foreignId: "MY-DB-ID-12345",
    email: "john.doe@acme.com",
    name: "John Doe",
    entities: [
        {
            roles: ["admin", "approver"],
            entityId: "ent_21661ac1-a2a8-4465-a6c0-64474ba8181d",
        },
        {
            roles: ["viewer"],
            entityId: "ent_9e02a20e-7749-47de-8d8a-f8ff2859fa90",
        },
    ],
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**entityGroupId:** `Mercoa.EntityGroupId` — Entity Group ID or Entity Group ForeignID

</dd>
</dl>

<dl>
<dd>

**request:** `Mercoa.EntityGroupUserRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `User.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.entityGroup.user.<a href="/src/api/resources/entityGroup/resources/user/client/Client.ts">get</a>(entityGroupId, foreignId) -> Mercoa.EntityGroupUserResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Get entity user from a group

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.entityGroup.user.get("entg_8545a84e-a45f-41bf-bdf1-33b42a55812c", "MY-DB-ID-12345");
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**entityGroupId:** `Mercoa.EntityGroupId` — Entity Group ID or Entity Group ForeignID

</dd>
</dl>

<dl>
<dd>

**foreignId:** `string` — ID used to identify user in your system

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `User.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.entityGroup.user.<a href="/src/api/resources/entityGroup/resources/user/client/Client.ts">update</a>(entityGroupId, foreignId, { ...params }) -> Mercoa.EntityGroupUserResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Update entity user for all entities in the group.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.entityGroup.user.update("entg_8545a84e-a45f-41bf-bdf1-33b42a55812c", "MY-DB-ID-12345", {
    foreignId: "MY-DB-ID-12345",
    email: "john.doe@acme.com",
    name: "John Doe",
    entities: [
        {
            roles: ["admin", "approver"],
            entityId: "ent_21661ac1-a2a8-4465-a6c0-64474ba8181d",
        },
        {
            roles: ["viewer"],
            entityId: "ent_9e02a20e-7749-47de-8d8a-f8ff2859fa90",
        },
    ],
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**entityGroupId:** `Mercoa.EntityGroupId` — Entity Group ID or Entity Group ForeignID

</dd>
</dl>

<dl>
<dd>

**foreignId:** `string` — ID used to identify user in your system

</dd>
</dl>

<dl>
<dd>

**request:** `Mercoa.EntityGroupUserRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `User.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.entityGroup.user.<a href="/src/api/resources/entityGroup/resources/user/client/Client.ts">delete</a>(entityGroupId, foreignId) -> void</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Delete entity user from all entities in the group. This will also remove the user from all approval policies. If an approval policy will break as a result of this operation, this request will fail.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.entityGroup.user.delete("string", "string");
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**entityGroupId:** `Mercoa.EntityGroupId` — Entity Group ID or Entity Group ForeignID

</dd>
</dl>

<dl>
<dd>

**foreignId:** `string` — ID used to identify user in your system

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `User.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.entityGroup.user.<a href="/src/api/resources/entityGroup/resources/user/client/Client.ts">getToken</a>(entityGroupId, foreignId, { ...params }) -> string</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Generate a JWT token for an entity group with the given options. This token can be used to authenticate to any entity in the entity group as the user in the Mercoa API and iFrame.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.entityGroup.user.getToken("entg_a0f6ea94-0761-4a5e-a416-3c453cb7eced", "MY-DB-ID-12345", {
    expiresIn: "1h",
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**entityGroupId:** `Mercoa.EntityGroupId` — Entity Group ID or Entity Group ForeignID

</dd>
</dl>

<dl>
<dd>

**foreignId:** `string` — ID used to identify user in your system

</dd>
</dl>

<dl>
<dd>

**request:** `Mercoa.TokenGenerationOptions`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `User.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

## Entity

<details><summary><code>client.entity.<a href="/src/api/resources/entity/client/Client.ts">find</a>({ ...params }) -> Mercoa.FindEntityResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Search all entities with the given filters. If no filters are provided, all entities will be returned.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.entity.find({
    isCustomer: true,
    foreignId: "MY-DB-ID-12345",
    paymentMethods: true,
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Mercoa.entity.FindEntities`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Entity.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.entity.<a href="/src/api/resources/entity/client/Client.ts">create</a>({ ...params }) -> Mercoa.EntityResponse</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.entity.create({
    isCustomer: true,
    isPayor: true,
    isPayee: false,
    accountType: "business",
    foreignId: "MY-DB-ID-12345",
    profile: {
        business: {
            email: "customer@acme.com",
            legalBusinessName: "Acme Inc.",
            website: "http://www.acme.com",
            businessType: "llc",
            phone: {
                countryCode: "1",
                number: "4155551234",
            },
            address: {
                addressLine1: "123 Main St",
                addressLine2: "Unit 1",
                city: "San Francisco",
                stateOrProvince: "CA",
                postalCode: "94105",
                country: "US",
            },
            taxId: {
                ein: {
                    number: "12-3456789",
                },
            },
        },
    },
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Mercoa.EntityRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Entity.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.entity.<a href="/src/api/resources/entity/client/Client.ts">get</a>(entityId, { ...params }) -> Mercoa.EntityResponse</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.entity.get("ent_a0f6ea94-0761-4a5e-a416-3c453cb7eced");
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**entityId:** `Mercoa.EntityId` — Entity ID or Entity ForeignID

</dd>
</dl>

<dl>
<dd>

**request:** `Mercoa.entity.EntityGetRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Entity.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.entity.<a href="/src/api/resources/entity/client/Client.ts">update</a>(entityId, { ...params }) -> Mercoa.EntityResponse</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.entity.update("ent_a0f6ea94-0761-4a5e-a416-3c453cb7eced", {
    isCustomer: true,
    isPayor: true,
    isPayee: false,
    accountType: "business",
    foreignId: "MY-DB-ID-12345",
    profile: {
        business: {
            email: "customer@acme.com",
            legalBusinessName: "Acme Inc.",
            website: "http://www.acme.com",
            businessType: "llc",
            phone: {
                countryCode: "1",
                number: "4155551234",
            },
            address: {
                addressLine1: "123 Main St",
                addressLine2: "Unit 1",
                city: "San Francisco",
                stateOrProvince: "CA",
                postalCode: "94105",
                country: "US",
            },
            taxId: {
                ein: {
                    number: "12-3456789",
                },
            },
        },
    },
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**entityId:** `Mercoa.EntityId` — Entity ID or Entity ForeignID

</dd>
</dl>

<dl>
<dd>

**request:** `Mercoa.EntityUpdateRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Entity.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.entity.<a href="/src/api/resources/entity/client/Client.ts">delete</a>(entityId) -> void</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Will archive the entity. This action cannot be undone, and the entity will no longer be available for use. The foreignId on the entity will be cleared as well.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.entity.delete("string");
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**entityId:** `Mercoa.EntityId` — Entity ID or Entity ForeignID

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Entity.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.entity.<a href="/src/api/resources/entity/client/Client.ts">acceptTermsOfService</a>(entityId) -> void</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

This endpoint is used to indicate acceptance of Mercoa's terms of service for an entity. Send a request to this endpoint only after the entity has accepted the Mercoa ToS. Entities must accept Mercoa ToS before they can be send or pay invoices using Mercoa's payment rails.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.entity.acceptTermsOfService("ent_a0f6ea94-0761-4a5e-a416-3c453cb7eced");
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**entityId:** `Mercoa.EntityId` — Entity ID or Entity ForeignID

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Entity.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.entity.<a href="/src/api/resources/entity/client/Client.ts">initiateKyb</a>(entityId) -> void</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

This endpoint is used to initiate KYB for an entity.
Send a request to this endpoint only after the entity has accepted the Mercoa ToS,
all representatives have been added, and all required fields have been filled out.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.entity.initiateKyb("ent_a0f6ea94-0761-4a5e-a416-3c453cb7eced");
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**entityId:** `Mercoa.EntityId` — Entity ID or Entity ForeignID

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Entity.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.entity.<a href="/src/api/resources/entity/client/Client.ts">getToken</a>(entityId, { ...params }) -> string</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Generate a JWT token for an entity with the given options. This token can be used to authenticate the entity in the Mercoa API and iFrame.

<Warning>We recommend using [this endpoint](/api-reference/entity/user/get-token). This will enable features such as approvals and comments.</Warning>

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.entity.getToken("ent_a0f6ea94-0761-4a5e-a416-3c453cb7eced", {
    expiresIn: "1h",
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**entityId:** `Mercoa.EntityId` — Entity ID or Entity ForeignID

</dd>
</dl>

<dl>
<dd>

**request:** `Mercoa.TokenGenerationOptions`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Entity.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.entity.<a href="/src/api/resources/entity/client/Client.ts">plaidLinkToken</a>(entityId, { ...params }) -> string</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Get a Plaid link token for an entity. This token can be used to add or update a bank account to the entity using Plaid Link.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.entity.plaidLinkToken("ent_8545a84e-a45f-41bf-bdf1-33b42a55812c", {
    paymentMethodId: "pm_4794d597-70dc-4fec-b6ec-c5988e759769",
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**entityId:** `Mercoa.EntityId` — Entity ID or Entity ForeignID

</dd>
</dl>

<dl>
<dd>

**request:** `Mercoa.entity.PlaidLinkTokenRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Entity.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.entity.<a href="/src/api/resources/entity/client/Client.ts">getOnboardingLink</a>(entityId, { ...params }) -> string</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Generate an onboarding link for the entity.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.entity.getOnboardingLink("ent_a0f6ea94-0761-4a5e-a416-3c453cb7eced", {
    type: "PAYOR",
    expiresIn: "1h",
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**entityId:** `Mercoa.EntityId` — Entity ID or Entity ForeignID

</dd>
</dl>

<dl>
<dd>

**request:** `Mercoa.entity.GenerateOnboardingLink`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Entity.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.entity.<a href="/src/api/resources/entity/client/Client.ts">sendOnboardingLink</a>(entityId, { ...params }) -> void</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Send an email with a onboarding link to the entity. The email will be sent to the email address associated with the entity.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.entity.sendOnboardingLink("string", {
    type: "PAYEE",
    expiresIn: "string",
    connectedEntityId: "string",
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**entityId:** `Mercoa.EntityId` — Entity ID or Entity ForeignID

</dd>
</dl>

<dl>
<dd>

**request:** `Mercoa.entity.SendOnboardingLink`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Entity.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.entity.<a href="/src/api/resources/entity/client/Client.ts">events</a>(entityId, { ...params }) -> Mercoa.EntityEventsResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Get all events for an entity

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.entity.events("ent_a0f6ea94-0761-4a5e-a416-3c453cb7eced");
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**entityId:** `Mercoa.EntityId` — Entity ID or Entity ForeignID

</dd>
</dl>

<dl>
<dd>

**request:** `Mercoa.entity.EntityEntityGetEventsRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Entity.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

## Entity Counterparty

<details><summary><code>client.entity.counterparty.<a href="/src/api/resources/entity/resources/counterparty/client/Client.ts">findPayees</a>(entityId, { ...params }) -> Mercoa.FindCounterpartiesResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Find payee counterparties. This endpoint lets you find vendors linked to the entity.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.entity.counterparty.findPayees("ent_8545a84e-a45f-41bf-bdf1-33b42a55812c", {
    name: "Big Box",
    paymentMethods: true,
    invoiceMetrics: true,
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**entityId:** `Mercoa.EntityId` — Entity ID or Entity ForeignID

</dd>
</dl>

<dl>
<dd>

**request:** `Mercoa.entity.counterparty.FindPayeeCounterpartiesRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Counterparty.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.entity.counterparty.<a href="/src/api/resources/entity/resources/counterparty/client/Client.ts">findPayors</a>(entityId, { ...params }) -> Mercoa.FindCounterpartiesResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Find payor counterparties. This endpoint lets you find customers linked to the entity.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.entity.counterparty.findPayors("ent_8545a84e-a45f-41bf-bdf1-33b42a55812c", {
    name: "Big Box",
    paymentMethods: true,
    invoiceMetrics: true,
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**entityId:** `Mercoa.EntityId` — Entity ID or Entity ForeignID

</dd>
</dl>

<dl>
<dd>

**request:** `Mercoa.entity.counterparty.FindPayorCounterpartiesRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Counterparty.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.entity.counterparty.<a href="/src/api/resources/entity/resources/counterparty/client/Client.ts">addPayees</a>(entityId, { ...params }) -> void</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Create association between Entity and a given list of Payees. If a Payee has previously been archived, unarchive the Payee.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.entity.counterparty.addPayees("ent_8545a84e-a45f-41bf-bdf1-33b42a55812c", {
    payees: ["ent_21661ac1-a2a8-4465-a6c0-64474ba8181d"],
    customizations: [
        {
            counterpartyId: "ent_21661ac1-a2a8-4465-a6c0-64474ba8181d",
            accounts: [
                {
                    accountId: "85866843",
                    postalCode: "94105",
                    nameOnAccount: "John Doe",
                },
            ],
        },
    ],
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**entityId:** `Mercoa.EntityId` — Entity ID or Entity ForeignID

</dd>
</dl>

<dl>
<dd>

**request:** `Mercoa.EntityAddPayeesRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Counterparty.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.entity.counterparty.<a href="/src/api/resources/entity/resources/counterparty/client/Client.ts">hidePayees</a>(entityId, { ...params }) -> void</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Marks Payees as unsearchable by Entity via Counterparty search. Invoices associated with these Payees will still be searchable via Invoice search.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.entity.counterparty.hidePayees("ent_8545a84e-a45f-41bf-bdf1-33b42a55812c", {
    payees: ["ent_21661ac1-a2a8-4465-a6c0-64474ba8181d"],
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**entityId:** `Mercoa.EntityId` — Entity ID or Entity ForeignID

</dd>
</dl>

<dl>
<dd>

**request:** `Mercoa.EntityHidePayeesRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Counterparty.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.entity.counterparty.<a href="/src/api/resources/entity/resources/counterparty/client/Client.ts">addPayors</a>(entityId, { ...params }) -> void</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Create association between Entity and a given list of Payors. If a Payor has previously been archived, unarchive the Payor.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.entity.counterparty.addPayors("ent_8545a84e-a45f-41bf-bdf1-33b42a55812c", {
    payors: ["ent_21661ac1-a2a8-4465-a6c0-64474ba8181d"],
    customizations: [
        {
            counterpartyId: "ent_21661ac1-a2a8-4465-a6c0-64474ba8181d",
            accounts: [
                {
                    accountId: "85866843",
                    postalCode: "94105",
                    nameOnAccount: "John Doe",
                },
            ],
        },
    ],
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**entityId:** `Mercoa.EntityId` — Entity ID or Entity ForeignID

</dd>
</dl>

<dl>
<dd>

**request:** `Mercoa.EntityAddPayorsRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Counterparty.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.entity.counterparty.<a href="/src/api/resources/entity/resources/counterparty/client/Client.ts">hidePayors</a>(entityId, { ...params }) -> void</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Marks Payors as unsearchable by Entity via Counterparty search. Invoices associated with these Payors will still be searchable via Invoice search.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.entity.counterparty.hidePayors("ent_8545a84e-a45f-41bf-bdf1-33b42a55812c", {
    payors: ["ent_21661ac1-a2a8-4465-a6c0-64474ba8181d"],
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**entityId:** `Mercoa.EntityId` — Entity ID or Entity ForeignID

</dd>
</dl>

<dl>
<dd>

**request:** `Mercoa.EntityHidePayorsRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Counterparty.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

## Entity EmailLog

<details><summary><code>client.entity.emailLog.<a href="/src/api/resources/entity/resources/emailLog/client/Client.ts">find</a>(entityId, { ...params }) -> Mercoa.EmailLogResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Get all incoming invoice emails for an entity.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.entity.emailLog.find("ent_8545a84e-a45f-41bf-bdf1-33b42a55812c");
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**entityId:** `Mercoa.EntityId` — Entity ID or Entity ForeignID

</dd>
</dl>

<dl>
<dd>

**request:** `Mercoa.entity.emailLog.EntityEmailLogRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `EmailLog.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.entity.emailLog.<a href="/src/api/resources/entity/resources/emailLog/client/Client.ts">get</a>(entityId, logId) -> Mercoa.EmailLog</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Get an email log by ID

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.entity.emailLog.get(
    "ent_8545a84e-a45f-41bf-bdf1-33b42a55812c",
    "log_8545a84e-a45f-41bf-bdf1-33b42a55812c"
);
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**entityId:** `Mercoa.EntityId` — Entity ID or Entity ForeignID

</dd>
</dl>

<dl>
<dd>

**logId:** `Mercoa.EmailLogId`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `EmailLog.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

## Entity PaymentMethod

<details><summary><code>client.entity.paymentMethod.<a href="/src/api/resources/entity/resources/paymentMethod/client/Client.ts">getAll</a>(entityId, { ...params }) -> Mercoa.PaymentMethodResponse[]</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.entity.paymentMethod.getAll("ent_8545a84e-a45f-41bf-bdf1-33b42a55812c");
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**entityId:** `Mercoa.EntityId` — Entity ID or Entity ForeignID

</dd>
</dl>

<dl>
<dd>

**request:** `Mercoa.entity.paymentMethod.GetAllPaymentMethodsRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `PaymentMethod.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.entity.paymentMethod.<a href="/src/api/resources/entity/resources/paymentMethod/client/Client.ts">create</a>(entityId, { ...params }) -> Mercoa.PaymentMethodResponse</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.entity.paymentMethod.create("ent_8545a84e-a45f-41bf-bdf1-33b42a55812c", {
    type: "bankAccount",
    routingNumber: "12345678",
    accountNumber: "99988767623",
    accountType: "CHECKING",
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**entityId:** `Mercoa.EntityId` — Entity ID or Entity ForeignID

</dd>
</dl>

<dl>
<dd>

**request:** `Mercoa.PaymentMethodRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `PaymentMethod.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.entity.paymentMethod.<a href="/src/api/resources/entity/resources/paymentMethod/client/Client.ts">get</a>(entityId, paymentMethodId) -> Mercoa.PaymentMethodResponse</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.entity.paymentMethod.get(
    "ent_8545a84e-a45f-41bf-bdf1-33b42a55812c",
    "pm_4794d597-70dc-4fec-b6ec-c5988e759769"
);
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**entityId:** `Mercoa.EntityId` — Entity ID or Entity ForeignID

</dd>
</dl>

<dl>
<dd>

**paymentMethodId:** `Mercoa.PaymentMethodId` — Payment Method ID or Payment Method ForeignID

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `PaymentMethod.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.entity.paymentMethod.<a href="/src/api/resources/entity/resources/paymentMethod/client/Client.ts">update</a>(entityId, paymentMethodId, { ...params }) -> Mercoa.PaymentMethodResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Only custom payment methods can be updated.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.entity.paymentMethod.update(
    "ent_8545a84e-a45f-41bf-bdf1-33b42a55812c",
    "pm_4794d597-70dc-4fec-b6ec-c5988e759769",
    {
        type: "bankAccount",
        defaultSource: true,
        defaultDestination: true,
    }
);
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**entityId:** `Mercoa.EntityId` — Entity ID or Entity ForeignID

</dd>
</dl>

<dl>
<dd>

**paymentMethodId:** `Mercoa.PaymentMethodId` — Payment Method ID or Payment Method ForeignID

</dd>
</dl>

<dl>
<dd>

**request:** `Mercoa.PaymentMethodUpdateRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `PaymentMethod.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.entity.paymentMethod.<a href="/src/api/resources/entity/resources/paymentMethod/client/Client.ts">delete</a>(entityId, paymentMethodId) -> void</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Mark a payment method as inactive. This will not remove the payment method from the system, but will prevent it from being used in the future.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.entity.paymentMethod.delete(
    "ent_8545a84e-a45f-41bf-bdf1-33b42a55812c",
    "pm_4794d597-70dc-4fec-b6ec-c5988e759769"
);
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**entityId:** `Mercoa.EntityId` — Entity ID or Entity ForeignID

</dd>
</dl>

<dl>
<dd>

**paymentMethodId:** `Mercoa.PaymentMethodId` — Payment Method ID or Payment Method ForeignID

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `PaymentMethod.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

## Entity User

<details><summary><code>client.entity.user.<a href="/src/api/resources/entity/resources/user/client/Client.ts">getAll</a>(entityId) -> Mercoa.EntityUserResponse[]</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Get all entity users (DEPRECATED, use Search Entity Users)

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.entity.user.getAll("ent_a0f6ea94-0761-4a5e-a416-3c453cb7eced");
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**entityId:** `Mercoa.EntityId` — Entity ID or Entity ForeignID

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `User.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.entity.user.<a href="/src/api/resources/entity/resources/user/client/Client.ts">find</a>(entityId, { ...params }) -> Mercoa.FindEntityUserResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Search entity users

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.entity.user.find("ent_a0f6ea94-0761-4a5e-a416-3c453cb7eced", {
    name: "John",
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**entityId:** `Mercoa.EntityId` — Entity ID or Entity ForeignID

</dd>
</dl>

<dl>
<dd>

**request:** `Mercoa.entity.user.EntityFindEntityRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `User.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.entity.user.<a href="/src/api/resources/entity/resources/user/client/Client.ts">create</a>(entityId, { ...params }) -> Mercoa.EntityUserResponse</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.entity.user.create("ent_a0f6ea94-0761-4a5e-a416-3c453cb7eced", {
    foreignId: "MY-DB-ID-12345",
    email: "john.doe@acme.com",
    name: "John Doe",
    roles: ["admin", "approver"],
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**entityId:** `Mercoa.EntityId` — Entity ID or Entity ForeignID

</dd>
</dl>

<dl>
<dd>

**request:** `Mercoa.EntityUserRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `User.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.entity.user.<a href="/src/api/resources/entity/resources/user/client/Client.ts">get</a>(entityId, userId) -> Mercoa.EntityUserResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Get entity user

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.entity.user.get("ent_a0f6ea94-0761-4a5e-a416-3c453cb7eced", "user_ec3aafc8-ea86-408a-a6c1-545497badbbb");
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**entityId:** `Mercoa.EntityId` — Entity ID or Entity ForeignID

</dd>
</dl>

<dl>
<dd>

**userId:** `Mercoa.EntityUserId` — User ID or User ForeignID

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `User.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.entity.user.<a href="/src/api/resources/entity/resources/user/client/Client.ts">update</a>(entityId, userId, { ...params }) -> Mercoa.EntityUserResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Update entity user

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.entity.user.update(
    "ent_a0f6ea94-0761-4a5e-a416-3c453cb7eced",
    "user_ec3aafc8-ea86-408a-a6c1-545497badbbb",
    {
        foreignId: "MY-DB-ID-12345",
        email: "john.doe@acme.com",
        name: "John Doe",
        roles: ["admin", "approver"],
    }
);
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**entityId:** `Mercoa.EntityId` — Entity ID or Entity ForeignID

</dd>
</dl>

<dl>
<dd>

**userId:** `Mercoa.EntityUserId` — User ID or User ForeignID

</dd>
</dl>

<dl>
<dd>

**request:** `Mercoa.EntityUserRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `User.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.entity.user.<a href="/src/api/resources/entity/resources/user/client/Client.ts">delete</a>(entityId, userId) -> void</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Delete entity user. This will also remove the user from all approval policies. If an approval policy will break as a result of this operation, this request will fail.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.entity.user.delete("string", "string");
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**entityId:** `Mercoa.EntityId` — Entity ID or Entity ForeignID

</dd>
</dl>

<dl>
<dd>

**userId:** `Mercoa.EntityUserId` — User ID or User ForeignID

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `User.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.entity.user.<a href="/src/api/resources/entity/resources/user/client/Client.ts">getToken</a>(entityId, userId, { ...params }) -> string</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Generate a JWT token for an entity user with the given options. This token can be used to authenticate the entity and entity user in the Mercoa API and iFrame.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.entity.user.getToken(
    "ent_a0f6ea94-0761-4a5e-a416-3c453cb7eced",
    "user_a0f6ea94-0761-4a5e-a416-3c453cb7eced",
    {
        expiresIn: "1h",
    }
);
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**entityId:** `Mercoa.EntityId` — Entity ID or Entity ForeignID

</dd>
</dl>

<dl>
<dd>

**userId:** `Mercoa.EntityUserId` — User ID or User ForeignID

</dd>
</dl>

<dl>
<dd>

**request:** `Mercoa.TokenGenerationOptions`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `User.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

## InvoiceTemplate

<details><summary><code>client.invoiceTemplate.<a href="/src/api/resources/invoiceTemplate/client/Client.ts">find</a>({ ...params }) -> Mercoa.FindInvoiceTemplateResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Search invoice templates for all entities in the organization

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.invoiceTemplate.find({
    entityId: "ent_8545a84e-a45f-41bf-bdf1-33b42a55812c",
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Mercoa.invoiceTemplate.GetAllInvoiceTemplatesRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `InvoiceTemplate.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.invoiceTemplate.<a href="/src/api/resources/invoiceTemplate/client/Client.ts">create</a>({ ...params }) -> Mercoa.InvoiceTemplateResponse</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.invoiceTemplate.create({
    status: "NEW",
    amount: 100,
    currency: "USD",
    invoiceDate: "2021-01-01T00:00:00Z",
    dueDate: "2021-01-13T00:00:00Z",
    deductionDate: "2021-01-10T00:00:00Z",
    paymentSchedule: {
        type: "monthly",
        dayOffset: 10,
        offsetType: "start",
        ends: "2021-01-01T00:00:00Z",
    },
    invoiceNumber: "INV-123",
    noteToSelf: "Monthly recurring payment",
    payerId: "ent_8545a84e-a45f-41bf-bdf1-33b42a55812c",
    paymentSourceId: "pm_4794d597-70dc-4fec-b6ec-c5988e759769",
    vendorId: "ent_21661ac1-a2a8-4465-a6c0-64474ba8181d",
    paymentDestinationId: "pm_5fde2f4a-facc-48ef-8f0d-6b7d087c7b18",
    paymentDestinationOptions: {
        type: "check",
        delivery: "MAIL",
        printDescription: true,
    },
    lineItems: [
        {
            amount: 100,
            currency: "USD",
            description: "Product A",
            name: "Product A",
            quantity: 1,
            unitPrice: 100,
            category: "EXPENSE",
            serviceStartDate: "2021-01-01T00:00:00Z",
            serviceEndDate: "2021-01-31T00:00:00Z",
            metadata: {
                key1: "value1",
                key2: "value2",
            },
            glAccountId: "600394",
        },
    ],
    creatorEntityId: "ent_8545a84e-a45f-41bf-bdf1-33b42a55812c",
    creatorUserId: "user_e24fc81c-c5ee-47e8-af42-4fe29d895506",
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Mercoa.InvoiceTemplateCreationRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `InvoiceTemplate.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.invoiceTemplate.<a href="/src/api/resources/invoiceTemplate/client/Client.ts">get</a>(invoiceTemplateId) -> Mercoa.InvoiceTemplateResponse</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.invoiceTemplate.get("invt_13c07096-5848-4aeb-ae7d-6576289034c4");
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**invoiceTemplateId:** `Mercoa.InvoiceTemplateId` — Invoice Template ID

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `InvoiceTemplate.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.invoiceTemplate.<a href="/src/api/resources/invoiceTemplate/client/Client.ts">update</a>(invoiceTemplateId, { ...params }) -> Mercoa.InvoiceTemplateResponse</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.invoiceTemplate.update("invt_13c07096-5848-4aeb-ae7d-6576289034c4", {
    status: "NEW",
    amount: 100,
    currency: "USD",
    invoiceDate: "2021-01-01T00:00:00Z",
    dueDate: "2021-01-31T00:00:00Z",
    invoiceNumber: "INV-123",
    noteToSelf: "For the month of January",
    payerId: "ent_8545a84e-a45f-41bf-bdf1-33b42a55812c",
    paymentSourceId: "pm_4794d597-70dc-4fec-b6ec-c5988e759769",
    vendorId: "ent_21661ac1-a2a8-4465-a6c0-64474ba8181d",
    paymentDestinationId: "pm_5fde2f4a-facc-48ef-8f0d-6b7d087c7b18",
    paymentDestinationOptions: {
        type: "check",
        delivery: "MAIL",
        printDescription: true,
    },
    lineItems: [
        {
            id: "inli_26672f38-eb9a-48f1-a7a0-f1b855e38cd7",
            amount: 100,
            currency: "USD",
            description: "Product A",
            name: "Product A",
            quantity: 1,
            unitPrice: 100,
            category: "EXPENSE",
            serviceStartDate: "2021-01-01T00:00:00Z",
            serviceEndDate: "2021-01-31T00:00:00Z",
            metadata: {
                key1: "value1",
                key2: "value2",
            },
            glAccountId: "600394",
        },
    ],
    creatorEntityId: "ent_8545a84e-a45f-41bf-bdf1-33b42a55812c",
    creatorUserId: "user_e24fc81c-c5ee-47e8-af42-4fe29d895506",
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**invoiceTemplateId:** `Mercoa.InvoiceTemplateId` — Invoice Template ID

</dd>
</dl>

<dl>
<dd>

**request:** `Mercoa.InvoiceTemplateUpdateRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `InvoiceTemplate.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.invoiceTemplate.<a href="/src/api/resources/invoiceTemplate/client/Client.ts">delete</a>(invoiceTemplateId) -> void</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Only invoice templates in the UNASSIGNED and DRAFT statuses can be deleted.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.invoiceTemplate.delete("invt_13c07096-5848-4aeb-ae7d-6576289034c4");
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**invoiceTemplateId:** `Mercoa.InvoiceTemplateId` — Invoice Template ID

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `InvoiceTemplate.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

## InvoiceTemplate LineItem

<details><summary><code>client.invoiceTemplate.lineItem.<a href="/src/api/resources/invoiceTemplate/resources/lineItem/client/Client.ts">update</a>(invoiceTemplateId, lineItemId, { ...params }) -> Mercoa.InvoiceTemplateResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Update invoice template line item

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.invoiceTemplate.lineItem.update(
    "invt_13c07096-5848-4aeb-ae7d-6576289034c4",
    "inli_8aa84cb8-2ae7-4579-8fa3-87586e7c14a7",
    {
        name: "Product A",
        description: "Product A",
        serviceStartDate: "2021-01-01T00:00:00Z",
        serviceEndDate: "2021-01-31T00:00:00Z",
        metadata: {
            key1: "value1",
            key2: "value2",
        },
        glAccountId: "600394",
    }
);
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**invoiceTemplateId:** `Mercoa.InvoiceTemplateId` — Invoice Template ID

</dd>
</dl>

<dl>
<dd>

**lineItemId:** `Mercoa.InvoiceLineItemId` — Invoice Line Item ID

</dd>
</dl>

<dl>
<dd>

**request:** `Mercoa.InvoiceLineItemIndividualUpdateRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `LineItem.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

## Invoice

<details><summary><code>client.invoice.<a href="/src/api/resources/invoice/client/Client.ts">find</a>({ ...params }) -> Mercoa.FindInvoiceResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Search invoices for all entities in the organization

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.invoice.find({
    entityId: "ent_8545a84e-a45f-41bf-bdf1-33b42a55812c",
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Mercoa.invoice.GetAllInvoicesRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Invoice.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.invoice.<a href="/src/api/resources/invoice/client/Client.ts">create</a>({ ...params }) -> Mercoa.InvoiceResponse</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.invoice.create({
    status: "NEW",
    amount: 100,
    currency: "USD",
    invoiceDate: "2021-01-01T00:00:00Z",
    dueDate: "2021-01-31T00:00:00Z",
    invoiceNumber: "INV-123",
    noteToSelf: "For the month of January",
    payerId: "ent_8545a84e-a45f-41bf-bdf1-33b42a55812c",
    paymentSourceId: "pm_4794d597-70dc-4fec-b6ec-c5988e759769",
    vendorId: "ent_21661ac1-a2a8-4465-a6c0-64474ba8181d",
    paymentDestinationId: "pm_5fde2f4a-facc-48ef-8f0d-6b7d087c7b18",
    paymentDestinationOptions: {
        type: "check",
        delivery: "MAIL",
        printDescription: true,
    },
    lineItems: [
        {
            amount: 100,
            currency: "USD",
            description: "Product A",
            name: "Product A",
            quantity: 1,
            unitPrice: 100,
            category: "EXPENSE",
            serviceStartDate: "2021-01-01T00:00:00Z",
            serviceEndDate: "2021-01-31T00:00:00Z",
            metadata: {
                key1: "value1",
                key2: "value2",
            },
            glAccountId: "600394",
        },
    ],
    creatorEntityId: "ent_8545a84e-a45f-41bf-bdf1-33b42a55812c",
    creatorUserId: "user_e24fc81c-c5ee-47e8-af42-4fe29d895506",
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Mercoa.InvoiceCreationRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Invoice.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.invoice.<a href="/src/api/resources/invoice/client/Client.ts">get</a>(invoiceId) -> Mercoa.InvoiceResponse</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.invoice.get("in_8545a84e-a45f-41bf-bdf1-33b42a55812c");
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**invoiceId:** `Mercoa.InvoiceId` — Invoice ID or Invoice ForeignID

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Invoice.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.invoice.<a href="/src/api/resources/invoice/client/Client.ts">update</a>(invoiceId, { ...params }) -> Mercoa.InvoiceResponse</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.invoice.update("in_26e7b5d3-a739-4b23-9ad9-6aaa085f47a9", {
    status: "NEW",
    amount: 100,
    currency: "USD",
    invoiceDate: "2021-01-01T00:00:00Z",
    dueDate: "2021-01-31T00:00:00Z",
    invoiceNumber: "INV-123",
    noteToSelf: "For the month of January",
    payerId: "ent_8545a84e-a45f-41bf-bdf1-33b42a55812c",
    paymentSourceId: "pm_4794d597-70dc-4fec-b6ec-c5988e759769",
    vendorId: "ent_21661ac1-a2a8-4465-a6c0-64474ba8181d",
    paymentDestinationId: "pm_5fde2f4a-facc-48ef-8f0d-6b7d087c7b18",
    paymentDestinationOptions: {
        type: "check",
        delivery: "MAIL",
        printDescription: true,
    },
    lineItems: [
        {
            id: "inli_26672f38-eb9a-48f1-a7a0-f1b855e38cd7",
            amount: 100,
            currency: "USD",
            description: "Product A",
            name: "Product A",
            quantity: 1,
            unitPrice: 100,
            category: "EXPENSE",
            serviceStartDate: "2021-01-01T00:00:00Z",
            serviceEndDate: "2021-01-31T00:00:00Z",
            metadata: {
                key1: "value1",
                key2: "value2",
            },
            glAccountId: "600394",
        },
    ],
    creatorEntityId: "ent_8545a84e-a45f-41bf-bdf1-33b42a55812c",
    creatorUserId: "user_e24fc81c-c5ee-47e8-af42-4fe29d895506",
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**invoiceId:** `Mercoa.InvoiceId` — Invoice ID or Invoice ForeignID

</dd>
</dl>

<dl>
<dd>

**request:** `Mercoa.InvoiceUpdateRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Invoice.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.invoice.<a href="/src/api/resources/invoice/client/Client.ts">delete</a>(invoiceId) -> void</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Only invoices in the UNASSIGNED and DRAFT statuses can be deleted.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.invoice.delete("in_8545a84e-a45f-41bf-bdf1-33b42a55812c");
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**invoiceId:** `Mercoa.InvoiceId` — Invoice ID or Invoice ForeignID

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Invoice.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.invoice.<a href="/src/api/resources/invoice/client/Client.ts">events</a>(invoiceId, { ...params }) -> Mercoa.InvoiceEventsResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Get all events for an invoice

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.invoice.events("in_8545a84e-a45f-41bf-bdf1-33b42a55812c");
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**invoiceId:** `Mercoa.InvoiceId` — Invoice ID or Invoice ForeignID

</dd>
</dl>

<dl>
<dd>

**request:** `Mercoa.invoice.InvoiceInvoiceGetEventsRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Invoice.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

## Invoice LineItem

<details><summary><code>client.invoice.lineItem.<a href="/src/api/resources/invoice/resources/lineItem/client/Client.ts">update</a>(invoiceId, lineItemId, { ...params }) -> Mercoa.InvoiceResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Update invoice line item

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.invoice.lineItem.update(
    "in_d8f68285-1c6d-4d5a-a9e3-252c3180fac4",
    "inli_8aa84cb8-2ae7-4579-8fa3-87586e7c14a7",
    {
        name: "Product A",
        description: "Product A",
        serviceStartDate: "2021-01-01T00:00:00Z",
        serviceEndDate: "2021-01-31T00:00:00Z",
        metadata: {
            key1: "value1",
            key2: "value2",
        },
        glAccountId: "600394",
    }
);
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**invoiceId:** `Mercoa.InvoiceId` — Invoice ID

</dd>
</dl>

<dl>
<dd>

**lineItemId:** `Mercoa.InvoiceLineItemId` — Invoice Line Item ID

</dd>
</dl>

<dl>
<dd>

**request:** `Mercoa.InvoiceLineItemIndividualUpdateRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `LineItem.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

## Organization

<details><summary><code>client.organization.<a href="/src/api/resources/organization/client/Client.ts">get</a>({ ...params }) -> Mercoa.OrganizationResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Get current organization information

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.organization.get({
    paymentMethods: true,
    emailProvider: true,
    externalAccountingSystemProvider: true,
    colorScheme: true,
    payeeOnboardingOptions: true,
    payorOnboardingOptions: true,
    metadataSchema: true,
    notificationEmailTemplate: true,
    customDomains: true,
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Mercoa.organization.GetOrganizationRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Organization.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.organization.<a href="/src/api/resources/organization/client/Client.ts">update</a>({ ...params }) -> Mercoa.OrganizationResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Update current organization

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.organization.update({
    name: "string",
    logo: "string",
    websiteUrl: "string",
    supportEmail: "string",
    paymentMethods: {
        payerPayments: [
            {
                type: "custom",
                active: true,
            },
        ],
        backupDisbursements: [
            {
                type: "custom",
                active: true,
            },
        ],
        vendorDisbursements: [
            {
                type: "custom",
                active: true,
            },
        ],
    },
    emailProvider: {
        sender: {
            provider: "none",
            fromEmail: "string",
            fromName: "string",
            apiKey: "string",
        },
        inboxDomain: "string",
        alternativeInboxDomains: [],
    },
    externalAccountingSystemProvider: {
        type: "none",
    },
    colorScheme: {
        primaryColor: "string",
        secondaryColor: "string",
        logoBackgroundColor: "string",
        roundedCorners: 1,
    },
    payeeOnboardingOptions: {
        enableBusiness: true,
        enableIndividual: true,
        paymentMethod: true,
        business: {
            type: {
                show: true,
                edit: true,
                required: true,
            },
            doingBusinessAs: {
                show: true,
                edit: true,
                required: true,
            },
            ein: {
                show: true,
                edit: true,
                required: true,
            },
            mcc: {
                show: true,
                edit: true,
                required: true,
            },
            formationDate: {
                show: true,
                edit: true,
                required: true,
            },
            website: {
                show: true,
                edit: true,
                required: true,
            },
            description: {
                show: true,
                edit: true,
                required: true,
            },
            representatives: {
                show: true,
                edit: true,
                required: true,
            },
            logo: {
                show: true,
                edit: true,
                required: true,
            },
            averageTransactionSize: {
                show: true,
                edit: true,
                required: true,
            },
            averageMonthlyTransactionVolume: {
                show: true,
                edit: true,
                required: true,
            },
            maxTransactionSize: {
                show: true,
                edit: true,
                required: true,
            },
            termsOfService: {
                show: true,
                edit: true,
                required: true,
            },
            email: {
                show: true,
                edit: true,
                required: true,
            },
            name: {
                show: true,
                edit: true,
                required: true,
            },
            address: {
                show: true,
                edit: true,
                required: true,
            },
            phone: {
                show: true,
                edit: true,
                required: true,
            },
            tenNinetyNine: {
                show: true,
                edit: true,
                required: true,
            },
            w9: {
                show: true,
                edit: true,
                required: true,
            },
            bankStatement: {
                show: true,
                edit: true,
                required: true,
            },
        },
        individual: {
            dateOfBirth: {
                show: true,
                edit: true,
                required: true,
            },
            ssn: {
                show: true,
                edit: true,
                required: true,
            },
            termsOfService: {
                show: true,
                edit: true,
                required: true,
            },
            email: {
                show: true,
                edit: true,
                required: true,
            },
            name: {
                show: true,
                edit: true,
                required: true,
            },
            address: {
                show: true,
                edit: true,
                required: true,
            },
            phone: {
                show: true,
                edit: true,
                required: true,
            },
            tenNinetyNine: {
                show: true,
                edit: true,
                required: true,
            },
            w9: {
                show: true,
                edit: true,
                required: true,
            },
            bankStatement: {
                show: true,
                edit: true,
                required: true,
            },
        },
    },
    payorOnboardingOptions: {
        enableBusiness: true,
        enableIndividual: true,
        paymentMethod: true,
        business: {
            type: {
                show: true,
                edit: true,
                required: true,
            },
            doingBusinessAs: {
                show: true,
                edit: true,
                required: true,
            },
            ein: {
                show: true,
                edit: true,
                required: true,
            },
            mcc: {
                show: true,
                edit: true,
                required: true,
            },
            formationDate: {
                show: true,
                edit: true,
                required: true,
            },
            website: {
                show: true,
                edit: true,
                required: true,
            },
            description: {
                show: true,
                edit: true,
                required: true,
            },
            representatives: {
                show: true,
                edit: true,
                required: true,
            },
            logo: {
                show: true,
                edit: true,
                required: true,
            },
            averageTransactionSize: {
                show: true,
                edit: true,
                required: true,
            },
            averageMonthlyTransactionVolume: {
                show: true,
                edit: true,
                required: true,
            },
            maxTransactionSize: {
                show: true,
                edit: true,
                required: true,
            },
            termsOfService: {
                show: true,
                edit: true,
                required: true,
            },
            email: {
                show: true,
                edit: true,
                required: true,
            },
            name: {
                show: true,
                edit: true,
                required: true,
            },
            address: {
                show: true,
                edit: true,
                required: true,
            },
            phone: {
                show: true,
                edit: true,
                required: true,
            },
            tenNinetyNine: {
                show: true,
                edit: true,
                required: true,
            },
            w9: {
                show: true,
                edit: true,
                required: true,
            },
            bankStatement: {
                show: true,
                edit: true,
                required: true,
            },
        },
        individual: {
            dateOfBirth: {
                show: true,
                edit: true,
                required: true,
            },
            ssn: {
                show: true,
                edit: true,
                required: true,
            },
            termsOfService: {
                show: true,
                edit: true,
                required: true,
            },
            email: {
                show: true,
                edit: true,
                required: true,
            },
            name: {
                show: true,
                edit: true,
                required: true,
            },
            address: {
                show: true,
                edit: true,
                required: true,
            },
            phone: {
                show: true,
                edit: true,
                required: true,
            },
            tenNinetyNine: {
                show: true,
                edit: true,
                required: true,
            },
            w9: {
                show: true,
                edit: true,
                required: true,
            },
            bankStatement: {
                show: true,
                edit: true,
                required: true,
            },
        },
    },
    metadataSchema: [
        {
            key: "string",
            displayName: "string",
            type: "STRING",
        },
    ],
    notificationEmailTemplate: {
        backgroundStyle: "string",
        header: "string",
        body: "string",
        signature: "string",
        footer: "string",
        button: "string",
    },
    customDomains: ["string"],
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Mercoa.OrganizationRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Organization.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.organization.<a href="/src/api/resources/organization/client/Client.ts">emailLog</a>({ ...params }) -> Mercoa.EmailLogResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Get log of all emails sent to this organization. Content format subject to change.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.organization.emailLog({
    startDate: "2024-01-15T09:30:00Z",
    endDate: "2024-01-15T09:30:00Z",
    limit: 1,
    startingAfter: "string",
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Mercoa.organization.GetEmailLogRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Organization.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

## BankLookup

<details><summary><code>client.bankLookup.<a href="/src/api/resources/bankLookup/client/Client.ts">find</a>({ ...params }) -> Mercoa.BankLookupResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Find bank account details

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.bankLookup.find({
    routingNumber: "026009593",
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Mercoa.BankLookupRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `BankLookup.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

## Calculate

<details><summary><code>client.calculate.<a href="/src/api/resources/calculate/client/Client.ts">fee</a>({ ...params }) -> Mercoa.InvoiceFeesResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Calculate the estimated fees associated with an payment given the amount, payment source, and disbursement method. Can be used to calculate fees for a payment before creating an invoice.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.calculate.fee({
    amount: 100,
    paymentSourceId: "pm_4794d597-70dc-4fec-b6ec-c5988e759769",
    paymentDestinationId: "pm_4794d597-70dc-4fec-b6ec-c5988e759769",
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Mercoa.CalculateFeesRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Calculate.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.calculate.<a href="/src/api/resources/calculate/client/Client.ts">paymentTiming</a>({ ...params }) -> Mercoa.CalculatePaymentTimingResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Calculate the estimated payment timing given the deduction date, payment source, and disbursement method. Can be used to calculate timing for a payment.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.calculate.paymentTiming({
    estimatedDeductionDate: "2024-01-02T00:00:00Z",
    paymentSourceId: "pm_4794d597-70dc-4fec-b6ec-c5988e759769",
    paymentDestinationId: "pm_4794d597-70dc-4fec-b6ec-c5988e759769",
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Mercoa.CalculatePaymentTimingRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Calculate.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

## CustomPaymentMethodSchema

<details><summary><code>client.customPaymentMethodSchema.<a href="/src/api/resources/customPaymentMethodSchema/client/Client.ts">getAll</a>() -> Mercoa.CustomPaymentMethodSchemaResponse[]</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Get all custom payment method schemas

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.customPaymentMethodSchema.getAll();
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**requestOptions:** `CustomPaymentMethodSchema.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.customPaymentMethodSchema.<a href="/src/api/resources/customPaymentMethodSchema/client/Client.ts">create</a>({ ...params }) -> Mercoa.CustomPaymentMethodSchemaResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Create custom payment method schema

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.customPaymentMethodSchema.create({
    name: "Wire",
    isSource: false,
    isDestination: true,
    supportedCurrencies: ["USD", "EUR"],
    fields: [
        {
            name: "bankName",
            displayName: "Bank Name",
            type: "text",
            optional: false,
        },
        {
            name: "recipientName",
            displayName: "Recipient Name",
            type: "text",
            optional: false,
        },
        {
            name: "accountNumber",
            displayName: "Account Number",
            type: "usBankAccountNumber",
            optional: false,
            useAsAccountNumber: true,
        },
        {
            name: "routingNumber",
            displayName: "Routing Number",
            type: "usBankRoutingNumber",
            optional: false,
        },
    ],
    estimatedProcessingTime: 0,
    maxAmount: 100000,
    minAmount: 1,
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Mercoa.CustomPaymentMethodSchemaRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `CustomPaymentMethodSchema.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.customPaymentMethodSchema.<a href="/src/api/resources/customPaymentMethodSchema/client/Client.ts">update</a>(schemaId, { ...params }) -> Mercoa.CustomPaymentMethodSchemaResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Update custom payment method schema

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.customPaymentMethodSchema.update("cpms_14f78dcd-4614-426e-a37a-7af262431d41", {
    name: "Check",
    isSource: false,
    isDestination: true,
    supportedCurrencies: ["USD"],
    fields: [
        {
            name: "payToTheOrderOf",
            displayName: "Pay To The Order Of",
            type: "text",
            optional: false,
        },
        {
            name: "accountNumber",
            displayName: "Account Number",
            type: "usBankAccountNumber",
            optional: false,
            useAsAccountNumber: true,
        },
        {
            name: "routingNumber",
            displayName: "Routing Number",
            type: "usBankRoutingNumber",
            optional: false,
        },
        {
            name: "address",
            displayName: "Address",
            type: "address",
            optional: false,
        },
    ],
    estimatedProcessingTime: 7,
    maxAmount: 50000,
    minAmount: 1,
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**schemaId:** `Mercoa.CustomPaymentMethodSchemaId`

</dd>
</dl>

<dl>
<dd>

**request:** `Mercoa.CustomPaymentMethodSchemaRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `CustomPaymentMethodSchema.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.customPaymentMethodSchema.<a href="/src/api/resources/customPaymentMethodSchema/client/Client.ts">get</a>(schemaId) -> Mercoa.CustomPaymentMethodSchemaResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Get custom payment method schema

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.customPaymentMethodSchema.get("cpms_14f78dcd-4614-426e-a37a-7af262431d41");
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**schemaId:** `Mercoa.CustomPaymentMethodSchemaId`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `CustomPaymentMethodSchema.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.customPaymentMethodSchema.<a href="/src/api/resources/customPaymentMethodSchema/client/Client.ts">delete</a>(schemaId) -> void</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Delete custom payment method schema. Schema that have been used in an invoice cannot be deleted.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.customPaymentMethodSchema.delete("cpms_14f78dcd-4614-426e-a37a-7af262431d41");
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**schemaId:** `Mercoa.CustomPaymentMethodSchemaId`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `CustomPaymentMethodSchema.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

## EntityGroup Invoice

<details><summary><code>client.entityGroup.invoice.<a href="/src/api/resources/entityGroup/resources/invoice/client/Client.ts">find</a>(entityGroupId, { ...params }) -> Mercoa.FindInvoiceResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Get invoices for an entity group with the given filters.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.entityGroup.invoice.find("entg_8545a84e-a45f-41bf-bdf1-33b42a55812c", {
    excludeReceivables: true,
    orderBy: "CREATED_AT",
    orderDirection: "ASC",
    limit: 10,
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**entityGroupId:** `Mercoa.EntityGroupId` — Entity Group ID or Entity Group ForeignID

</dd>
</dl>

<dl>
<dd>

**request:** `Mercoa.entityGroup.EntityGetInvoicesRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Invoice.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.entityGroup.invoice.<a href="/src/api/resources/entityGroup/resources/invoice/client/Client.ts">metrics</a>(entityGroupId, { ...params }) -> Mercoa.InvoiceMetricsResponse[]</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Get invoice metrics for an entity group with the given filters. Invoices will be grouped by currency. If none of excludePayables, excludeReceivables, payerId, vendorId, or invoiceId status filters are provided, excludeReceivables will be set to true.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.entityGroup.invoice.metrics("entg_8545a84e-a45f-41bf-bdf1-33b42a55812c", {
    returnByDate: "CREATION_DATE",
    excludeReceivables: true,
    startDate: "2021-01-01T00:00:00.000Z",
    endDate: "2021-01-31T23:59:59.999Z",
    currency: "USD",
    status: "NEW",
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**entityGroupId:** `Mercoa.EntityGroupId` — Entity Group ID or Entity Group ForeignID

</dd>
</dl>

<dl>
<dd>

**request:** `Mercoa.entityGroup.GroupInvoiceMetricsRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Invoice.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

## Entity ApprovalPolicy

<details><summary><code>client.entity.approvalPolicy.<a href="/src/api/resources/entity/resources/approvalPolicy/client/Client.ts">getAll</a>(entityId) -> Mercoa.ApprovalPolicyResponse[]</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Retrieve all invoice approval policies associated with an entity

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.entity.approvalPolicy.getAll("ent_8545a84e-a45f-41bf-bdf1-33b42a55812c");
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**entityId:** `Mercoa.EntityId` — Entity ID or Entity ForeignID

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ApprovalPolicy.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.entity.approvalPolicy.<a href="/src/api/resources/entity/resources/approvalPolicy/client/Client.ts">create</a>(entityId, { ...params }) -> Mercoa.ApprovalPolicyResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Create an invoice approval policy associated with an entity

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.entity.approvalPolicy.create("ent_8545a84e-a45f-41bf-bdf1-33b42a55812c", {
    trigger: [
        {
            type: "amount",
            amount: 100,
            currency: "USD",
        },
    ],
    rule: {
        type: "approver",
        numApprovers: 2,
        identifierList: {
            type: "rolesList",
            value: ["Admin", "Controller"],
        },
    },
    upstreamPolicyId: "root",
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**entityId:** `Mercoa.EntityId` — Entity ID or Entity ForeignID

</dd>
</dl>

<dl>
<dd>

**request:** `Mercoa.ApprovalPolicyRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ApprovalPolicy.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.entity.approvalPolicy.<a href="/src/api/resources/entity/resources/approvalPolicy/client/Client.ts">get</a>(entityId, policyId) -> Mercoa.ApprovalPolicyResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Retrieve an invoice approval policy associated with an entity

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.entity.approvalPolicy.get(
    "ent_8545a84e-a45f-41bf-bdf1-33b42a55812c",
    "apvl_5ce50275-1789-42ea-bc60-bb7e6d03635c"
);
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**entityId:** `Mercoa.EntityId` — Entity ID or Entity ForeignID

</dd>
</dl>

<dl>
<dd>

**policyId:** `Mercoa.ApprovalPolicyId`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ApprovalPolicy.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.entity.approvalPolicy.<a href="/src/api/resources/entity/resources/approvalPolicy/client/Client.ts">update</a>(entityId, policyId, { ...params }) -> Mercoa.ApprovalPolicyResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Update an invoice approval policy associated with an entity

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.entity.approvalPolicy.update(
    "ent_8545a84e-a45f-41bf-bdf1-33b42a55812c",
    "apvl_5ce50275-1789-42ea-bc60-bb7e6d03635c",
    {
        trigger: [
            {
                type: "amount",
                amount: 100,
                currency: "USD",
            },
        ],
        rule: {
            type: "approver",
            numApprovers: 2,
            identifierList: {
                type: "rolesList",
                value: ["Admin", "Controller"],
            },
        },
        upstreamPolicyId: "root",
    }
);
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**entityId:** `Mercoa.EntityId` — Entity ID or Entity ForeignID

</dd>
</dl>

<dl>
<dd>

**policyId:** `Mercoa.ApprovalPolicyId`

</dd>
</dl>

<dl>
<dd>

**request:** `Mercoa.ApprovalPolicyUpdateRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ApprovalPolicy.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.entity.approvalPolicy.<a href="/src/api/resources/entity/resources/approvalPolicy/client/Client.ts">delete</a>(entityId, policyId) -> void</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Delete an invoice approval policy associated with Entity. BEWARE: Any approval policy deletion will result in all associated downstream policies also being deleted.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.entity.approvalPolicy.delete(
    "ent_8545a84e-a45f-41bf-bdf1-33b42a55812c",
    "apvl_5ce50275-1789-42ea-bc60-bb7e6d03635c"
);
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**entityId:** `Mercoa.EntityId` — Entity ID or Entity ForeignID

</dd>
</dl>

<dl>
<dd>

**policyId:** `Mercoa.ApprovalPolicyId`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ApprovalPolicy.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

## Entity Counterparty VendorCredit

<details><summary><code>client.entity.counterparty.vendorCredit.<a href="/src/api/resources/entity/resources/counterparty/resources/vendorCredit/client/Client.ts">getAll</a>(entityId, counterpartyId) -> Mercoa.FindVendorCreditResponse</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.entity.counterparty.vendorCredit.getAll(
    "ent_8545a84e-a45f-41bf-bdf1-33b42a55812c",
    "ent_21661ac1-a2a8-4465-a6c0-64474ba8181d"
);
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**entityId:** `Mercoa.EntityId` — Entity ID or Entity ForeignID

</dd>
</dl>

<dl>
<dd>

**counterpartyId:** `Mercoa.EntityId` — Counterparty Entity ID or Counterparty Entity ForeignID

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `VendorCredit.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.entity.counterparty.vendorCredit.<a href="/src/api/resources/entity/resources/counterparty/resources/vendorCredit/client/Client.ts">get</a>(entityId, counterpartyId, vendorCreditId) -> Mercoa.VendorCreditResponse</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.entity.counterparty.vendorCredit.get(
    "ent_8545a84e-a45f-41bf-bdf1-33b42a55812c",
    "ent_21661ac1-a2a8-4465-a6c0-64474ba8181d",
    "vcr_c3f4c87d-794d-4543-9562-575cdddfc0d7"
);
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**entityId:** `Mercoa.EntityId` — Entity ID or Entity ForeignID

</dd>
</dl>

<dl>
<dd>

**counterpartyId:** `Mercoa.EntityId` — Counterparty Entity ID or Counterparty Entity ForeignID

</dd>
</dl>

<dl>
<dd>

**vendorCreditId:** `Mercoa.VendorCreditId` — ID of the vendor credit to retrieve

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `VendorCredit.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.entity.counterparty.vendorCredit.<a href="/src/api/resources/entity/resources/counterparty/resources/vendorCredit/client/Client.ts">create</a>(entityId, counterpartyId, { ...params }) -> Mercoa.VendorCreditResponse</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.entity.counterparty.vendorCredit.create(
    "ent_8545a84e-a45f-41bf-bdf1-33b42a55812c",
    "ent_21661ac1-a2a8-4465-a6c0-64474ba8181d",
    {
        totalAmount: 100,
        currency: "USD",
        note: "This is a note",
    }
);
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**entityId:** `Mercoa.EntityId` — Entity ID or Entity ForeignID

</dd>
</dl>

<dl>
<dd>

**counterpartyId:** `Mercoa.EntityId` — Counterparty Entity ID or Counterparty Entity ForeignID

</dd>
</dl>

<dl>
<dd>

**request:** `Mercoa.VendorCreditRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `VendorCredit.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.entity.counterparty.vendorCredit.<a href="/src/api/resources/entity/resources/counterparty/resources/vendorCredit/client/Client.ts">delete</a>(entityId, counterpartyId, vendorCreditId) -> void</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.entity.counterparty.vendorCredit.delete(
    "ent_8545a84e-a45f-41bf-bdf1-33b42a55812c",
    "ent_21661ac1-a2a8-4465-a6c0-64474ba8181d",
    "vcr_c3f4c87d-794d-4543-9562-575cdddfc0d7"
);
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**entityId:** `Mercoa.EntityId` — Entity ID or Entity ForeignID

</dd>
</dl>

<dl>
<dd>

**counterpartyId:** `Mercoa.EntityId` — Counterparty Entity ID or Counterparty Entity ForeignID

</dd>
</dl>

<dl>
<dd>

**vendorCreditId:** `Mercoa.VendorCreditId` — ID of the vendor credit to delete

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `VendorCredit.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.entity.counterparty.vendorCredit.<a href="/src/api/resources/entity/resources/counterparty/resources/vendorCredit/client/Client.ts">estimateUsage</a>(entityId, counterpartyId, { ...params }) -> Mercoa.CalculateVendorCreditUsageResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Estimate the usage of vendor credits on an invoice of a given amount

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.entity.counterparty.vendorCredit.estimateUsage(
    "ent_8545a84e-a45f-41bf-bdf1-33b42a55812c",
    "ent_21661ac1-a2a8-4465-a6c0-64474ba8181d",
    {
        amount: 150,
        currency: "USD",
    }
);
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**entityId:** `Mercoa.EntityId` — Entity ID or Entity ForeignID

</dd>
</dl>

<dl>
<dd>

**counterpartyId:** `Mercoa.EntityId` — Counterparty Entity ID or Counterparty Entity ForeignID

</dd>
</dl>

<dl>
<dd>

**request:** `Mercoa.entity.counterparty.CalculateVendorCreditUsageRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `VendorCredit.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

## Entity Customization

<details><summary><code>client.entity.customization.<a href="/src/api/resources/entity/resources/customization/client/Client.ts">get</a>(entityId) -> Mercoa.EntityCustomizationResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Get entity customization.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.entity.customization.get("ent_a0f6ea94-0761-4a5e-a416-3c453cb7eced");
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**entityId:** `Mercoa.EntityId` — Entity ID or Entity ForeignID

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Customization.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.entity.customization.<a href="/src/api/resources/entity/resources/customization/client/Client.ts">update</a>(entityId, { ...params }) -> Mercoa.EntityCustomizationResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Update entity customization. This lets you turn off metadata and payment methods for an entity.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.entity.customization.update("ent_a0f6ea94-0761-4a5e-a416-3c453cb7eced", {
    metadata: [
        {
            key: "my_custom_field",
            disabled: true,
        },
        {
            key: "my_other_field",
            disabled: false,
        },
    ],
    paymentSource: [
        {
            type: "bankAccount",
            disabled: true,
        },
        {
            type: "custom",
            schemaId: "cpms_7df2974a-4069-454c-912f-7e58ebe030fb",
            disabled: true,
        },
    ],
    backupDisbursement: [
        {
            type: "check",
            disabled: true,
        },
    ],
    paymentDestination: [
        {
            type: "bankAccount",
            disabled: true,
        },
        {
            type: "check",
            disabled: true,
        },
    ],
    ocr: {
        lineItems: true,
        invoiceMetadata: true,
        lineItemMetadata: true,
        lineItemGlAccountId: true,
        predictMetadata: true,
    },
    notifications: {
        assumeRole: "admin",
    },
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**entityId:** `Mercoa.EntityId` — Entity ID or Entity ForeignID

</dd>
</dl>

<dl>
<dd>

**request:** `Mercoa.EntityCustomizationRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Customization.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

## Entity Document

<details><summary><code>client.entity.document.<a href="/src/api/resources/entity/resources/document/client/Client.ts">getAll</a>(entityId, { ...params }) -> Mercoa.DocumentResponse[]</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Get documents (1099/W9) associated with this entity

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.entity.document.getAll("ent_26e7b5d3-a739-4b23-9ad9-6aaa085f47a9");
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**entityId:** `Mercoa.EntityId`

</dd>
</dl>

<dl>
<dd>

**request:** `Mercoa.entity.GetDocumentsRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Document.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.entity.document.<a href="/src/api/resources/entity/resources/document/client/Client.ts">upload</a>(entityId, { ...params }) -> void</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Upload documents associated with this entity

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.entity.document.upload("ent_26e7b5d3-a739-4b23-9ad9-6aaa085f47a9", {
    document:
        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAIAQMAAAD+wSzIAAAABlBMVEX///+/v7+jQ3Y5AAAADklEQVQI12P4AIX8EAgALgAD/aNpbtEAAAAASUVORK5CYII",
    type: "TEN_NINETY_NINE",
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**entityId:** `Mercoa.EntityId`

</dd>
</dl>

<dl>
<dd>

**request:** `Mercoa.entity.UploadDocumentRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Document.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.entity.document.<a href="/src/api/resources/entity/resources/document/client/Client.ts">delete</a>(entityId, documentId) -> void</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Delete a document associated with this entity

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.entity.document.delete(
    "ent_26e7b5d3-a739-4b23-9ad9-6aaa085f47a9",
    "doc_37e6af0a-e637-48fd-b825-d6947b38c4e2"
);
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**entityId:** `Mercoa.EntityId`

</dd>
</dl>

<dl>
<dd>

**documentId:** `string`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Document.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

## Entity EmailTemplate

<details><summary><code>client.entity.emailTemplate.<a href="/src/api/resources/entity/resources/emailTemplate/client/Client.ts">getAll</a>(entityId) -> Mercoa.EmailTemplateResponse[]</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Get all email templates for the entity

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.entity.emailTemplate.getAll("ent_a0f6ea94-0761-4a5e-a416-3c453cb7eced");
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**entityId:** `Mercoa.EntityId` — Entity ID or Entity ForeignID

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `EmailTemplate.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.entity.emailTemplate.<a href="/src/api/resources/entity/resources/emailTemplate/client/Client.ts">create</a>(entityId, { ...params }) -> Mercoa.EmailTemplateResponse</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.entity.emailTemplate.create("ent_a0f6ea94-0761-4a5e-a416-3c453cb7eced", {
    templateType: "PAYMENT",
    name: "Generic Payment Email",
    subject: "Action Required - Your payment is due",
    content: "<h1>Your invoice has been sent.</h1>",
    isDefault: true,
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**entityId:** `Mercoa.EntityId` — Entity ID or Entity ForeignID

</dd>
</dl>

<dl>
<dd>

**request:** `Mercoa.EmailTemplateRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `EmailTemplate.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.entity.emailTemplate.<a href="/src/api/resources/entity/resources/emailTemplate/client/Client.ts">get</a>(entityId, emailTemplateId) -> Mercoa.EmailTemplateResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Get entity email template

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.entity.emailTemplate.get(
    "ent_a0f6ea94-0761-4a5e-a416-3c453cb7eced",
    "emt_8545a84e-a45f-41bf-bdf1-33b42a55812c"
);
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**entityId:** `Mercoa.EntityId` — Entity ID or Entity ForeignID

</dd>
</dl>

<dl>
<dd>

**emailTemplateId:** `Mercoa.EmailTemplateId` — Email Template ID or Email Template ForeignID

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `EmailTemplate.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.entity.emailTemplate.<a href="/src/api/resources/entity/resources/emailTemplate/client/Client.ts">update</a>(entityId, emailTemplateId, { ...params }) -> Mercoa.EmailTemplateResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Update entity email template

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.entity.emailTemplate.update(
    "ent_a0f6ea94-0761-4a5e-a416-3c453cb7eced",
    "emt_8545a84e-a45f-41bf-bdf1-33b42a55812c",
    {
        templateType: "PAYMENT",
        name: "Generic Payment Email",
        subject: "Action Required - Your payment is due",
        content: "<h1>Your invoice has been sent.</h1>",
        isDefault: true,
    }
);
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**entityId:** `Mercoa.EntityId` — Entity ID or Entity ForeignID

</dd>
</dl>

<dl>
<dd>

**emailTemplateId:** `Mercoa.EmailTemplateId` — Email Template ID or Email Template ForeignID

</dd>
</dl>

<dl>
<dd>

**request:** `Mercoa.EmailTemplateRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `EmailTemplate.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.entity.emailTemplate.<a href="/src/api/resources/entity/resources/emailTemplate/client/Client.ts">delete</a>(entityId, emailTemplateId) -> void</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Delete entity email template. This will also remove the email template from all entities.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.entity.emailTemplate.delete("string", "string");
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**entityId:** `Mercoa.EntityId` — Entity ID or Entity ForeignID

</dd>
</dl>

<dl>
<dd>

**emailTemplateId:** `Mercoa.EmailTemplateId` — Email Template ID or Email Template ForeignID

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `EmailTemplate.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

## Entity ExternalAccountingSystem

<details><summary><code>client.entity.externalAccountingSystem.<a href="/src/api/resources/entity/resources/externalAccountingSystem/client/Client.ts">get</a>(entityId) -> Mercoa.ExternalAccountingSystemCompanyResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Get the external accounting system connected to an entity

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.entity.externalAccountingSystem.get("ent_8545a84e-a45f-41bf-bdf1-33b42a55812c");
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**entityId:** `Mercoa.EntityId` — Entity ID or Entity ForeignID

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ExternalAccountingSystem.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.entity.externalAccountingSystem.<a href="/src/api/resources/entity/resources/externalAccountingSystem/client/Client.ts">create</a>(entityId, { ...params }) -> Mercoa.ExternalAccountingSystemCompanyResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Create/Link an entity to an external accounting system like Codat or Rutter. If the entity is already linked to an external accounting system, this will return the existing connection.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.entity.externalAccountingSystem.create("ent_8545a84e-a45f-41bf-bdf1-33b42a55812c", {
    type: "rutter",
    accessToken: "123",
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**entityId:** `Mercoa.EntityId` — Entity ID or Entity ForeignID

</dd>
</dl>

<dl>
<dd>

**request:** `Mercoa.ExternalAccountingSystemCompanyCreationRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ExternalAccountingSystem.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.entity.externalAccountingSystem.<a href="/src/api/resources/entity/resources/externalAccountingSystem/client/Client.ts">connect</a>(entityId) -> string</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Get a link to connect an entity to an external accounting system like Quickbooks or Xero

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.entity.externalAccountingSystem.connect("ent_8545a84e-a45f-41bf-bdf1-33b42a55812c");
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**entityId:** `Mercoa.EntityId` — Entity ID or Entity ForeignID

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ExternalAccountingSystem.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.entity.externalAccountingSystem.<a href="/src/api/resources/entity/resources/externalAccountingSystem/client/Client.ts">sync</a>(entityId, { ...params }) -> void</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Sync an entity with an external accounting system. Will sync customers/vendors and invoices.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.entity.externalAccountingSystem.sync("ent_8545a84e-a45f-41bf-bdf1-33b42a55812c", {
    vendors: "pull",
    bills: "push",
    glAccounts: "pull",
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**entityId:** `Mercoa.EntityId` — Entity ID or Entity ForeignID

</dd>
</dl>

<dl>
<dd>

**request:** `Mercoa.entity.SyncExternalSystemRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ExternalAccountingSystem.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

## Entity Invoice

<details><summary><code>client.entity.invoice.<a href="/src/api/resources/entity/resources/invoice/client/Client.ts">find</a>(entityId, { ...params }) -> Mercoa.FindInvoiceResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Get invoices for an entity with the given filters.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.entity.invoice.find("ent_8545a84e-a45f-41bf-bdf1-33b42a55812c", {
    excludeReceivables: true,
    orderBy: "CREATED_AT",
    orderDirection: "ASC",
    limit: 10,
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**entityId:** `Mercoa.EntityId` — Entity ID or Entity ForeignID

</dd>
</dl>

<dl>
<dd>

**request:** `Mercoa.entity.EntityGetInvoicesRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Invoice.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.entity.invoice.<a href="/src/api/resources/entity/resources/invoice/client/Client.ts">metrics</a>(entityId, { ...params }) -> Mercoa.InvoiceMetricsResponse[]</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Get invoice metrics for an entity with the given filters. Invoices will always be grouped by currency. If none of excludePayables, excludeReceivables, payerId, vendorId, or invoiceId status filters are provided, excludeReceivables will be set to true.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.entity.invoice.metrics("ent_8545a84e-a45f-41bf-bdf1-33b42a55812c", {
    returnByDate: "CREATION_DATE",
    excludeReceivables: true,
    startDate: "2021-01-01T00:00:00.000Z",
    endDate: "2021-01-31T23:59:59.999Z",
    currency: "USD",
    status: "NEW",
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**entityId:** `Mercoa.EntityId` — Entity ID or Entity ForeignID

</dd>
</dl>

<dl>
<dd>

**request:** `Mercoa.entity.InvoiceMetricsRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Invoice.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

## Entity Metadata

<details><summary><code>client.entity.metadata.<a href="/src/api/resources/entity/resources/metadata/client/Client.ts">getAll</a>(entityId) -> Mercoa.EntityMetadataResponse[]</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Retrieve all metadata options associated with this entity

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.entity.metadata.getAll("ent_a0f6ea94-0761-4a5e-a416-3c453cb7eced");
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**entityId:** `Mercoa.EntityId` — Entity ID or Entity ForeignID

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Metadata.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.entity.metadata.<a href="/src/api/resources/entity/resources/metadata/client/Client.ts">get</a>(entityId, key) -> string[]</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Retrieve metadata associated with a specific key

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.entity.metadata.get("ent_a0f6ea94-0761-4a5e-a416-3c453cb7eced", "propertyId");
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**entityId:** `Mercoa.EntityId` — Entity ID or Entity ForeignID

</dd>
</dl>

<dl>
<dd>

**key:** `string`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Metadata.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.entity.metadata.<a href="/src/api/resources/entity/resources/metadata/client/Client.ts">update</a>(entityId, key, { ...params }) -> string[]</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Update metadata associated with a specific key

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.entity.metadata.update("ent_a0f6ea94-0761-4a5e-a416-3c453cb7eced", "propertyId", [
    "{key: 'prop_123', value: 'Beach Rental'}",
    "{key: 'prop_456', value: 'City Rental'}",
]);
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**entityId:** `Mercoa.EntityId` — Entity ID or Entity ForeignID

</dd>
</dl>

<dl>
<dd>

**key:** `string`

</dd>
</dl>

<dl>
<dd>

**request:** `string[]`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Metadata.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.entity.metadata.<a href="/src/api/resources/entity/resources/metadata/client/Client.ts">delete</a>(entityId, key) -> void</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Delete all metadata associated with a specific key

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.entity.metadata.delete("ent_a0f6ea94-0761-4a5e-a416-3c453cb7eced", "propertyId");
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**entityId:** `Mercoa.EntityId` — Entity ID or Entity ForeignID

</dd>
</dl>

<dl>
<dd>

**key:** `string`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Metadata.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

## Entity NotificationPolicy

<details><summary><code>client.entity.notificationPolicy.<a href="/src/api/resources/entity/resources/notificationPolicy/client/Client.ts">getAll</a>(entityId) -> Mercoa.NotificationPolicyResponse[]</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Retrieve all notification policies associated with this entity

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.entity.notificationPolicy.getAll("ent_8545a84e-a45f-41bf-bdf1-33b42a55812c");
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**entityId:** `Mercoa.EntityId` — Entity ID or Entity ForeignID

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `NotificationPolicy.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.entity.notificationPolicy.<a href="/src/api/resources/entity/resources/notificationPolicy/client/Client.ts">get</a>(entityId, notificationType) -> Mercoa.NotificationPolicyResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Retrieve notification policy associated with this entity

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.entity.notificationPolicy.get("ent_8545a84e-a45f-41bf-bdf1-33b42a55812c", "INVOICE_APPROVAL_NEEDED");
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**entityId:** `Mercoa.EntityId` — Entity ID or Entity ForeignID

</dd>
</dl>

<dl>
<dd>

**notificationType:** `Mercoa.NotificationType`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `NotificationPolicy.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.entity.notificationPolicy.<a href="/src/api/resources/entity/resources/notificationPolicy/client/Client.ts">update</a>(entityId, notificationType, { ...params }) -> Mercoa.NotificationPolicyResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Update notification policy associated with this entity

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.entity.notificationPolicy.update("ent_8545a84e-a45f-41bf-bdf1-33b42a55812c", "INVOICE_APPROVAL_NEEDED", {
    disabled: false,
    additionalRoles: ["admin", "approver"],
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**entityId:** `Mercoa.EntityId` — Entity ID or Entity ForeignID

</dd>
</dl>

<dl>
<dd>

**notificationType:** `Mercoa.NotificationType`

</dd>
</dl>

<dl>
<dd>

**request:** `Mercoa.NotificationPolicyRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `NotificationPolicy.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

## Entity PaymentMethod BankAccount

<details><summary><code>client.entity.paymentMethod.bankAccount.<a href="/src/api/resources/entity/resources/paymentMethod/resources/bankAccount/client/Client.ts">initiateMicroDeposits</a>(entityId, paymentMethodId) -> Mercoa.PaymentMethodResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Initiate micro deposits for a bank account

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.entity.paymentMethod.bankAccount.initiateMicroDeposits(
    "ent_8545a84e-a45f-41bf-bdf1-33b42a55812c",
    "pm_4794d597-70dc-4fec-b6ec-c5988e759769"
);
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**entityId:** `Mercoa.EntityId` — Entity ID or Entity ForeignID

</dd>
</dl>

<dl>
<dd>

**paymentMethodId:** `Mercoa.PaymentMethodId` — Payment Method ID or Payment Method ForeignID

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `BankAccount.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.entity.paymentMethod.bankAccount.<a href="/src/api/resources/entity/resources/paymentMethod/resources/bankAccount/client/Client.ts">completeMicroDeposits</a>(entityId, paymentMethodId, { ...params }) -> Mercoa.PaymentMethodResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Complete micro deposit verification

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.entity.paymentMethod.bankAccount.completeMicroDeposits(
    "ent_8545a84e-a45f-41bf-bdf1-33b42a55812c",
    "pm_4794d597-70dc-4fec-b6ec-c5988e759769",
    {
        amounts: [40, 2],
    }
);
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**entityId:** `Mercoa.EntityId` — Entity ID or Entity ForeignID

</dd>
</dl>

<dl>
<dd>

**paymentMethodId:** `Mercoa.PaymentMethodId` — Payment Method ID or Payment Method ForeignID

</dd>
</dl>

<dl>
<dd>

**request:** `Mercoa.entity.paymentMethod.CompleteMicroDepositsRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `BankAccount.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.entity.paymentMethod.bankAccount.<a href="/src/api/resources/entity/resources/paymentMethod/resources/bankAccount/client/Client.ts">getAccelerationFunds</a>(entityId, paymentMethodId) -> Mercoa.AccelerationFundsResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Get the available and pending balance of this entity's acceleration funds. The specified payment method must be a bank account.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.entity.paymentMethod.bankAccount.getAccelerationFunds(
    "ent_8545a84e-a45f-41bf-bdf1-33b42a55812c",
    "pm_4794d597-70dc-4fec-b6ec-c5988e759769"
);
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**entityId:** `Mercoa.EntityId` — Entity ID or Entity ForeignID

</dd>
</dl>

<dl>
<dd>

**paymentMethodId:** `Mercoa.PaymentMethodId` — Payment Method ID or Payment Method ForeignID

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `BankAccount.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.entity.paymentMethod.bankAccount.<a href="/src/api/resources/entity/resources/paymentMethod/resources/bankAccount/client/Client.ts">addAccelerationFunds</a>(entityId, paymentMethodId, { ...params }) -> void</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Add acceleration funds to this entity from a bank account (this transfer is D+2). The specified payment method must be a bank account.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.entity.paymentMethod.bankAccount.addAccelerationFunds(
    "ent_8545a84e-a45f-41bf-bdf1-33b42a55812c",
    "pm_4794d597-70dc-4fec-b6ec-c5988e759769",
    {
        amount: 100,
        currency: "USD",
    }
);
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**entityId:** `Mercoa.EntityId` — Entity ID or Entity ForeignID

</dd>
</dl>

<dl>
<dd>

**paymentMethodId:** `Mercoa.PaymentMethodId` — Payment Method ID or Payment Method ForeignID

</dd>
</dl>

<dl>
<dd>

**request:** `Mercoa.entity.paymentMethod.AddAccelerationFundsRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `BankAccount.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.entity.paymentMethod.bankAccount.<a href="/src/api/resources/entity/resources/paymentMethod/resources/bankAccount/client/Client.ts">removeAccelerationFunds</a>(entityId, paymentMethodId, { ...params }) -> void</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Remove acceleration funds from this entity to a bank account (this transfer is D+0). The specified payment method must be a bank account.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.entity.paymentMethod.bankAccount.removeAccelerationFunds(
    "ent_8545a84e-a45f-41bf-bdf1-33b42a55812c",
    "pm_4794d597-70dc-4fec-b6ec-c5988e759769",
    {
        amount: 100,
        currency: "USD",
    }
);
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**entityId:** `Mercoa.EntityId` — Entity ID or Entity ForeignID

</dd>
</dl>

<dl>
<dd>

**paymentMethodId:** `Mercoa.PaymentMethodId` — Payment Method ID or Payment Method ForeignID

</dd>
</dl>

<dl>
<dd>

**request:** `Mercoa.entity.paymentMethod.RemoveAccelerationFundsRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `BankAccount.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

## Entity Representative

<details><summary><code>client.entity.representative.<a href="/src/api/resources/entity/resources/representative/client/Client.ts">getAll</a>(entityId) -> Mercoa.RepresentativeResponse[]</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Get representatives for an entity

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.entity.representative.getAll("ent_8545a84e-a45f-41bf-bdf1-33b42a55812c");
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**entityId:** `Mercoa.EntityId` — Entity ID or Entity ForeignID

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Representative.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.entity.representative.<a href="/src/api/resources/entity/resources/representative/client/Client.ts">create</a>(entityId, { ...params }) -> Mercoa.RepresentativeResponse</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.entity.representative.create("ent_8545a84e-a45f-41bf-bdf1-33b42a55812c", {
    name: {
        firstName: "John",
        middleName: "Quincy",
        lastName: "Adams",
        suffix: "Jr.",
    },
    phone: {
        countryCode: "1",
        number: "4155551234",
    },
    email: "john.doe@acme.com",
    address: {
        addressLine1: "123 Main St",
        addressLine2: "Unit 1",
        city: "San Francisco",
        stateOrProvince: "CA",
        postalCode: "94105",
        country: "US",
    },
    birthDate: {
        day: "1",
        month: "1",
        year: "1980",
    },
    governmentId: {
        ssn: "123-45-6789",
    },
    responsibilities: {
        isOwner: true,
        ownershipPercentage: 40,
        isController: true,
    },
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**entityId:** `Mercoa.EntityId` — Entity ID or Entity ForeignID

</dd>
</dl>

<dl>
<dd>

**request:** `Mercoa.RepresentativeRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Representative.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.entity.representative.<a href="/src/api/resources/entity/resources/representative/client/Client.ts">get</a>(entityId, representativeId) -> Mercoa.RepresentativeResponse</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.entity.representative.get(
    "ent_8545a84e-a45f-41bf-bdf1-33b42a55812c",
    "rep_7df2974a-4069-454c-912f-7e58ebe030fb"
);
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**entityId:** `Mercoa.EntityId` — Entity ID or Entity ForeignID

</dd>
</dl>

<dl>
<dd>

**representativeId:** `Mercoa.RepresentativeId`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Representative.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.entity.representative.<a href="/src/api/resources/entity/resources/representative/client/Client.ts">update</a>(entityId, representativeId, { ...params }) -> Mercoa.RepresentativeResponse</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.entity.representative.update(
    "ent_8545a84e-a45f-41bf-bdf1-33b42a55812c",
    "rep_7df2974a-4069-454c-912f-7e58ebe030fb",
    {
        name: {
            firstName: "John",
            middleName: "Quincy",
            lastName: "Adams",
            suffix: "Jr.",
        },
        phone: {
            countryCode: "1",
            number: "4155551234",
        },
        email: "john.doe@acme.com",
        address: {
            addressLine1: "123 Main St",
            addressLine2: "Unit 1",
            city: "San Francisco",
            stateOrProvince: "CA",
            postalCode: "94105",
            country: "US",
        },
        birthDate: {
            day: "1",
            month: "1",
            year: "1980",
        },
        governmentId: {
            ssn: "123-45-6789",
        },
        responsibilities: {
            isOwner: true,
            ownershipPercentage: 40,
            isController: true,
        },
    }
);
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**entityId:** `Mercoa.EntityId` — Entity ID or Entity ForeignID

</dd>
</dl>

<dl>
<dd>

**representativeId:** `Mercoa.RepresentativeId`

</dd>
</dl>

<dl>
<dd>

**request:** `Mercoa.RepresentativeUpdateRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Representative.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.entity.representative.<a href="/src/api/resources/entity/resources/representative/client/Client.ts">delete</a>(entityId, representativeId) -> void</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.entity.representative.delete(
    "ent_8545a84e-a45f-41bf-bdf1-33b42a55812c",
    "rep_7df2974a-4069-454c-912f-7e58ebe030fb"
);
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**entityId:** `Mercoa.EntityId` — Entity ID or Entity ForeignID

</dd>
</dl>

<dl>
<dd>

**representativeId:** `Mercoa.RepresentativeId`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Representative.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

## Entity User NotificationPolicy

<details><summary><code>client.entity.user.notificationPolicy.<a href="/src/api/resources/entity/resources/user/resources/notificationPolicy/client/Client.ts">getAll</a>(entityId, userId) -> Mercoa.UserNotificationPolicyResponse[]</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Retrieve all notification policies associated with this entity user

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.entity.user.notificationPolicy.getAll(
    "ent_8545a84e-a45f-41bf-bdf1-33b42a55812c",
    "user_e24fc81c-c5ee-47e8-af42-4fe29d895506"
);
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**entityId:** `Mercoa.EntityId` — Entity ID or Entity ForeignID

</dd>
</dl>

<dl>
<dd>

**userId:** `Mercoa.EntityUserId` — User ID or User ForeignID

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `NotificationPolicy.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.entity.user.notificationPolicy.<a href="/src/api/resources/entity/resources/user/resources/notificationPolicy/client/Client.ts">get</a>(entityId, userId, notificationType) -> Mercoa.UserNotificationPolicyResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Retrieve notification policy associated with this entity user

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.entity.user.notificationPolicy.get(
    "ent_8545a84e-a45f-41bf-bdf1-33b42a55812c",
    "user_e24fc81c-c5ee-47e8-af42-4fe29d895506",
    "INVOICE_APPROVED"
);
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**entityId:** `Mercoa.EntityId` — Entity ID or Entity ForeignID

</dd>
</dl>

<dl>
<dd>

**userId:** `Mercoa.EntityUserId` — User ID or User ForeignID

</dd>
</dl>

<dl>
<dd>

**notificationType:** `Mercoa.NotificationType`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `NotificationPolicy.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.entity.user.notificationPolicy.<a href="/src/api/resources/entity/resources/user/resources/notificationPolicy/client/Client.ts">update</a>(entityId, userId, notificationType, { ...params }) -> Mercoa.UserNotificationPolicyResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Update notification policy associated with this entity user

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.entity.user.notificationPolicy.update(
    "ent_8545a84e-a45f-41bf-bdf1-33b42a55812c",
    "user_e24fc81c-c5ee-47e8-af42-4fe29d895506",
    "INVOICE_APPROVED",
    {
        disabled: true,
    }
);
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**entityId:** `Mercoa.EntityId` — Entity ID or Entity ForeignID

</dd>
</dl>

<dl>
<dd>

**userId:** `Mercoa.EntityUserId` — User ID or User ForeignID

</dd>
</dl>

<dl>
<dd>

**notificationType:** `Mercoa.NotificationType`

</dd>
</dl>

<dl>
<dd>

**request:** `Mercoa.UserNotificationPolicyRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `NotificationPolicy.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

## Entity User Notifications

<details><summary><code>client.entity.user.notifications.<a href="/src/api/resources/entity/resources/user/resources/notifications/client/Client.ts">find</a>(entityId, userId, { ...params }) -> Mercoa.FindNotificationResponse</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.entity.user.notifications.find(
    "ent_8545a84e-a45f-41bf-bdf1-33b42a55812c",
    "user_e24fc81c-c5ee-47e8-af42-4fe29d895506"
);
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**entityId:** `Mercoa.EntityId` — Entity ID or Entity ForeignID

</dd>
</dl>

<dl>
<dd>

**userId:** `Mercoa.EntityUserId` — User ID or User ForeignID

</dd>
</dl>

<dl>
<dd>

**request:** `Mercoa.entity.user.EntityGetNotificationsRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Notifications.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.entity.user.notifications.<a href="/src/api/resources/entity/resources/user/resources/notifications/client/Client.ts">get</a>(entityId, userId, notificationId) -> Mercoa.NotificationResponse</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.entity.user.notifications.get(
    "ent_8545a84e-a45f-41bf-bdf1-33b42a55812c",
    "user_e24fc81c-c5ee-47e8-af42-4fe29d895506",
    "notif_7df2974a-4069-454c-912f-7e58ebe030fb"
);
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**entityId:** `Mercoa.EntityId` — Entity ID or Entity ForeignID

</dd>
</dl>

<dl>
<dd>

**userId:** `Mercoa.EntityUserId` — User ID or User ForeignID

</dd>
</dl>

<dl>
<dd>

**notificationId:** `Mercoa.NotificationId`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Notifications.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.entity.user.notifications.<a href="/src/api/resources/entity/resources/user/resources/notifications/client/Client.ts">update</a>(entityId, userId, notificationId, { ...params }) -> Mercoa.NotificationResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Update the status of a notification.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.entity.user.notifications.update(
    "ent_8545a84e-a45f-41bf-bdf1-33b42a55812c",
    "user_e24fc81c-c5ee-47e8-af42-4fe29d895506",
    "notif_7df2974a-4069-454c-912f-7e58ebe030fb",
    {
        status: "READ",
    }
);
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**entityId:** `Mercoa.EntityId` — Entity ID or Entity ForeignID

</dd>
</dl>

<dl>
<dd>

**userId:** `Mercoa.EntityUserId` — User ID or User ForeignID

</dd>
</dl>

<dl>
<dd>

**notificationId:** `Mercoa.NotificationId`

</dd>
</dl>

<dl>
<dd>

**request:** `Mercoa.NotificationUpdateRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Notifications.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

## InvoiceTemplate Approval

<details><summary><code>client.invoiceTemplate.approval.<a href="/src/api/resources/invoiceTemplate/resources/approval/client/Client.ts">addApprover</a>(invoiceTemplateId, { ...params }) -> void</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Adds an approver to the invoice template. Will select the first available approver slot that is not already filled and assign the approver to it. If no approver slots are available, an error will be returned. An explicit approver slot can be specified by setting the `approverSlot` field.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.invoiceTemplate.approval.addApprover("invt_13c07096-5848-4aeb-ae7d-6576289034c4", {
    approvalSlotId: "inap_9bb311c9-7c15-4c9e-8148-63814e0abec6",
    userId: "user_e24fc81c-c5ee-47e8-af42-4fe29d895506",
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**invoiceTemplateId:** `Mercoa.InvoiceTemplateId` — Invoice Template ID

</dd>
</dl>

<dl>
<dd>

**request:** `Mercoa.AddApproverRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Approval.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.invoiceTemplate.approval.<a href="/src/api/resources/invoiceTemplate/resources/approval/client/Client.ts">approve</a>(invoiceTemplateId, { ...params }) -> void</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.invoiceTemplate.approval.approve("invt_13c07096-5848-4aeb-ae7d-6576289034c4", {
    text: "This is a reason for my action",
    userId: "user_e24fc81c-c5ee-47e8-af42-4fe29d895506",
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**invoiceTemplateId:** `Mercoa.InvoiceTemplateId` — Invoice Template ID

</dd>
</dl>

<dl>
<dd>

**request:** `Mercoa.ApprovalRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Approval.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.invoiceTemplate.approval.<a href="/src/api/resources/invoiceTemplate/resources/approval/client/Client.ts">reject</a>(invoiceTemplateId, { ...params }) -> void</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.invoiceTemplate.approval.reject("invt_13c07096-5848-4aeb-ae7d-6576289034c4", {
    text: "This is a reason for my action",
    userId: "user_e24fc81c-c5ee-47e8-af42-4fe29d895506",
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**invoiceTemplateId:** `Mercoa.InvoiceTemplateId` — Invoice Template ID

</dd>
</dl>

<dl>
<dd>

**request:** `Mercoa.ApprovalRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Approval.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

## InvoiceTemplate Document

<details><summary><code>client.invoiceTemplate.document.<a href="/src/api/resources/invoiceTemplate/resources/document/client/Client.ts">getAll</a>(invoiceTemplateId, { ...params }) -> Mercoa.DocumentResponse[]</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Get attachments (scanned/uploaded PDFs and images) associated with this invoice template

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.invoiceTemplate.document.getAll("invt_13c07096-5848-4aeb-ae7d-6576289034c4");
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**invoiceTemplateId:** `Mercoa.InvoiceTemplateId` — Invoice Template ID

</dd>
</dl>

<dl>
<dd>

**request:** `Mercoa.invoiceTemplate.GetDocumentsRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Document.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.invoiceTemplate.document.<a href="/src/api/resources/invoiceTemplate/resources/document/client/Client.ts">upload</a>(invoiceTemplateId, { ...params }) -> void</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Upload documents (scanned/uploaded PDFs and images) associated with this invoice template

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.invoiceTemplate.document.upload("invt_13c07096-5848-4aeb-ae7d-6576289034c4", {
    document:
        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAIAQMAAAD+wSzIAAAABlBMVEX///+/v7+jQ3Y5AAAADklEQVQI12P4AIX8EAgALgAD/aNpbtEAAAAASUVORK5CYII",
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**invoiceTemplateId:** `Mercoa.InvoiceTemplateId` — Invoice Template ID

</dd>
</dl>

<dl>
<dd>

**request:** `Mercoa.invoiceTemplate.UploadDocumentRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Document.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.invoiceTemplate.document.<a href="/src/api/resources/invoiceTemplate/resources/document/client/Client.ts">delete</a>(invoiceTemplateId, documentId) -> void</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Delete an attachment (scanned/uploaded PDFs and images) associated with this invoice template

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.invoiceTemplate.document.delete(
    "invt_13c07096-5848-4aeb-ae7d-6576289034c4",
    "doc_37e6af0a-e637-48fd-b825-d6947b38c4e2"
);
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**invoiceTemplateId:** `Mercoa.InvoiceTemplateId` — Invoice Template ID

</dd>
</dl>

<dl>
<dd>

**documentId:** `string`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Document.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.invoiceTemplate.document.<a href="/src/api/resources/invoiceTemplate/resources/document/client/Client.ts">generateInvoicePdf</a>(invoiceTemplateId) -> Mercoa.DocumentResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Generate a PDF of the invoice. This PDF is generated from the data in the invoice, not from the uploaded documents.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.invoiceTemplate.document.generateInvoicePdf("invt_13c07096-5848-4aeb-ae7d-6576289034c4");
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**invoiceTemplateId:** `Mercoa.InvoiceTemplateId` — Invoice Template ID

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Document.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.invoiceTemplate.document.<a href="/src/api/resources/invoiceTemplate/resources/document/client/Client.ts">generateCheckPdf</a>(invoiceTemplateId) -> Mercoa.DocumentResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Get a PDF of the check for the invoice. If the invoice does not have check as the disbursement method, an error will be returned. If the disbursement option for the check is set to 'MAIL', a void copy of the check will be returned. If the disbursement option for the check is set to 'PRINT', a printable check will be returned. If the invoice is NOT marked as PAID, the check will be a void copy.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.invoiceTemplate.document.generateCheckPdf("invt_13c07096-5848-4aeb-ae7d-6576289034c4");
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**invoiceTemplateId:** `Mercoa.InvoiceTemplateId` — Invoice Template ID

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Document.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.invoiceTemplate.document.<a href="/src/api/resources/invoiceTemplate/resources/document/client/Client.ts">getSourceEmail</a>(invoiceTemplateId) -> Mercoa.EmailLogResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Get the email subject and body that was used to create this invoice.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.invoiceTemplate.document.getSourceEmail("invt_13c07096-5848-4aeb-ae7d-6576289034c4");
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**invoiceTemplateId:** `Mercoa.InvoiceTemplateId` — Invoice Template ID

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Document.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

## Invoice Approval

<details><summary><code>client.invoice.approval.<a href="/src/api/resources/invoice/resources/approval/client/Client.ts">addApprover</a>(invoiceId, { ...params }) -> void</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Adds an approver to the invoice. Will select the first available approver slot that is not already filled and assign the approver to it. If no approver slots are available, an error will be returned. An explicit approver slot can be specified by setting the `approverSlot` field.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.invoice.approval.addApprover("in_3d61faa9-1754-4b7b-9fcb-88ff97f368ff", {
    approvalSlotId: "inap_9bb311c9-7c15-4c9e-8148-63814e0abec6",
    userId: "user_e24fc81c-c5ee-47e8-af42-4fe29d895506",
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**invoiceId:** `Mercoa.InvoiceId` — Invoice ID or Invoice ForeignID

</dd>
</dl>

<dl>
<dd>

**request:** `Mercoa.AddApproverRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Approval.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.invoice.approval.<a href="/src/api/resources/invoice/resources/approval/client/Client.ts">approve</a>(invoiceId, { ...params }) -> void</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.invoice.approval.approve("in_3d61faa9-1754-4b7b-9fcb-88ff97f368ff", {
    text: "This is a reason for my action",
    userId: "user_e24fc81c-c5ee-47e8-af42-4fe29d895506",
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**invoiceId:** `Mercoa.InvoiceId` — Invoice ID or Invoice ForeignID

</dd>
</dl>

<dl>
<dd>

**request:** `Mercoa.ApprovalRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Approval.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.invoice.approval.<a href="/src/api/resources/invoice/resources/approval/client/Client.ts">reject</a>(invoiceId, { ...params }) -> void</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.invoice.approval.reject("in_3d61faa9-1754-4b7b-9fcb-88ff97f368ff", {
    text: "This is a reason for my action",
    userId: "user_e24fc81c-c5ee-47e8-af42-4fe29d895506",
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**invoiceId:** `Mercoa.InvoiceId` — Invoice ID or Invoice ForeignID

</dd>
</dl>

<dl>
<dd>

**request:** `Mercoa.ApprovalRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Approval.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

## Invoice Comment

<details><summary><code>client.invoice.comment.<a href="/src/api/resources/invoice/resources/comment/client/Client.ts">getAll</a>(invoiceId) -> Mercoa.CommentResponse[]</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Get all comments associated with this invoice

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.invoice.comment.getAll("in_3d61faa9-1754-4b7b-9fcb-88ff97f368ff");
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**invoiceId:** `Mercoa.InvoiceId` — Invoice ID or Invoice ForeignID

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Comment.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.invoice.comment.<a href="/src/api/resources/invoice/resources/comment/client/Client.ts">create</a>(invoiceId, { ...params }) -> Mercoa.CommentResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Add a comment to this invoice

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.invoice.comment.create("in_3d61faa9-1754-4b7b-9fcb-88ff97f368ff", {
    text: "This is a comment",
    userId: "user_e24fc81c-c5ee-47e8-af42-4fe29d895506",
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**invoiceId:** `Mercoa.InvoiceId` — Invoice ID or Invoice ForeignID

</dd>
</dl>

<dl>
<dd>

**request:** `Mercoa.CommentRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Comment.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.invoice.comment.<a href="/src/api/resources/invoice/resources/comment/client/Client.ts">get</a>(invoiceId, commentId) -> Mercoa.CommentResponse</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.invoice.comment.get("in_3d61faa9-1754-4b7b-9fcb-88ff97f368ff", "ic_3d61faa9-1754-4b7b-9fcb-88ff97f368ff");
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**invoiceId:** `Mercoa.InvoiceId` — Invoice ID or Invoice ForeignID

</dd>
</dl>

<dl>
<dd>

**commentId:** `Mercoa.CommentId`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Comment.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.invoice.comment.<a href="/src/api/resources/invoice/resources/comment/client/Client.ts">update</a>(invoiceId, commentId, { ...params }) -> Mercoa.CommentResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Edit a comment on this invoice

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.invoice.comment.update(
    "in_3d61faa9-1754-4b7b-9fcb-88ff97f368ff",
    "ic_3d61faa9-1754-4b7b-9fcb-88ff97f368ff",
    {
        text: "This is a comment",
        userId: "user_e24fc81c-c5ee-47e8-af42-4fe29d895506",
    }
);
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**invoiceId:** `Mercoa.InvoiceId` — Invoice ID or Invoice ForeignID

</dd>
</dl>

<dl>
<dd>

**commentId:** `Mercoa.CommentId`

</dd>
</dl>

<dl>
<dd>

**request:** `Mercoa.CommentRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Comment.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.invoice.comment.<a href="/src/api/resources/invoice/resources/comment/client/Client.ts">delete</a>(invoiceId, commentId) -> void</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Delete a comment on this invoice

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.invoice.comment.delete(
    "in_3d61faa9-1754-4b7b-9fcb-88ff97f368ff",
    "ic_3d61faa9-1754-4b7b-9fcb-88ff97f368ff"
);
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**invoiceId:** `Mercoa.InvoiceId` — Invoice ID or Invoice ForeignID

</dd>
</dl>

<dl>
<dd>

**commentId:** `Mercoa.CommentId`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Comment.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

## Invoice Document

<details><summary><code>client.invoice.document.<a href="/src/api/resources/invoice/resources/document/client/Client.ts">getAll</a>(invoiceId, { ...params }) -> Mercoa.DocumentResponse[]</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Get attachments (scanned/uploaded PDFs and images) associated with this invoice

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.invoice.document.getAll("in_26e7b5d3-a739-4b23-9ad9-6aaa085f47a9");
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**invoiceId:** `Mercoa.InvoiceId` — Invoice ID or Invoice ForeignID

</dd>
</dl>

<dl>
<dd>

**request:** `Mercoa.invoice.GetDocumentsRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Document.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.invoice.document.<a href="/src/api/resources/invoice/resources/document/client/Client.ts">upload</a>(invoiceId, { ...params }) -> void</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Upload documents (scanned/uploaded PDFs and images) associated with this Invoice

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.invoice.document.upload("in_26e7b5d3-a739-4b23-9ad9-6aaa085f47a9", {
    document:
        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAIAQMAAAD+wSzIAAAABlBMVEX///+/v7+jQ3Y5AAAADklEQVQI12P4AIX8EAgALgAD/aNpbtEAAAAASUVORK5CYII",
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**invoiceId:** `Mercoa.InvoiceId` — Invoice ID or Invoice ForeignID

</dd>
</dl>

<dl>
<dd>

**request:** `Mercoa.invoice.UploadDocumentRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Document.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.invoice.document.<a href="/src/api/resources/invoice/resources/document/client/Client.ts">delete</a>(invoiceId, documentId) -> void</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Delete an attachment (scanned/uploaded PDFs and images) associated with this invoice

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.invoice.document.delete(
    "in_26e7b5d3-a739-4b23-9ad9-6aaa085f47a9",
    "doc_37e6af0a-e637-48fd-b825-d6947b38c4e2"
);
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**invoiceId:** `Mercoa.InvoiceId` — Invoice ID or Invoice ForeignID

</dd>
</dl>

<dl>
<dd>

**documentId:** `string`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Document.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.invoice.document.<a href="/src/api/resources/invoice/resources/document/client/Client.ts">generateInvoicePdf</a>(invoiceId) -> Mercoa.DocumentResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Generate a PDF of the invoice. This PDF is generated from the data in the invoice, not from the uploaded documents.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.invoice.document.generateInvoicePdf("in_26e7b5d3-a739-4b23-9ad9-6aaa085f47a9");
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**invoiceId:** `Mercoa.InvoiceId` — Invoice ID or Invoice ForeignID

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Document.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.invoice.document.<a href="/src/api/resources/invoice/resources/document/client/Client.ts">generateCheckPdf</a>(invoiceId) -> Mercoa.DocumentResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Get a PDF of the check for the invoice. If the invoice does not have check as the disbursement method, an error will be returned. If the disbursement option for the check is set to 'MAIL', a void copy of the check will be returned. If the disbursement option for the check is set to 'PRINT', a printable check will be returned. If the invoice is NOT marked as PAID, the check will be a void copy.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.invoice.document.generateCheckPdf("in_26e7b5d3-a739-4b23-9ad9-6aaa085f47a9");
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**invoiceId:** `Mercoa.InvoiceId` — Invoice ID or Invoice ForeignID

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Document.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.invoice.document.<a href="/src/api/resources/invoice/resources/document/client/Client.ts">getSourceEmail</a>(invoiceId) -> Mercoa.EmailLogResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Get the email subject and body that was used to create this invoice.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.invoice.document.getSourceEmail("in_26e7b5d3-a739-4b23-9ad9-6aaa085f47a9");
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**invoiceId:** `Mercoa.InvoiceId` — Invoice ID or Invoice ForeignID

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Document.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

## Invoice PaymentLinks

<details><summary><code>client.invoice.paymentLinks.<a href="/src/api/resources/invoice/resources/paymentLinks/client/Client.ts">getPayerLink</a>(invoiceId, { ...params }) -> string</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Get temporary link for payer to send payment

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.invoice.paymentLinks.getPayerLink("in_a0f6ea94-0761-4a5e-a416-3c453cb7eced");
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**invoiceId:** `Mercoa.InvoiceId` — Invoice ID or Invoice ForeignID

</dd>
</dl>

<dl>
<dd>

**request:** `Mercoa.invoice.PayerLinkRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `PaymentLinks.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.invoice.paymentLinks.<a href="/src/api/resources/invoice/resources/paymentLinks/client/Client.ts">sendPayerEmail</a>(invoiceId, { ...params }) -> void</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Trigger email to payer inviting them to make payment

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.invoice.paymentLinks.sendPayerEmail("in_a0f6ea94-0761-4a5e-a416-3c453cb7eced", {
    attachInvoice: true,
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**invoiceId:** `Mercoa.InvoiceId` — Invoice ID or Invoice ForeignID

</dd>
</dl>

<dl>
<dd>

**request:** `Mercoa.invoice.SendPayerEmail`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `PaymentLinks.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.invoice.paymentLinks.<a href="/src/api/resources/invoice/resources/paymentLinks/client/Client.ts">getVendorLink</a>(invoiceId, { ...params }) -> string</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Get temporary link for vendor to accept payment

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.invoice.paymentLinks.getVendorLink("in_a0f6ea94-0761-4a5e-a416-3c453cb7eced");
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**invoiceId:** `Mercoa.InvoiceId` — Invoice ID or Invoice ForeignID

</dd>
</dl>

<dl>
<dd>

**request:** `Mercoa.invoice.VendorLinkRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `PaymentLinks.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.invoice.paymentLinks.<a href="/src/api/resources/invoice/resources/paymentLinks/client/Client.ts">sendVendorEmail</a>(invoiceId) -> void</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Trigger email to vendor inviting them into the vendor portal

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.invoice.paymentLinks.sendVendorEmail("in_a0f6ea94-0761-4a5e-a416-3c453cb7eced");
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**invoiceId:** `Mercoa.InvoiceId` — Invoice ID or Invoice ForeignID

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `PaymentLinks.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

## Ocr

<details><summary><code>client.ocr.<a href="/src/api/resources/ocr/client/Client.ts">ocr</a>({ ...params }) -> Mercoa.OcrResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Run OCR on an Base64 encoded image or PDF. This endpoint will block until the OCR is complete.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.ocr.ocr({
    vendorNetwork: "entity",
    entityId: "entity_8f86116b-3b4d-4ded-99ef-3bc929d8c33c",
    mimeType: "image/png",
    image: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAIAQMAAAD+wSzIAAAABlBMVEX///+/v7+jQ3Y5AAAADklEQVQI12P4AIX8EAgALgAD/aNpbtEAAAAASUVORK5CYII",
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Mercoa.OcrRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Ocr.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.ocr.<a href="/src/api/resources/ocr/client/Client.ts">runAsyncOcr</a>({ ...params }) -> Mercoa.OcrAsyncResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Run OCR on an Base64 encoded image or PDF. This endpoint will return immediately and the OCR will be processed asynchronously.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.ocr.runAsyncOcr({
    vendorNetwork: "entity",
    entityId: "entity_8f86116b-3b4d-4ded-99ef-3bc929d8c33c",
    mimeType: "image/png",
    image: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAIAQMAAAD+wSzIAAAABlBMVEX///+/v7+jQ3Y5AAAADklEQVQI12P4AIX8EAgALgAD/aNpbtEAAAAASUVORK5CYII",
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Mercoa.OcrRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Ocr.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.ocr.<a href="/src/api/resources/ocr/client/Client.ts">getAsyncOcr</a>(jobId) -> Mercoa.OcrJobResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Get the status and results of an asynchronous OCR job.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.ocr.getAsyncOcr("ocr_8f86116b-3b4d-4ded-99ef-3bc929d8c33c");
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**jobId:** `string`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Ocr.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

## Organization NotificationConfiguration

<details><summary><code>client.organization.notificationConfiguration.<a href="/src/api/resources/organization/resources/notificationConfiguration/client/Client.ts">getAll</a>() -> Mercoa.NotificationConfigurationResponse[]</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Retrieve all notification configurations

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.organization.notificationConfiguration.getAll();
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**requestOptions:** `NotificationConfiguration.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.organization.notificationConfiguration.<a href="/src/api/resources/organization/resources/notificationConfiguration/client/Client.ts">get</a>(notificationType) -> Mercoa.NotificationConfigurationResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Retrieve notification configuration for this notification type

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.organization.notificationConfiguration.get("INVOICE_APPROVAL_NEEDED");
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**notificationType:** `Mercoa.NotificationType`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `NotificationConfiguration.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.organization.notificationConfiguration.<a href="/src/api/resources/organization/resources/notificationConfiguration/client/Client.ts">update</a>(notificationType, { ...params }) -> Mercoa.NotificationConfigurationResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Update notification configuration for this notification type

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.organization.notificationConfiguration.update("INVOICE_APPROVAL_NEEDED", {
    notificationType: "invoice",
    url: "string",
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**notificationType:** `Mercoa.NotificationType`

</dd>
</dl>

<dl>
<dd>

**request:** `Mercoa.NotificationConfigurationRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `NotificationConfiguration.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.organization.notificationConfiguration.<a href="/src/api/resources/organization/resources/notificationConfiguration/client/Client.ts">reset</a>(notificationType) -> void</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Reset notification configuration for this notification type

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.organization.notificationConfiguration.reset("INVOICE_APPROVAL_NEEDED");
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**notificationType:** `Mercoa.NotificationType`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `NotificationConfiguration.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

## PaymentMethods

<details><summary><code>client.paymentMethods.<a href="/src/api/resources/paymentMethods/client/Client.ts">find</a>({ ...params }) -> Mercoa.PaymentMethodWithEntityFindResponse</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.paymentMethods.find();
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Mercoa.FindPaymentMethodsRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `PaymentMethods.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

## Transaction

<details><summary><code>client.transaction.<a href="/src/api/resources/transaction/client/Client.ts">find</a>({ ...params }) -> Mercoa.FindTransactionsResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Search transactions

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.transaction.find({
    startDate: "2024-01-15T09:30:00Z",
    endDate: "2024-01-15T09:30:00Z",
    limit: 10,
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Mercoa.FindTransactionsRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Transaction.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.transaction.<a href="/src/api/resources/transaction/client/Client.ts">get</a>(transactionId) -> Mercoa.TransactionResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Get Transaction

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.transaction.get("trx_bb08e72f-19f8-45f3-bcf9-46fdc46cb2f4");
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**transactionId:** `Mercoa.TransactionId`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Transaction.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>
