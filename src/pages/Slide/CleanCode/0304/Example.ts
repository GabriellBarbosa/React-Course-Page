const example1 = 
`class ClientRepository {
    // ...
    async getByName(name) {
        const clientFound = await this._find({ name: name });
        if (clientFound) this._client = clientFound;
        return clientFound;
    }
    // ...
}`;

const example2 = 
`class ClientRepository {
    // ...
    async getByNameAndSet(name) {
        const clientFound = await this._find({ name: name });
        if (clientFound) this._client = clientFound;
        return clientFound;
    }
    // ...
}`;

const example2Resolved = 
`class ClientRepository {
    // ...
    async getByName(name) {
        return await this._find({ name: name });
    }

    setClient(client) {
        if (client) this._client = client;
    }
    // ...
}`;

export { 
    example1,
    example2,
    example2Resolved
};