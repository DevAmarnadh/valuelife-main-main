import {
  User,
  Transaction,
  NetworkMember,
  NetworkStats,
  DashboardStats,
  Wallet,
  CommissionStructure,
  KYCStatus
} from '../types';
import {
  currentUser as mockCurrentUser,
  transactions as mockTransactions,
  networkMembers as mockNetworkMembers,
  networkStats as mockNetworkStats,
  dashboardStats as mockDashboardStats,
  wallet as mockWallet,
  commissionStructure as mockCommissionStructure
} from '../data/mockData';

// In-memory mock data for static site
let currentUser = { ...mockCurrentUser };
let users = [ { ...mockCurrentUser } ];
let transactions = [ ...mockTransactions ];
let networkMembers = JSON.parse(JSON.stringify(mockNetworkMembers));
let networkStats = { ...mockNetworkStats };
let dashboardStats = { ...mockDashboardStats };
let wallet = { ...mockWallet };
let commissionStructure = { ...mockCommissionStructure };
let kycRequests: any[] = [];

// No-op for static site
export const initializeDatabase = async (): Promise<void> => {
  // No backend, just use mock data
};

export const getCurrentUser = async (): Promise<User | null> => currentUser;
export const updateCurrentUser = async (user: User): Promise<void> => { currentUser = { ...user }; };
export const getAllUsers = async (): Promise<User[]> => users;
export const addUser = async (user: User): Promise<void> => { users.push(user); };

export const getUserNetworkMembers = async (userId: string): Promise<NetworkMember> => networkMembers;
export const getUserNetworkStats = async (userId: string): Promise<NetworkStats> => networkStats;
export const getUserWallet = async (userId: string): Promise<Wallet> => wallet;
export const getUserDashboardStats = async (userId: string): Promise<DashboardStats> => dashboardStats;

export const getAllTransactions = async (): Promise<Transaction[]> => transactions;
export const getUserTransactions = async (userId: string): Promise<Transaction[]> => transactions.filter(t => t.userId === userId);
export const addTransaction = async (transaction: Transaction): Promise<void> => { transactions.push(transaction); };

export const getNetworkMembers = async (): Promise<NetworkMember> => networkMembers;
export const updateNetworkMembers = async (member: NetworkMember): Promise<void> => { networkMembers = member; };
export const getNetworkStats = async (): Promise<NetworkStats> => networkStats;
export const updateNetworkStats = async (stats: NetworkStats): Promise<void> => { networkStats = stats; };
export const getDashboardStats = async (): Promise<DashboardStats> => dashboardStats;
export const updateDashboardStats = async (stats: DashboardStats): Promise<void> => { dashboardStats = stats; };
export const getWallet = async (): Promise<Wallet> => wallet;
export const updateWallet = async (updatedWallet: Wallet): Promise<void> => { wallet = updatedWallet; };
export const getCommissionStructure = async (): Promise<CommissionStructure> => commissionStructure;
export const updateCommissionStructure = async (structure: CommissionStructure): Promise<void> => { commissionStructure = structure; };

export const getAllKycRequests = async (): Promise<any[]> => kycRequests;
export const addKycRequest = async (request: any): Promise<void> => { kycRequests.push(request); };
export const updateKycRequest = async (updatedRequest: any): Promise<void> => {
  const idx = kycRequests.findIndex(r => r.id === updatedRequest.id);
  if (idx !== -1) kycRequests[idx] = updatedRequest;
};

export const addNewUserWithData = async (user: User): Promise<void> => { users.push(user); };
export const getAllUsersForAdmin = async (): Promise<User[]> => users;
export const deleteUser = async (userId: string): Promise<boolean> => {
  const idx = users.findIndex(u => u.id === userId);
  if (idx !== -1) { users.splice(idx, 1); return true; }
  return false;
};
export const updateUserKycStatus = async (userId: string, status: KYCStatus, reviewNotes?: string): Promise<boolean> => true;
export const getAdminStats = async () => ({ users: users.length, transactions: transactions.length });
export const updateUserProfile = async (userId: string, userData: Partial<User>): Promise<boolean> => true;
export const processWithdrawalRequest = async (transactionId: string, approved: boolean): Promise<boolean> => true;
export const validateAdminCredentials = async (username: string, password: string): Promise<boolean> => true;
export const updateAdminCredentials = async (username: string, password: string): Promise<boolean> => true;
export const clearDatabase = async (): Promise<void> => {
  currentUser = { ...mockCurrentUser };
  users = [ { ...mockCurrentUser } ];
  transactions = [ ...mockTransactions ];
  networkMembers = JSON.parse(JSON.stringify(mockNetworkMembers));
  networkStats = { ...mockNetworkStats };
  dashboardStats = { ...mockDashboardStats };
  wallet = { ...mockWallet };
  commissionStructure = { ...mockCommissionStructure };
  kycRequests = [];
}; 