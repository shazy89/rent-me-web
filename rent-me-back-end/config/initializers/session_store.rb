if Rails.env === 'production' 
    Rails.application.config.session_store :cookie_store, key: '_rent-me-front-end', domain: 'rent-me-back-end'
  else
    Rails.application.config.session_store :cookie_store, key: '_rent-me-front-end'
  end