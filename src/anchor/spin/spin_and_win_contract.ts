export type SpinAndWinContract = {
  "version": "0.1.0",
  "name": "spin_and_win_contract",
  "instructions": [
    {
      "name": "initialize",
      "accounts": [
        {
          "name": "superAdmin",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "pool",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": []
    },
    {
      "name": "addAdmin",
      "accounts": [
        {
          "name": "superAdmin",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "adminPda",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "admin",
          "type": "publicKey"
        }
      ]
    },
    {
      "name": "clearAdmin",
      "accounts": [
        {
          "name": "superAdmin",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "adminPda",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": []
    },
    {
      "name": "addSpinGame",
      "accounts": [
        {
          "name": "admin",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "adminPda",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "spinGamePda",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "spinGameSeed",
          "type": "string"
        }
      ]
    },
    {
      "name": "removeSpinGame",
      "accounts": [
        {
          "name": "admin",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "adminPda",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "spinGamePda",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": []
    },
    {
      "name": "spinGameSetInfo",
      "accounts": [
        {
          "name": "admin",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "adminPda",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "spinGamePda",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "spinGameSeed",
          "type": "string"
        },
        {
          "name": "devWallet",
          "type": "publicKey"
        },
        {
          "name": "devFee",
          "type": "u32"
        },
        {
          "name": "burnWallet",
          "type": "publicKey"
        },
        {
          "name": "burnFee",
          "type": "u32"
        },
        {
          "name": "marketWallet",
          "type": "publicKey"
        },
        {
          "name": "marektFee",
          "type": "u32"
        },
        {
          "name": "tokenMint",
          "type": "publicKey"
        },
        {
          "name": "amount",
          "type": "u64"
        }
      ]
    },
    {
      "name": "spinGameAddToken",
      "accounts": [
        {
          "name": "admin",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "adminPda",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "spinGamePda",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "spinGameSeed",
          "type": "string"
        },
        {
          "name": "tokenType",
          "type": "u8"
        },
        {
          "name": "tokenMint",
          "type": "publicKey"
        },
        {
          "name": "tokenAmount",
          "type": "u64"
        },
        {
          "name": "tokenRatio",
          "type": "u32"
        }
      ]
    },
    {
      "name": "spinGameAddNftList",
      "accounts": [
        {
          "name": "admin",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "adminPda",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "spinGamePda",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "spinGameSeed",
          "type": "string"
        },
        {
          "name": "nftList",
          "type": {
            "defined": "NFTQueue"
          }
        },
        {
          "name": "ratio",
          "type": "u32"
        }
      ]
    },
    {
      "name": "spinGameClearTokenList",
      "accounts": [
        {
          "name": "admin",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "adminPda",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "spinGamePda",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "spinGameSeed",
          "type": "string"
        }
      ]
    },
    {
      "name": "spinGameClearNftList",
      "accounts": [
        {
          "name": "admin",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "adminPda",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "spinGamePda",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "spinGameSeed",
          "type": "string"
        }
      ]
    },
    {
      "name": "playSpinGame",
      "accounts": [
        {
          "name": "user",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "spinGamePda",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "tokenMint",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "userAta",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "devAta",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "burnAta",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "marketAta",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "referrerAta",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "vaultAta",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "userState",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "associatedTokenProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "tokenProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "rent",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "pythAccount",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "spinGameSeed",
          "type": "string"
        },
        {
          "name": "rand",
          "type": "u32"
        }
      ]
    },
    {
      "name": "claim",
      "accounts": [
        {
          "name": "user",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "spinGamePda",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "userState",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "rewardMint",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "vaultAta",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "userAta",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "tokenProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "claimIndex",
          "type": "u16"
        }
      ]
    },
    {
      "name": "withdraw",
      "accounts": [
        {
          "name": "superAdmin",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "spinGamePda",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "tokenMint",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "vaultAta",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "recipientAta",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "tokenProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "spinGameSeed",
          "type": "string"
        },
        {
          "name": "amount",
          "type": "u64"
        }
      ]
    }
  ],
  "accounts": [
    {
      "name": "adminAcc",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "adminList",
            "type": {
              "array": [
                "publicKey",
                15
              ]
            }
          },
          {
            "name": "count",
            "type": "u16"
          }
        ]
      }
    },
    {
      "name": "poolAcc",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "superadmin",
            "type": "publicKey"
          }
        ]
      }
    },
    {
      "name": "spinGameAcc",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "devWallet",
            "type": "publicKey"
          },
          {
            "name": "devFee",
            "type": "u32"
          },
          {
            "name": "burnWallet",
            "type": "publicKey"
          },
          {
            "name": "burnFee",
            "type": "u32"
          },
          {
            "name": "marketWallet",
            "type": "publicKey"
          },
          {
            "name": "marketFee",
            "type": "u32"
          },
          {
            "name": "referFee",
            "type": "u32"
          },
          {
            "name": "tokenMint",
            "type": "publicKey"
          },
          {
            "name": "amount",
            "type": "u64"
          },
          {
            "name": "rewardTypeList",
            "type": {
              "array": [
                "u8",
                15
              ]
            }
          },
          {
            "name": "rewardToken",
            "type": {
              "array": [
                "publicKey",
                15
              ]
            }
          },
          {
            "name": "rewardNft",
            "type": {
              "array": [
                {
                  "defined": "NFTQueue"
                },
                15
              ]
            }
          },
          {
            "name": "rewardTokenAmount",
            "type": {
              "array": [
                "u64",
                15
              ]
            }
          },
          {
            "name": "tokenRatio",
            "type": {
              "array": [
                "u32",
                15
              ]
            }
          },
          {
            "name": "nftRatio",
            "type": {
              "array": [
                "u32",
                15
              ]
            }
          },
          {
            "name": "tokenCount",
            "type": "u16"
          },
          {
            "name": "nftCount",
            "type": "u16"
          }
        ]
      }
    },
    {
      "name": "userState",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "typeList",
            "type": {
              "array": [
                "u8",
                10
              ]
            }
          },
          {
            "name": "claimList",
            "type": {
              "array": [
                "publicKey",
                10
              ]
            }
          },
          {
            "name": "amountList",
            "type": {
              "array": [
                "u64",
                10
              ]
            }
          },
          {
            "name": "spinGameList",
            "type": {
              "array": [
                "publicKey",
                10
              ]
            }
          },
          {
            "name": "count",
            "type": "u16"
          },
          {
            "name": "referrer",
            "type": "publicKey"
          }
        ]
      }
    }
  ],
  "types": [
    {
      "name": "NFTQueue",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "nftList",
            "type": {
              "array": [
                "publicKey",
                10
              ]
            }
          },
          {
            "name": "count",
            "type": "u16"
          }
        ]
      }
    }
  ],
  "errors": [
    {
      "code": 6000,
      "name": "CountOverflowAddItem",
      "msg": "Count Overflow To Add Item"
    },
    {
      "code": 6001,
      "name": "InvalidTokenType",
      "msg": "Invalid Token Type"
    },
    {
      "code": 6002,
      "name": "InvalidPDA",
      "msg": "Invalid PDA"
    },
    {
      "code": 6003,
      "name": "InvalidAdmin",
      "msg": "Invalid Admin"
    },
    {
      "code": 6004,
      "name": "InvalidSpinGame",
      "msg": "Invalid Spin Game"
    },
    {
      "code": 6005,
      "name": "InvalidTokenMint",
      "msg": "Invalid Token Mint"
    },
    {
      "code": 6006,
      "name": "InvalidATA",
      "msg": "Invalid ATA"
    }
  ]
};

export const IDL: SpinAndWinContract = {
  "version": "0.1.0",
  "name": "spin_and_win_contract",
  "instructions": [
    {
      "name": "initialize",
      "accounts": [
        {
          "name": "superAdmin",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "pool",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": []
    },
    {
      "name": "addAdmin",
      "accounts": [
        {
          "name": "superAdmin",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "adminPda",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "admin",
          "type": "publicKey"
        }
      ]
    },
    {
      "name": "clearAdmin",
      "accounts": [
        {
          "name": "superAdmin",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "adminPda",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": []
    },
    {
      "name": "addSpinGame",
      "accounts": [
        {
          "name": "admin",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "adminPda",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "spinGamePda",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "spinGameSeed",
          "type": "string"
        }
      ]
    },
    {
      "name": "removeSpinGame",
      "accounts": [
        {
          "name": "admin",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "adminPda",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "spinGamePda",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": []
    },
    {
      "name": "spinGameSetInfo",
      "accounts": [
        {
          "name": "admin",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "adminPda",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "spinGamePda",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "spinGameSeed",
          "type": "string"
        },
        {
          "name": "devWallet",
          "type": "publicKey"
        },
        {
          "name": "devFee",
          "type": "u32"
        },
        {
          "name": "burnWallet",
          "type": "publicKey"
        },
        {
          "name": "burnFee",
          "type": "u32"
        },
        {
          "name": "marketWallet",
          "type": "publicKey"
        },
        {
          "name": "marektFee",
          "type": "u32"
        },
        {
          "name": "tokenMint",
          "type": "publicKey"
        },
        {
          "name": "amount",
          "type": "u64"
        }
      ]
    },
    {
      "name": "spinGameAddToken",
      "accounts": [
        {
          "name": "admin",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "adminPda",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "spinGamePda",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "spinGameSeed",
          "type": "string"
        },
        {
          "name": "tokenType",
          "type": "u8"
        },
        {
          "name": "tokenMint",
          "type": "publicKey"
        },
        {
          "name": "tokenAmount",
          "type": "u64"
        },
        {
          "name": "tokenRatio",
          "type": "u32"
        }
      ]
    },
    {
      "name": "spinGameAddNftList",
      "accounts": [
        {
          "name": "admin",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "adminPda",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "spinGamePda",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "spinGameSeed",
          "type": "string"
        },
        {
          "name": "nftList",
          "type": {
            "defined": "NFTQueue"
          }
        },
        {
          "name": "ratio",
          "type": "u32"
        }
      ]
    },
    {
      "name": "spinGameClearTokenList",
      "accounts": [
        {
          "name": "admin",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "adminPda",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "spinGamePda",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "spinGameSeed",
          "type": "string"
        }
      ]
    },
    {
      "name": "spinGameClearNftList",
      "accounts": [
        {
          "name": "admin",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "adminPda",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "spinGamePda",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "spinGameSeed",
          "type": "string"
        }
      ]
    },
    {
      "name": "playSpinGame",
      "accounts": [
        {
          "name": "user",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "spinGamePda",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "tokenMint",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "userAta",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "devAta",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "burnAta",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "marketAta",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "referrerAta",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "vaultAta",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "userState",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "associatedTokenProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "tokenProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "rent",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "pythAccount",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "spinGameSeed",
          "type": "string"
        },
        {
          "name": "rand",
          "type": "u32"
        }
      ]
    },
    {
      "name": "claim",
      "accounts": [
        {
          "name": "user",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "spinGamePda",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "userState",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "rewardMint",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "vaultAta",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "userAta",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "tokenProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "claimIndex",
          "type": "u16"
        }
      ]
    },
    {
      "name": "withdraw",
      "accounts": [
        {
          "name": "superAdmin",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "spinGamePda",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "tokenMint",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "vaultAta",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "recipientAta",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "tokenProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "spinGameSeed",
          "type": "string"
        },
        {
          "name": "amount",
          "type": "u64"
        }
      ]
    }
  ],
  "accounts": [
    {
      "name": "adminAcc",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "adminList",
            "type": {
              "array": [
                "publicKey",
                15
              ]
            }
          },
          {
            "name": "count",
            "type": "u16"
          }
        ]
      }
    },
    {
      "name": "poolAcc",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "superadmin",
            "type": "publicKey"
          }
        ]
      }
    },
    {
      "name": "spinGameAcc",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "devWallet",
            "type": "publicKey"
          },
          {
            "name": "devFee",
            "type": "u32"
          },
          {
            "name": "burnWallet",
            "type": "publicKey"
          },
          {
            "name": "burnFee",
            "type": "u32"
          },
          {
            "name": "marketWallet",
            "type": "publicKey"
          },
          {
            "name": "marketFee",
            "type": "u32"
          },
          {
            "name": "referFee",
            "type": "u32"
          },
          {
            "name": "tokenMint",
            "type": "publicKey"
          },
          {
            "name": "amount",
            "type": "u64"
          },
          {
            "name": "rewardTypeList",
            "type": {
              "array": [
                "u8",
                15
              ]
            }
          },
          {
            "name": "rewardToken",
            "type": {
              "array": [
                "publicKey",
                15
              ]
            }
          },
          {
            "name": "rewardNft",
            "type": {
              "array": [
                {
                  "defined": "NFTQueue"
                },
                15
              ]
            }
          },
          {
            "name": "rewardTokenAmount",
            "type": {
              "array": [
                "u64",
                15
              ]
            }
          },
          {
            "name": "tokenRatio",
            "type": {
              "array": [
                "u32",
                15
              ]
            }
          },
          {
            "name": "nftRatio",
            "type": {
              "array": [
                "u32",
                15
              ]
            }
          },
          {
            "name": "tokenCount",
            "type": "u16"
          },
          {
            "name": "nftCount",
            "type": "u16"
          }
        ]
      }
    },
    {
      "name": "userState",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "typeList",
            "type": {
              "array": [
                "u8",
                10
              ]
            }
          },
          {
            "name": "claimList",
            "type": {
              "array": [
                "publicKey",
                10
              ]
            }
          },
          {
            "name": "amountList",
            "type": {
              "array": [
                "u64",
                10
              ]
            }
          },
          {
            "name": "spinGameList",
            "type": {
              "array": [
                "publicKey",
                10
              ]
            }
          },
          {
            "name": "count",
            "type": "u16"
          },
          {
            "name": "referrer",
            "type": "publicKey"
          }
        ]
      }
    }
  ],
  "types": [
    {
      "name": "NFTQueue",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "nftList",
            "type": {
              "array": [
                "publicKey",
                10
              ]
            }
          },
          {
            "name": "count",
            "type": "u16"
          }
        ]
      }
    }
  ],
  "errors": [
    {
      "code": 6000,
      "name": "CountOverflowAddItem",
      "msg": "Count Overflow To Add Item"
    },
    {
      "code": 6001,
      "name": "InvalidTokenType",
      "msg": "Invalid Token Type"
    },
    {
      "code": 6002,
      "name": "InvalidPDA",
      "msg": "Invalid PDA"
    },
    {
      "code": 6003,
      "name": "InvalidAdmin",
      "msg": "Invalid Admin"
    },
    {
      "code": 6004,
      "name": "InvalidSpinGame",
      "msg": "Invalid Spin Game"
    },
    {
      "code": 6005,
      "name": "InvalidTokenMint",
      "msg": "Invalid Token Mint"
    },
    {
      "code": 6006,
      "name": "InvalidATA",
      "msg": "Invalid ATA"
    }
  ]
};
