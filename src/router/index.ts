import { createRouter, createWebHistory } from 'vue-router'

// Import your components
const Overview = () => import('../components/Overview.vue')
const Transactions = () => import('../components/Transactions.vue')
const Account = () => import('../components/Account.vue')
const Investment = () => import('../components/Investment.vue')
const Cards = () => import('../components/Cards.vue')
const Loans = () => import('../components/Loans.vue')
const Services = () => import('../components/Services.vue')
const Privileges = () => import('../components/Privileges.vue')
const Settings = () => import('../components/Settings.vue')

const routes = [
    {
        path: '/',
        name: 'Overview',
        component: Overview
    },
    {
        path: '/transactions',
        name: 'Transactions',
        component: Transactions
    },
    {
        path: '/account',
        name: 'Account',
        component: Account
    },
    {
        path: '/investment',
        name: 'Investment',
        component: Investment
    },
    {
        path: '/cards',
        name: 'Cards',
        component: Cards
    },
    {
        path: '/loans',
        name: 'Loans',
        component: Loans
    },
    {
        path: '/services',
        name: 'Services',
        component: Services
    },
    {
        path: '/privileges',
        name: 'Privileges',
        component: Privileges
    },
    {
        path: '/settings',
        name: 'Settings',
        component: Settings
    }
]

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes
})

export default router