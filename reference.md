# Reference

## Contract

<details><summary><code>client.contract.<a href="/src/api/resources/contract/client/Client.ts">generateContract</a>({ ...params }) -> Mercoa.GenerateContractResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Generate a new contract object from a Base64 encoded PDF of a contract. This endpoint will block until the contract is generated.

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
await client.contract.generateContract({
    document:
        "data:application/pdf;base64,JVBERi0xLjEKJcKlwrHDqwoKMSAwIG9iagogIDw8IC9UeXBlIC9DYXRhbG9nCiAgICAgL1BhZ2VzIDIgMCBSCiAgPj4KZW5kb2JqCgoyIDAgb2JqCiAgPDwgL1R5cGUgL1BhZ2VzCiAgICAgL0tpZHMgWzMgMCBSXQogICAgIC9Db3VudCAxCiAgICAgL01lZGlhQm94IFswIDAgMzAwIDE0NF0KICA+PgplbmRvYmoKCjMgMCBvYmoKICA8PCAgL1R5cGUgL1BhZ2UKICAgICAgL1BhcmVudCAyIDAgUgogICAgICAvUmVzb3VyY2VzCiAgICAgICA8PCAvRm9udAogICAgICAgICAgIDw8IC9GMQogICAgICAgICAgICAgICA8PCAvVHlwZSAvRm9udAogICAgICAgICAgICAgICAgICAvU3VidHlwZSAvVHlwZTEKICAgICAgICAgICAgICAgICAgL0Jhc2VGb250IC9UaW1lcy1Sb21hbgogICAgICAgICAgICAgICA+PgogICAgICAgICAgID4+CiAgICAgICA+PgogICAgICAvQ29udGVudHMgNCAwIFIKICA+PgplbmRvYmoKCjQgMCBvYmoKICA8PCAvTGVuZ3RoIDU1ID4+CnN0cmVhbQogIEJUCiAgICAvRjEgMTggVGYKICAgIDAgMCBUZAogICAgKEhlbGxvIFdvcmxkKSBUagogIEVUCmVuZHN0cmVhbQplbmRvYmoKCnhyZWYKMCA1CjAwMDAwMDAwMDAgNjU1MzUgZiAKMDAwMDAwMDAxOCAwMDAwMCBuIAowMDAwMDAwMDc3IDAwMDAwIG4gCjAwMDAwMDAxNzggMDAwMDAgbiAKMDAwMDAwMDQ1NyAwMDAwMCBuIAp0cmFpbGVyCiAgPDwgIC9Sb290IDEgMCBSCiAgICAgIC9TaXplIDUKICA+PgpzdGFydHhyZWYKNTY1CiUlRU9GCg==",
    creatorEntityId: "ent_8545a84e-a45f-41bf-bdf1-33b42a55812c",
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

**request:** `Mercoa.GenerateContractRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Contract.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.contract.<a href="/src/api/resources/contract/client/Client.ts">generateContractRunAsync</a>({ ...params }) -> Mercoa.GenerateContractAsyncResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Generate a new contract object from a Base64 encoded PDF of a contract. This endpoint will return immediately and the contract will be generated asynchronously.

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
await client.contract.generateContractRunAsync({
    document:
        "data:application/pdf;base64,JVBERi0xLjEKJcKlwrHDqwoKMSAwIG9iagogIDw8IC9UeXBlIC9DYXRhbG9nCiAgICAgL1BhZ2VzIDIgMCBSCiAgPj4KZW5kb2JqCgoyIDAgb2JqCiAgPDwgL1R5cGUgL1BhZ2VzCiAgICAgL0tpZHMgWzMgMCBSXQogICAgIC9Db3VudCAxCiAgICAgL01lZGlhQm94IFswIDAgMzAwIDE0NF0KICA+PgplbmRvYmoKCjMgMCBvYmoKICA8PCAgL1R5cGUgL1BhZ2UKICAgICAgL1BhcmVudCAyIDAgUgogICAgICAvUmVzb3VyY2VzCiAgICAgICA8PCAvRm9udAogICAgICAgICAgIDw8IC9GMQogICAgICAgICAgICAgICA8PCAvVHlwZSAvRm9udAogICAgICAgICAgICAgICAgICAvU3VidHlwZSAvVHlwZTEKICAgICAgICAgICAgICAgICAgL0Jhc2VGb250IC9UaW1lcy1Sb21hbgogICAgICAgICAgICAgICA+PgogICAgICAgICAgID4+CiAgICAgICA+PgogICAgICAvQ29udGVudHMgNCAwIFIKICA+PgplbmRvYmoKCjQgMCBvYmoKICA8PCAvTGVuZ3RoIDU1ID4+CnN0cmVhbQogIEJUCiAgICAvRjEgMTggVGYKICAgIDAgMCBUZAogICAgKEhlbGxvIFdvcmxkKSBUagogIEVUCmVuZHN0cmVhbQplbmRvYmoKCnhyZWYKMCA1CjAwMDAwMDAwMDAgNjU1MzUgZiAKMDAwMDAwMDAxOCAwMDAwMCBuIAowMDAwMDAwMDc3IDAwMDAwIG4gCjAwMDAwMDAxNzggMDAwMDAgbiAKMDAwMDAwMDQ1NyAwMDAwMCBuIAp0cmFpbGVyCiAgPDwgIC9Sb290IDEgMCBSCiAgICAgIC9TaXplIDUKICA+PgpzdGFydHhyZWYKNTY1CiUlRU9GCg==",
    creatorEntityId: "ent_8545a84e-a45f-41bf-bdf1-33b42a55812c",
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

**request:** `Mercoa.GenerateContractRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Contract.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.contract.<a href="/src/api/resources/contract/client/Client.ts">generateContractGetAsync</a>(jobId) -> Mercoa.GenerateContractAsyncJobResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Get the status and results of an asynchronous contract generation job.

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
await client.contract.generateContractGetAsync("cntgen_d6734204-ae46-4fe9-a0c5-bd2763d40c9b");
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

**jobId:** `Mercoa.ContractJobId` — Job ID

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Contract.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.contract.<a href="/src/api/resources/contract/client/Client.ts">previewInvoices</a>({ ...params }) -> Mercoa.InvoiceResponse[]</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Generate previews of the invoices that will be created from the provided contract.

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
await client.contract.previewInvoices({
    contract: {
        summary:
            "Contract Start Date: January 29, 2025\nParties to the Agreement:\n- Provider (Vendor): [Vendor Name] - Client (Payer): [Client Name]\nFees and Payment Terms:\n- Monthly Recurring Fee: \\$20.00 - Payment Schedule: Fees are payable in advance on the 1st day of each month. - First Payment Date: February 1, 2025 - Payment Method: Via credit card to the account designated by Provider. - Payment Due Date: Payment is due 5 days after the invoice date.\n",
        recurrences: [
            {
                rrule: "DTSTART:20250201T000000ZRRULE:FREQ=MONTHLY;INTERVAL=1;BYMONTHDAY=1",
                justification: "Monthly recurring fee billed in advance on the 1st of each month",
                filteredContractSummary:
                    "Contract Start Date: January 29, 2025\nParties to the Agreement:\n- Provider (Vendor): [Vendor Name] - Client (Payer): [Client Name]\nFees and Payment Terms:\n- Monthly Recurring Fee: \\$20.00 - Payment Schedule: Fees are payable in advance on the 1st day of each month. - First Payment Date: February 1, 2025 - Payment Method: Via credit card to the account designated by Provider. - Payment Due Date: Payment is due 5 days after the invoice date.\n",
                invoiceSchema: {
                    lineItems: [
                        {
                            name: "Monthly Subscription Service Fee",
                            unitPrice: 20,
                            currency: "USD",
                            quantity: 1,
                        },
                    ],
                },
            },
        ],
        creatorEntityId: "ent_8545a84e-a45f-41bf-bdf1-33b42a55812c",
        payerId: "ent_8545a84e-a45f-41bf-bdf1-33b42a55812c",
        vendorId: "ent_21661ac1-a2a8-4465-a6c0-64474ba8181d",
    },
    invoiceIndexes: [0],
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

**request:** `Mercoa.contract.PreviewContractInvoicesRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Contract.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.contract.<a href="/src/api/resources/contract/client/Client.ts">applyContractFeedback</a>(contractId, { ...params }) -> Mercoa.ContractResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Apply feedback to a contract, generating an updated contract object. NOTE: This works by re-extracting the contract details with the provided feedback in mind.

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
await client.contract.applyContractFeedback("cnt_3bd62b69-3835-433e-829f-4388a2e46c41", {
    feedback: "Change the monthly fee to $20.00",
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

**contractId:** `Mercoa.ContractId` — Contract ID

</dd>
</dl>

<dl>
<dd>

**request:** `Mercoa.contract.ApplyContractFeedbackRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Contract.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.contract.<a href="/src/api/resources/contract/client/Client.ts">applyInvoiceFeedback</a>(contractId, { ...params }) -> Mercoa.InvoiceResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Apply feedback to an invoice, generating an updated invoice object.

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
await client.contract.applyInvoiceFeedback("cnt_3bd62b69-3835-433e-829f-4388a2e46c41", {
    feedback: "There were 2 subscriptions this month",
    invoiceId: "in_26e7b5d3-a739-4b23-9ad9-6aaa085f47a9",
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

**contractId:** `Mercoa.ContractId` — Contract ID

</dd>
</dl>

<dl>
<dd>

**request:** `Mercoa.contract.ApplyInvoiceFeedbackRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Contract.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.contract.<a href="/src/api/resources/contract/client/Client.ts">find</a>({ ...params }) -> Mercoa.FindContractResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Search contracts for all entities in the organization

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
await client.contract.find({
    creatorEntityId: "ent_8545a84e-a45f-41bf-bdf1-33b42a55812c",
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

**request:** `Mercoa.contract.FindContractRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Contract.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.contract.<a href="/src/api/resources/contract/client/Client.ts">create</a>({ ...params }) -> Mercoa.ContractResponse</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.contract.create({
    summary:
        "Contract Start Date: January 29, 2025\nParties to the Agreement:\n- Provider (Vendor): [Vendor Name] - Client (Payer): [Client Name]\nFees and Payment Terms:\n- Monthly Recurring Fee: \\$20.00 - Payment Schedule: Fees are payable in advance on the 1st day of each month. - First Payment Date: February 1, 2025 - Payment Method: Via credit card to the account designated by Provider. - Payment Due Date: Payment is due 5 days after the invoice date.\n",
    recurrences: [
        {
            rrule: "DTSTART:20250201T000000ZRRULE:FREQ=MONTHLY;INTERVAL=1;BYMONTHDAY=1",
            justification: "Monthly recurring fee billed in advance on the 1st of each month",
            filteredContractSummary:
                "Contract Start Date: January 29, 2025\nParties to the Agreement:\n- Provider (Vendor): [Vendor Name] - Client (Payer): [Client Name]\nFees and Payment Terms:\n- Monthly Recurring Fee: \\$20.00 - Payment Schedule: Fees are payable in advance on the 1st day of each month. - First Payment Date: February 1, 2025 - Payment Method: Via credit card to the account designated by Provider. - Payment Due Date: Payment is due 5 days after the invoice date.\n",
            invoiceSchema: {
                lineItems: [
                    {
                        name: "Monthly Subscription Service Fee",
                        unitPrice: 20,
                        currency: "USD",
                        quantity: 1,
                    },
                ],
            },
        },
    ],
    creatorEntityId: "ent_8545a84e-a45f-41bf-bdf1-33b42a55812c",
    payerId: "ent_8545a84e-a45f-41bf-bdf1-33b42a55812c",
    vendorId: "ent_21661ac1-a2a8-4465-a6c0-64474ba8181d",
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

**request:** `Mercoa.ContractCreateRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Contract.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.contract.<a href="/src/api/resources/contract/client/Client.ts">get</a>(contractId) -> Mercoa.ContractResponse</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.contract.get("cnt_3bd62b69-3835-433e-829f-4388a2e46c41");
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

**contractId:** `Mercoa.ContractId` — Contract ID

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Contract.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.contract.<a href="/src/api/resources/contract/client/Client.ts">update</a>(contractId, { ...params }) -> Mercoa.ContractResponse</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.contract.update("cnt_3bd62b69-3835-433e-829f-4388a2e46c41", {
    summary:
        "Contract Start Date: January 29, 2025\nParties to the Agreement:\n- Provider (Vendor): [Vendor Name] - Client (Payer): [Client Name]\nFees and Payment Terms:\n- Monthly Recurring Fee: \\$20.00 - Payment Schedule: Fees are payable in advance on the 1st day of each month. - First Payment Date: February 1, 2025 - Payment Method: Via credit card to the account designated by Provider. - Payment Due Date: Payment is due 5 days after the invoice date.\n",
    recurrences: [
        {
            rrule: "DTSTART:20250201T000000ZRRULE:FREQ=MONTHLY;INTERVAL=1;BYMONTHDAY=1",
            justification: "Monthly recurring fee billed in advance on the 1st of each month",
            filteredContractSummary:
                "Contract Start Date: January 29, 2025\nParties to the Agreement:\n- Provider (Vendor): [Vendor Name] - Client (Payer): [Client Name]\nFees and Payment Terms:\n- Monthly Recurring Fee: \\$20.00 - Payment Schedule: Fees are payable in advance on the 1st day of each month. - First Payment Date: February 1, 2025 - Payment Method: Via credit card to the account designated by Provider. - Payment Due Date: Payment is due 5 days after the invoice date.\n",
            invoiceSchema: {
                lineItems: [
                    {
                        name: "Monthly Subscription Service Fee",
                        unitPrice: 20,
                        currency: "USD",
                        quantity: 1,
                    },
                ],
            },
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

**contractId:** `Mercoa.ContractId` — Contract ID

</dd>
</dl>

<dl>
<dd>

**request:** `Mercoa.ContractUpdateRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Contract.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.contract.<a href="/src/api/resources/contract/client/Client.ts">delete</a>(contractId) -> void</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.contract.delete("cnt_3bd62b69-3835-433e-829f-4388a2e46c41");
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

**contractId:** `Mercoa.ContractId` — Contract ID

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Contract.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

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
await client.entityGroup.delete("entityGroupId");
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

Create entity user that will be added to all entities in the group. If a user with the same foreignId already exists, the user will be updated with the new information.

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
await client.entityGroup.user.delete("entityGroupId", "foreignId");
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

<details><summary><code>client.entityGroup.user.<a href="/src/api/resources/entityGroup/resources/user/client/Client.ts">sync</a>(entityGroupId, { ...params }) -> void</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Sync entity group users. This will add users to entities that do not have them and remove users from entities that have them.

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
await client.entityGroup.user.sync("entg_8545a84e-a45f-41bf-bdf1-33b42a55812c", {
    filterRoles: ["approver", "viewer"],
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

**request:** `Mercoa.EntityGroupUserSyncRequest`

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
await client.entity.delete("entityId");
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
await client.entity.sendOnboardingLink("entityId", {
    type: "PAYEE",
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
    "log_8545a84e-a45f-41bf-bdf1-33b42a55812c",
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
    "pm_4794d597-70dc-4fec-b6ec-c5988e759769",
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
    },
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
    "pm_4794d597-70dc-4fec-b6ec-c5988e759769",
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

<details><summary><code>client.entity.paymentMethod.<a href="/src/api/resources/entity/resources/paymentMethod/client/Client.ts">plaidLinkToken</a>(entityId, { ...params }) -> string</code></summary>
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
await client.entity.paymentMethod.plaidLinkToken("ent_8545a84e-a45f-41bf-bdf1-33b42a55812c", {
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

**request:** `Mercoa.entity.paymentMethod.PlaidLinkTokenRequest`

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

<details><summary><code>client.entity.paymentMethod.<a href="/src/api/resources/entity/resources/paymentMethod/client/Client.ts">cardLinkToken</a>(entityId) -> Mercoa.CardLinkTokenResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Get a card link token for an entity. This token is used by the frontend components to generate a PCI compliant form to add a card to the entity.

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
await client.entity.paymentMethod.cardLinkToken("ent_8545a84e-a45f-41bf-bdf1-33b42a55812c");
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

**requestOptions:** `PaymentMethod.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.entity.paymentMethod.<a href="/src/api/resources/entity/resources/paymentMethod/client/Client.ts">events</a>(entityId, paymentMethodId, { ...params }) -> Mercoa.PaymentMethodEventsResponse</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.entity.paymentMethod.events(
    "ent_8545a84e-a45f-41bf-bdf1-33b42a55812c",
    "pm_4794d597-70dc-4fec-b6ec-c5988e759769",
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

**request:** `Mercoa.entity.paymentMethod.PaymentMethodEventsRequest`

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
    },
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
await client.entity.user.delete("entityId", "userId");
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
    },
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
