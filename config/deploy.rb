# config valid only for current version of Capistrano
lock "3.7.2"

set :application, "ldc-qa-demo"
set :scm, :git
set :repo_url, "https://github.com/curationexperts/ldc-qa-demo.git"
set :deploy_to, '/opt/ldc-qa-demo'

set :log_level, :debug
set :bundle_flags, '--deployment'
set :bundle_env_variables, nokogiri_use_system_libraries: 1

set :keep_releases, 5
set :passenger_restart_with_touch, true
set :assets_prefix, "#{shared_path}/public/assets"

SSHKit.config.command_map[:rake] = 'bundle exec rake'

# Default branch is :master
set :branch, ENV['REVISION'] || ENV['BRANCH_NAME'] || 'master'

set :linked_dirs, %w(
  tmp/pids
  tmp/cache
  tmp/sockets
  public/assets
  config/environments
)

set :linked_files,
    %w(
      config/blacklight.yml
      config/database.yml
      config/fedora.yml
      config/redis.yml
      config/resque-pool.yml
      config/secrets.yml
      config/solr.yml
    )

# Default value for :format is :airbrussh.
# set :format, :airbrussh

# You can configure the Airbrussh format using :format_options.
# These are the defaults.
# set :format_options, command_output: true, log_file: "log/capistrano.log", color: :auto, truncate: :auto

# Default value for :pty is false
# set :pty, true

# Default value for default_env is {}
# set :default_env, { path: "/opt/ruby/bin:$PATH" }
