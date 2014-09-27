json.array!(@users) do |user|
  json.extract! user, :id, :username, :subdomain, :email, :crypted_password, :password_salt, :persistence_token, :authentication_token
  json.url user_url(user, format: :json)
end
