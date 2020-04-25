# root-app

## App Architecture Idea

Since the idea is to have each logical module into a separate micro frontend app with different technologies, here is my intial thought on it:

| Module Name | Registered as     | Type          | Description         | Framework                    |
| ----------- | ----------------- | ------------- | ------------------- | ---------------------------- |
| App Root    | @mf-app           | Root App      | Root App            | Bootstraps all apps into one | -- |
| Navbar      | @mf-app/navbar    | common module | Global Navigation   | React                        |
| Dashboard   | @mf-app/dashboard | page module   | Dashboard page      | Angular                      | React |
| List        | @mf-app/list      | page module   | Product List page   | Angular                      |
| Detail      | @mf-app/detail    | page module   | Product Detail page | Vue                          |
