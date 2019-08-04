class CreateTables < ActiveRecord::Migration[5.2]
  def change
    create_table "categories", force: :cascade do |t|
      t.string "name", null: false
      t.datetime "created_at", null: false
      t.datetime "updated_at", null: false
    end

    create_table "businesses", force: :cascade do |t|
      t.string "name", null: false
      t.string "address", null: false
      t.string "phone", null: false
      t.string "website", null: false
      t.float "latitude", null: false
      t.float "longitude", null: false
      t.integer "category_id", null: false
      t.datetime "created_at", null: false
      t.datetime "updated_at", null: false
      t.string "hours", default: [], array: true
      t.integer "rating"
      t.string "tags", default: [], array: true
      t.index ["category_id"], name: "index_businesses_on_category_id"
    end

    create_table "reviews", force: :cascade do |t|
      t.text "body", null: false
      t.integer "rating", null: false
      t.integer "user_id", null: false
      t.integer "business_id", null: false
      t.datetime "created_at", null: false
      t.datetime "updated_at", null: false
      t.index ["business_id"], name: "index_reviews_on_business_id"
      t.index ["user_id"], name: "index_reviews_on_user_id"
    end

    create_table "users", force: :cascade do |t|
      t.string "email", null: false
      t.string "first_name", null: false
      t.string "last_name", null: false
      t.string "password_digest", null: false
      t.string "session_token", null: false
      t.datetime "created_at", null: false
      t.datetime "updated_at", null: false
      t.string "zip_code"
      t.string "month"
      t.string "day"
      t.string "year"
      t.index ["email"], name: "index_users_on_email", unique: true
      t.index ["session_token"], name: "index_users_on_session_token", unique: true
    end
  end 
end

