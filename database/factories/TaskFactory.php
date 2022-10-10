<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Task>
 */
class TaskFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition()
    {
        $description = fake()->sentences();
        return [
            'sprint_id' => '1',
            'name' => fake()->sentence(),
            'description' => implode(" ", $description),
        ];
    }
}
