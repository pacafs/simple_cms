# encoding: UTF-8
# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20140731152541) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "subjects", force: true do |t|
    t.string  "hello"
    t.string  "name",     limit: 25
    t.string  "string",   limit: 25
    t.integer "position"
    t.boolean "visible"
  end

  create_table "users", force: true do |t|
    t.string   "first_name", limit: 25
    t.string   "string",     limit: 25
    t.string   "last_name",  limit: 25
    t.string   "email",                 default: "", null: false
    t.string   "password",   limit: 40
    t.datetime "created_at"
    t.datetime "updated_at"
  end

end
