<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Str;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        \App\Models\User::factory()->create([
            'name' => "test user",
            'email' => 'n.place@proton.me',
            'email_verified_at' => now(),
            'password' => '$2y$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi', // password
            'remember_token' => Str::random(10),
        ]);
        \App\Models\User::factory()->create([
            'name' => "test user",
            'email' => 'test@email.com',
            'email_verified_at' => now(),
            'password' => '$2y$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi', // password
            'remember_token' => Str::random(10),
        ]);

        \App\Models\Project::factory(3)->create();
        \App\Models\Sprint::factory()->create([
            'project_id' => '1',
            'start_date' => now()->modify('-28 days'),
            'end_date' => now()->modify('-14 days'),
            'name' => 'apple',
        ]);
        \App\Models\Sprint::factory()->create([
            'project_id' => '1',
            'start_date' => now()->modify('-14 days'),
            'end_date' => now(),
            'name' => 'boooouuurrns',
        ]);
        \App\Models\Sprint::factory()->create([
            'project_id' => '1',
            'start_date' => now(),
            'end_date' => now()->modify('+14 days'),
            'name' => 'catamaran',
        ]);
        \App\Models\Task::factory(10)->create();
        // \App\Models\User::factory()->create([
        //     'name' => 'Test User',
        //     'email' => 'test@example.com',
        // ]);
    }
}
