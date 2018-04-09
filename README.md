+--------+-----------+-----------------------------------------+------------------+---------------------------------------------------------------------------+--------------+
| Domain | Method    | URI                                     | Name             | Action                                                                    | Middleware   |
+--------+-----------+-----------------------------------------+------------------+---------------------------------------------------------------------------+--------------+
|        | GET|HEAD  | /                                       |                  | Closure                                                                   | web          |
|        | POST      | api/get-details                         |                  | App\Http\Controllers\PassportController@getDetails                        | api,auth:api |
|        | GET|HEAD  | api/leaves                              | leaves.index     | App\Http\Controllers\LeaveController@index                                | api          |
|        | POST      | api/leaves                              | leaves.store     | App\Http\Controllers\LeaveController@store                                | api          |
|        | DELETE    | api/leaves/{leaf}                       | leaves.destroy   | App\Http\Controllers\LeaveController@destroy                              | api          |
|        | PUT|PATCH | api/leaves/{leaf}                       | leaves.update    | App\Http\Controllers\LeaveController@update                               | api          |
|        | GET|HEAD  | api/leaves/{leaf}                       | leaves.show      | App\Http\Controllers\LeaveController@show                                 | api          |
|        | GET|HEAD  | api/leaves/{leave}/approve              |                  | App\Http\Controllers\LeaveController@approve                              | api          |
|        | GET|HEAD  | api/leaves/{leave}/deny                 |                  | App\Http\Controllers\LeaveController@deny                                 | api          |
|        | POST      | api/login                               |                  | App\Http\Controllers\Oauth@login                                          | api          |
|        | GET|HEAD  | api/me/leaves                           |                  | App\Http\Controllers\UserController@leaves                                | api          |
|        | GET|HEAD  | api/me/tasks                            |                  | App\Http\Controllers\UserController@tasks                                 | api          |
|        | POST      | api/register                            |                  | App\Http\Controllers\Oauth@register                                       | api          |
|        | GET|HEAD  | api/tasks                               | tasks.index      | App\Http\Controllers\TaskController@index                                 | api,auth     |
|        | POST      | api/tasks                               | tasks.store      | App\Http\Controllers\TaskController@store                                 | api,auth     |
|        | GET|HEAD  | api/tasks/{task}                        | tasks.show       | App\Http\Controllers\TaskController@show                                  | api,auth     |
|        | DELETE    | api/tasks/{task}                        | tasks.destroy    | App\Http\Controllers\TaskController@destroy                               | api,auth     |
|        | PUT|PATCH | api/tasks/{task}                        | tasks.update     | App\Http\Controllers\TaskController@update                                | api,auth     |
|        | GET|HEAD  | api/user                                |                  | App\Http\Controllers\UserController@current                               | api          |
|        | GET|HEAD  | api/users                               | users.index      | App\Http\Controllers\UserController@index                                 | api          |
|        | POST      | api/users                               | users.store      | App\Http\Controllers\UserController@store                                 | api          |
|        | GET|HEAD  | api/users/create                        | users.create     | App\Http\Controllers\UserController@create                                | api          |
|        | GET|HEAD  | api/users/{user}                        | users.show       | App\Http\Controllers\UserController@show                                  | api          |
|        | PUT|PATCH | api/users/{user}                        | users.update     | App\Http\Controllers\UserController@update                                | api          |
|        | DELETE    | api/users/{user}                        | users.destroy    | App\Http\Controllers\UserController@destroy                               | api          |
|        | GET|HEAD  | api/users/{user}/edit                   | users.edit       | App\Http\Controllers\UserController@edit                                  | api          |
|        | GET|HEAD  | home                                    | home             | App\Http\Controllers\HomeController@index                                 | web,auth     |
|        | POST      | login                                   |                  | App\Http\Controllers\Auth\LoginController@login                           | web,guest    |
|        | GET|HEAD  | login                                   | login            | App\Http\Controllers\Auth\LoginController@showLoginForm                   | web,guest    |
|        | POST      | logout                                  | logout           | App\Http\Controllers\Auth\LoginController@logout                          | web          |
|        | POST      | oauth/authorize                         |                  | Laravel\Passport\Http\Controllers\ApproveAuthorizationController@approve  | web,auth     |
|        | DELETE    | oauth/authorize                         |                  | Laravel\Passport\Http\Controllers\DenyAuthorizationController@deny        | web,auth     |
|        | GET|HEAD  | oauth/authorize                         |                  | Laravel\Passport\Http\Controllers\AuthorizationController@authorize       | web,auth     |
|        | GET|HEAD  | oauth/clients                           |                  | Laravel\Passport\Http\Controllers\ClientController@forUser                | web,auth     |
|        | POST      | oauth/clients                           |                  | Laravel\Passport\Http\Controllers\ClientController@store                  | web,auth     |
|        | PUT       | oauth/clients/{client_id}               |                  | Laravel\Passport\Http\Controllers\ClientController@update                 | web,auth     |
|        | DELETE    | oauth/clients/{client_id}               |                  | Laravel\Passport\Http\Controllers\ClientController@destroy                | web,auth     |
|        | POST      | oauth/personal-access-tokens            |                  | Laravel\Passport\Http\Controllers\PersonalAccessTokenController@store     | web,auth     |
|        | GET|HEAD  | oauth/personal-access-tokens            |                  | Laravel\Passport\Http\Controllers\PersonalAccessTokenController@forUser   | web,auth     |
|        | DELETE    | oauth/personal-access-tokens/{token_id} |                  | Laravel\Passport\Http\Controllers\PersonalAccessTokenController@destroy   | web,auth     |
|        | GET|HEAD  | oauth/scopes                            |                  | Laravel\Passport\Http\Controllers\ScopeController@all                     | web,auth     |
|        | POST      | oauth/token                             |                  | Laravel\Passport\Http\Controllers\AccessTokenController@issueToken        | throttle     |
|        | POST      | oauth/token/refresh                     |                  | Laravel\Passport\Http\Controllers\TransientTokenController@refresh        | web,auth     |
|        | GET|HEAD  | oauth/tokens                            |                  | Laravel\Passport\Http\Controllers\AuthorizedAccessTokenController@forUser | web,auth     |
|        | DELETE    | oauth/tokens/{token_id}                 |                  | Laravel\Passport\Http\Controllers\AuthorizedAccessTokenController@destroy | web,auth     |
|        | POST      | password/email                          | password.email   | App\Http\Controllers\Auth\ForgotPasswordController@sendResetLinkEmail     | web,guest    |
|        | GET|HEAD  | password/reset                          | password.request | App\Http\Controllers\Auth\ForgotPasswordController@showLinkRequestForm    | web,guest    |
|        | POST      | password/reset                          |                  | App\Http\Controllers\Auth\ResetPasswordController@reset                   | web,guest    |
|        | GET|HEAD  | password/reset/{token}                  | password.reset   | App\Http\Controllers\Auth\ResetPasswordController@showResetForm           | web,guest    |
|        | GET|HEAD  | register                                | register         | App\Http\Controllers\Auth\RegisterController@showRegistrationForm         | web,guest    |
|        | POST      | register                                |                  | App\Http\Controllers\Auth\RegisterController@register                     | web,guest    |
|        | GET|HEAD  | settings                                | settings         | App\Http\Controllers\SettingsController@index                             | web,auth     |
+--------+-----------+-----------------------------------------+------------------+---------------------------------------------------------------------------+--------------+


# tender-bartik

> A Vue.js project

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build
```

For detailed explanation on how things work, consult the [docs for vue-loader](http://vuejs.github.io/vue-loader).
