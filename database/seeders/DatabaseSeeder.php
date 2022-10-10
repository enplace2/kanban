<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        \App\Models\User::factory(1)->create();
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
        // \App\Models\User::factory()->create([
        //     'name' => 'Test User',
        //     'email' => 'test@example.com',
        // ]);
    }
}
