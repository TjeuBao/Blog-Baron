class CreateNotification < ActiveRecord::Migration[6.0]
  def change
    create_table :notifications do |t|
      t.references :user
      t.text :content

      t.timestamps
    end
  end
end
