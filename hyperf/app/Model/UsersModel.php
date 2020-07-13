<?php

declare (strict_types=1);
namespace App\Model;

use Hyperf\DbConnection\Model\Model;
use Qbhy\HyperfAuth\AuthAbility;
use Qbhy\HyperfAuth\Authenticatable;

/**
 */
class UsersModel extends Model implements Authenticatable
{
    use AuthAbility;
    /**
     * The table associated with the model.
     *
     * @var string
     */
    protected $table = 'users';
    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'username',
        'nickname',
        'password',
        'avatar_id'
    ];

    protected $hidden = [
        'password'
    ];
    /**
     * The attributes that should be cast to native types.
     *
     * @var array
     */
    protected $casts = [];
}
