# root-app

## App Architecture Idea

Since the idea is to have each logical module a separate micro frontend app, here is my intial thought on it:

| Module Name | Registered as | Type | Description |
|-------------|---------------|------|-------------|
| App Root | @mf-app | Root App | Root App | Bootstraps all apps into one |
| Navbar | @mf-app/navbar | common component module | should be used globally |
| Dashboard | @mf-app/dashboard | page module | Dashboard/home page |
| List | @mf-app/list | page module | Product/Item Listing page |
| Detail | @mf-app/detail | page module | Product/Item Detail page |

