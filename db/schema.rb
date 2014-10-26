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

ActiveRecord::Schema.define(version: 20141026183231) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "admin_users", force: true do |t|
    t.string   "first_name",      limit: 25
    t.string   "string",          limit: 25
    t.string   "last_name",       limit: 25
    t.string   "email",           limit: 100, default: "", null: false
    t.string   "hashed_password", limit: 40
    t.datetime "created_at"
    t.datetime "updated_at"
    t.string   "username",        limit: 25
  end

  add_index "admin_users", ["username"], name: "index_admin_users_on_username", using: :btree

  create_table "admin_users_pages", id: false, force: true do |t|
    t.integer "admin_user_id"
    t.integer "page_id"
  end

  add_index "admin_users_pages", ["admin_user_id", "page_id"], name: "index_admin_users_pages_on_admin_user_id_and_page_id", using: :btree

  create_table "markers", force: true do |t|
    t.string   "name",                      limit: 25
    t.string   "string",                    limit: 25
    t.string   "description"
    t.float    "lat"
    t.float    "lang"
    t.text     "content"
    t.string   "marker_image_file_name"
    t.string   "marker_image_content_type"
    t.integer  "marker_image_file_size"
    t.datetime "marker_image_updated_at"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  add_index "markers", ["name"], name: "index_markers_on_name", using: :btree

  create_table "pages", force: true do |t|
    t.integer  "subject_id"
    t.string   "name"
    t.text     "permalink"
    t.integer  "position"
    t.boolean  "visible",    default: false
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  add_index "pages", ["permalink"], name: "index_pages_on_permalink", using: :btree
  add_index "pages", ["subject_id"], name: "index_pages_on_subject_id", using: :btree

  create_table "routes", force: true do |t|
    t.string   "name",        limit: 25
    t.string   "string",      limit: 25
    t.string   "description"
    t.float    "start_lat"
    t.float    "start_lang"
    t.float    "end_lat"
    t.float    "end_lang"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  add_index "routes", ["name"], name: "index_routes_on_name", using: :btree

  create_table "section_edits", force: true do |t|
    t.integer  "admin_user_id"
    t.integer  "section_id"
    t.string   "summary"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  add_index "section_edits", ["admin_user_id", "section_id"], name: "index_section_edits_on_admin_user_id_and_section_id", using: :btree

  create_table "sections", force: true do |t|
    t.integer  "page_id"
    t.string   "name"
    t.integer  "position"
    t.boolean  "visible",      default: false
    t.string   "content_type"
    t.text     "content"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  add_index "sections", ["page_id"], name: "index_sections_on_page_id", using: :btree

  create_table "subjects", force: true do |t|
    t.string   "name"
    t.integer  "position"
    t.boolean  "visible",            default: false
    t.datetime "created_at"
    t.datetime "updated_at"
    t.string   "image_file_name"
    t.string   "image_content_type"
    t.integer  "image_file_size"
    t.datetime "image_updated_at"
  end

  create_table "users", force: true do |t|
    t.string   "username",                   limit: 25
    t.string   "string",                     limit: 25
    t.string   "email",                                 default: "", null: false
    t.string   "password_digest",            limit: 40
    t.string   "profile_image_file_name"
    t.string   "profile_image_content_type"
    t.integer  "profile_image_file_size"
    t.datetime "profile_image_updated_at"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  add_index "users", ["username"], name: "index_users_on_username", using: :btree

end
