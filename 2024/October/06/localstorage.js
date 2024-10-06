const ACCOUNT_STORAGE_KEY = 'accounts';


// Utility functions
export const createId = {
    makeId() {
        let id = '';
        const possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        for (let i = 0; i < 5; i++) {
            id += possible.charAt(Math.floor(Math.random() * possible.length));
        }
        return id;
    },
    getFromStorage(key) {
        return JSON.parse(localStorage.getItem(key)) || [];
    },
    saveToStorage(key, value) {
        localStorage.setItem(key, JSON.stringify(value));
    }
};

// Employee CRUD operations
export const EmployeeService = {
    getAccounts() {
        return createId.getFromStorage(ACCOUNT_STORAGE_KEY);
    },
    addAccount(account) {
        const accounts = this.getAccounts();
        accounts.push(account);
        createId.saveToStorage(ACCOUNT_STORAGE_KEY, accounts);
    },
    updateAccount(id, updatedAccount) {
        const accounts = this.getEmployees().map(acc => acc.id === id ? updatedAccount : acc);
        createId.saveToStorage(ACCOUNT_STORAGE_KEY, accounts);
    },
};
