/**
 * Life Quotes Logic
 * Adapted from React implementation to Vanilla JS
 */

const app = {
    state: {
        birthDate: null // Stored as "YYYYMMDD" string
    },

    // --- Data Sources ---
    data: {
        poems: [
            { title: "\ubd04\uc774 \uc624\uba74", content: "\ubd04\uc774 \uc624\uba74\n\uaf43\uc774 \ud53c\uace0\n\uc0c8\uac00 \ub178\ub798\ud55c\ub2e4\n\uadf8\ub807\uac8c \uc0b4\uc544\uac00\ub294 \uac83\uc774\n\uc778\uc0dd\uc774 \uc544\ub2c8\uaca0\ub294\uac00", author: "\uc791\uc790 \ubbf8\uc0c1" },
            { title: "\ud558\ub8e8\ud558\ub8e8", content: "\ud558\ub8e8\ud558\ub8e8\n\uc791\uc740 \uae30\uc068\uc744 \ucc3e\uc544\n\uc0b4\uc544\uac00\uc790\n\uadf8 \uc791\uc740 \uae30\uc068\ub4e4\uc774\n\ubaa8\uc5ec \ud070 \ud589\ubcf5\uc774 \ub41c\ub2e4", author: "\uc791\uc790 \ubbf8\uc0c1" },
            { title: "\uc624\ub298\ub3c4", content: "\uc624\ub298\ub3c4\n\uc0c8\ub85c\uc6b4 \ud558\ub8e8\n\uc0c8\ub85c\uc6b4 \uc2dc\uc791\n\uacfc\uac70\uc5d0 \uc5bd\ub9e4\uc774\uc9c0 \ub9d0\uace0\n\ubbf8\ub798\ub97c \ub450\ub824\uc6cc\ud558\uc9c0 \ub9d0\uc790", author: "\uc791\uc790 \ubbf8\uc0c1" },
            { title: "\ubcc4\uc774 \ube5b\ub098\ub294 \ubc24", content: "\ubcc4\uc774 \ube5b\ub098\ub294 \ubc24\n\uace0\uc694\ud55c \ub9c8\uc74c\uc73c\ub85c\n\ud558\ub298\uc744 \ubc14\ub77c\ubcf4\uba74\n\ubaa8\ub4e0 \uac71\uc815\uc774\n\uc791\uc544 \ubcf4\uc778\ub2e4", author: "\uc791\uc790 \ubbf8\uc0c1" },
            { title: "\ubc14\ub78c\uc774 \ubd88\uc5b4\uc624\uba74", content: "\ubc14\ub78c\uc774 \ubd88\uc5b4\uc624\uba74\n\ub098\ubb47\uc78e\uc774 \ud754\ub4e4\ub9ac\uace0\n\uadf8 \uc18c\ub9ac\uac00\n\ub9c8\uc74c\uc744 \uc704\ub85c\ud55c\ub2e4\n\uc790\uc5f0\uc758 \uc120\ubb3c\uc774\ub2e4", author: "\uc791\uc790 \ubbf8\uc0c1" },
            { title: "\ud587\uc0b4\uc774 \ube44\ucd94\uba74", content: "\ud587\uc0b4\uc774 \ube44\ucd94\uba74\n\uc5b4\ub460\uc740 \uc0ac\ub77c\uc9c0\uace0\n\ud76c\ub9dd\uc774 \ud53c\uc5b4\ub09c\ub2e4\n\uc624\ub298\ub3c4\n\ubc1d\uc740 \ud558\ub8e8\uac00 \ub420 \uac83\uc774\ub2e4", author: "\uc791\uc790 \ubbf8\uc0c1" },
            { title: "\ubb3c\uacb0\uc774 \ubd80\ub52a\ud788\uba74", content: "\ubb3c\uacb0\uc774 \ubd80\ub52a\ud788\uba74\n\ud30c\ub3c4\uac00 \uc77c\uc5b4\ub098\uace0\n\uadf8 \ud798\uc73c\ub85c\n\uc0c8\ub85c\uc6b4 \uae38\uc774 \uc5f4\ub9b0\ub2e4\n\ubcc0\ud654\ub294 \uae30\ud68c\ub2e4", author: "\uc791\uc790 \ubbf8\uc0c1" },
            { title: "\uaf43\uc774 \uc9c0\uba74", content: "\uaf43\uc774 \uc9c0\uba74\n\uc5f4\ub9e4\uac00 \ub9fa\ud788\uace0\n\uadf8 \uc5f4\ub9e4\uac00\n\uc0c8\ub85c\uc6b4 \uc2dc\uc791\uc774 \ub41c\ub2e4\n\ub05d\uc740 \uc2dc\uc791\uc774\ub2e4", author: "\uc791\uc790 \ubbf8\uc0c1" },
            { title: "\uad6c\ub984\uc774 \ud758\ub7ec\uac00\uba74", content: "\uad6c\ub984\uc774 \ud758\ub7ec\uac00\uba74\n\ud558\ub298\uc774 \ubcf4\uc774\uace0\n\uadf8 \ud558\ub298 \uc544\ub798\n\uc6b0\ub9ac\uac00 \uc0b4\uc544\uac04\ub2e4\n\uc790\uc720\ub86d\uac8c", author: "\uc791\uc790 \ubbf8\uc0c1" },
            { title: "\ubc24\uc774 \uae4a\uc5b4\uc9c0\uba74", content: "\ubc24\uc774 \uae4a\uc5b4\uc9c0\uba74\n\ubcc4\uc774 \ub354 \ubc1d\uc544\uc9c0\uace0\n\uadf8 \ubcc4\ube5b\uc774\n\uae38\uc744 \ube44\ucdb0\uc900\ub2e4\n\uc55e\uc73c\ub85c \uac00\ub294 \uae38\uc744", author: "\uc791\uc790 \ubbf8\uc0c1" },
            { title: "\uc0c8\ubcbd\uc774 \uc624\uba74", content: "\uc0c8\ubcbd\uc774 \uc624\uba74\n\uc0c8\ub85c\uc6b4 \ud558\ub8e8\uac00 \uc2dc\uc791\ub418\uace0\n\uadf8 \ud558\ub8e8 \uc18d\uc5d0\n\ubb34\ud55c\ud55c \uac00\ub2a5\uc131\uc774 \uc788\ub2e4\n\uafc8\uc744 \ud5a5\ud574", author: "\uc791\uc790 \ubbf8\uc0c1" },
            { title: "\ube44\uac00 \ub0b4\ub9ac\uba74", content: "\ube44\uac00 \ub0b4\ub9ac\uba74\n\ub545\uc774 \ucd95\ucd95\ud574\uc9c0\uace0\n\uadf8 \ub545\uc5d0\uc11c\n\uc0c8\uc2f9\uc774 \ub3cb\uc544\ub09c\ub2e4\n\uc0dd\uba85\uc758 \ud798\uc73c\ub85c", author: "\uc791\uc790 \ubbf8\uc0c1" },
            { title: "\uc0b0\uc5d0 \uc624\ub974\uba74", content: "\uc0b0\uc5d0 \uc624\ub974\uba74\n\ub113\uc740 \uc138\uc0c1\uc774 \ubcf4\uc774\uace0\n\uadf8 \uc2dc\uc57c\uac00\n\ub9c8\uc74c\uc744 \ub113\ud600\uc900\ub2e4\n\ud3ec\uc6a9\uc758 \ub9c8\uc74c\uc73c\ub85c", author: "\uc791\uc790 \ubbf8\uc0c1" },
            { title: "\ubc14\ub2e4\ub97c \ubcf4\uba74", content: "\ubc14\ub2e4\ub97c \ubcf4\uba74\n\ub9c8\uc74c\uc774 \ub113\uc5b4\uc9c0\uace0\n\uadf8 \ub113\uc74c \uc18d\uc5d0\n\ud3c9\ud654\uac00 \uc788\ub2e4\n\uace0\uc694\ud55c \ub9c8\uc74c", author: "\uc791\uc790 \ubbf8\uc0c1" },
            { title: "\uac00\uc744\uc774 \uc624\uba74", content: "\uac00\uc744\uc774 \uc624\uba74\n\ub2e8\ud48d\uc774 \ubb3c\ub4e4\uace0\n\uadf8 \uc544\ub984\ub2e4\uc6c0\uc5d0\n\ub9c8\uc74c\uc774 \uc124\ub808\uc778\ub2e4\n\ubcc0\ud654\uc758 \uc544\ub984\ub2e4\uc6c0", author: "\uc791\uc790 \ubbf8\uc0c1" },
            { title: "\ub208\uc774 \ub0b4\ub9ac\uba74", content: "\ub208\uc774 \ub0b4\ub9ac\uba74\n\uc138\uc0c1\uc774 \ud558\uc597\uac8c \ubcc0\ud558\uace0\n\uadf8 \uc21c\uc218\ud568\uc5d0\n\ub9c8\uc74c\uc774 \uc815\ud654\ub41c\ub2e4\n\uc0c8\ub85c\uc6b4 \uc2dc\uc791", author: "\uc791\uc790 \ubbf8\uc0c1" },
            { title: "\ub098\ubb34\uac00 \uc790\ub77c\uba74", content: "\ub098\ubb34\uac00 \uc790\ub77c\uba74\n\ubfcc\ub9ac\uac00 \uae4a\uc5b4\uc9c0\uace0\n\uadf8 \ubfcc\ub9ac\ub85c\n\uacac\uace0\ud574\uc9c4\ub2e4\n\uc131\uc7a5\uc758 \ud798", author: "\uc791\uc790 \ubbf8\uc0c1" },
            { title: "\uc0c8\uac00 \ub0a0\uba74", content: "\uc0c8\uac00 \ub0a0\uba74\n\ud558\ub298\uc744 \uac00\ub974\uace0\n\uadf8 \uc790\uc720\ub85c\uc6c0\uc5d0\n\ub9c8\uc74c\uc774 \ub530\ub77c\uac04\ub2e4\n\uafc8\uc744 \ud5a5\ud574", author: "\uc791\uc790 \ubbf8\uc0c1" },
            { title: "\uac15\ubb3c\uc774 \ud750\ub974\uba74", content: "\uac15\ubb3c\uc774 \ud750\ub974\uba74\n\ubc14\ub2e4\ub85c \uac00\uace0\n\uadf8 \uc5ec\uc815\uc774\n\uc778\uc0dd\uacfc \uac19\ub2e4\n\ub05d\uc5c6\ub294 \ud750\ub984", author: "\uc791\uc790 \ubbf8\uc0c1" },
            { title: "\ub2ec\uc774 \ub728\uba74", content: "\ub2ec\uc774 \ub728\uba74\n\ubc24\uc774 \ubc1d\uc544\uc9c0\uace0\n\uadf8 \ub2ec\ube5b\uc774\n\uae38\uc744 \ube44\ucdb0\uc900\ub2e4\n\uc5b4\ub460 \uc18d \ube5b", author: "\uc791\uc790 \ubbf8\uc0c1" },
            { title: "\uc0c8\uc2f9\uc774 \ub3cb\uc73c\uba74", content: "\uc0c8\uc2f9\uc774 \ub3cb\uc73c\uba74\n\uc0dd\uba85\uc774 \uc2dc\uc791\ub418\uace0\n\uadf8 \uc0dd\uba85\ub825\uc774\n\ud76c\ub9dd\uc744 \uc900\ub2e4\n\uc0c8\ub85c\uc6b4 \ud0c4\uc0dd", author: "\uc791\uc790 \ubbf8\uc0c1" },
            { title: "\uc548\uac1c\uac00 \ub07c\uba74", content: "\uc548\uac1c\uac00 \ub07c\uba74\n\uc55e\uc774 \ubcf4\uc774\uc9c0 \uc54a\uc9c0\ub9cc\n\uadf8 \uc548\uac1c\uac00 \uac77\ud788\uba74\n\ub354 \ub113\uc740 \uc138\uc0c1\uc774 \ubcf4\uc778\ub2e4\n\uc778\ub0b4\uc758 \uacb0\uacfc", author: "\uc791\uc790 \ubbf8\uc0c1" },
            { title: "\ubb34\uc9c0\uac1c\uac00 \ub728\uba74", content: "\ubb34\uc9c0\uac1c\uac00 \ub728\uba74\n\ube44\uac00 \uadf8\uce58\uace0\n\uadf8 \uc544\ub984\ub2e4\uc6c0\uc5d0\n\ub9c8\uc74c\uc774 \ud658\ud574\uc9c4\ub2e4\n\ud76c\ub9dd\uc758 \uc2e0\ud638", author: "\uc791\uc790 \ubbf8\uc0c1" },
            { title: "\ubc9a\uaf43\uc774 \ud53c\uba74", content: "\ubc9a\uaf43\uc774 \ud53c\uba74\n\ubd04\uc774 \uc624\uace0\n\uadf8 \uc544\ub984\ub2e4\uc6c0\uc5d0\n\ub9c8\uc74c\uc774 \uc124\ub808\uc778\ub2e4\n\uc0c8\ub85c\uc6b4 \uacc4\uc808", author: "\uc791\uc790 \ubbf8\uc0c1" },
            { title: "\uc7a5\ubbf8\uac00 \ud53c\uba74", content: "\uc7a5\ubbf8\uac00 \ud53c\uba74\n\uac00\uc2dc\uac00 \uc788\uc9c0\ub9cc\n\uadf8 \uc544\ub984\ub2e4\uc6c0\uc740\n\uac00\uc2dc\ub97c \uc78a\uac8c \ud55c\ub2e4\n\uc644\ubcbd\ud568\uc758 \uc758\ubbf8", author: "\uc791\uc790 \ubbf8\uc0c1" },
            { title: "\ub098\ube44\uac00 \ub0a0\uba74", content: "\ub098\ube44\uac00 \ub0a0\uba74\n\uaf43\uc744 \ucc3e\uc544\uac00\uace0\n\uadf8 \uc5ec\uc815\uc774\n\uc778\uc0dd\uacfc \uac19\ub2e4\n\ubaa9\ud45c\ub97c \ud5a5\ud574", author: "\uc791\uc790 \ubbf8\uc0c1" },
            { title: "\ud638\uc218\uac00 \uace0\uc694\ud558\uba74", content: "\ud638\uc218\uac00 \uace0\uc694\ud558\uba74\n\ub9c8\uc74c\ub3c4 \uace0\uc694\ud574\uc9c0\uace0\n\uadf8 \ud3c9\uc628\ud568\uc5d0\n\ud790\ub9c1\uc774 \uc628\ub2e4\n\uace0\uc694\uc758 \ud798", author: "\uc791\uc790 \ubbf8\uc0c1" },
            { title: "\ub3cc\uc774 \uae4e\uc774\uba74", content: "\ub3cc\uc774 \uae4e\uc774\uba74\n\uc870\uac01\uc774 \ub418\uace0\n\uadf8 \uacfc\uc815\uc774\n\uc131\uc7a5\uacfc \uac19\ub2e4\n\ubcc0\ud654\uc758 \uc544\ub984\ub2e4\uc6c0", author: "\uc791\uc790 \ubbf8\uc0c1" },
            { title: "\ubd88\uaf43\uc774 \ud0c0\uba74", content: "\ubd88\uaf43\uc774 \ud0c0\uba74\n\ube5b\uc774 \ub098\uace0\n\uadf8 \uc5f4\uae30\ub85c\n\ub9c8\uc74c\uc744 \ub530\ub73b\ud558\uac8c \ud55c\ub2e4\n\uc5f4\uc815\uc758 \ud798", author: "\uc791\uc790 \ubbf8\uc0c1" },
            { title: "\uc0c8\ubcbd\uc774 \uc624\uba74", content: "\uc0c8\ubcbd\uc774 \uc624\uba74\n\ubc24\uc774 \uc9c0\ub098\uac00\uace0\n\uadf8 \uc0c8\ubcbd\uc5d0\n\uc0c8\ub85c\uc6b4 \ud558\ub8e8\uac00 \uc2dc\uc791\ub41c\ub2e4\n\ud76c\ub9dd\uc758 \uc2dc\uc791", author: "\uc791\uc790 \ubbf8\uc0c1" },
            { title: "\uc0b0\uc774 \ub192\uc73c\uba74", content: "\uc0b0\uc774 \ub192\uc73c\uba74\n\uc624\ub974\uae30 \uc5b4\ub835\uc9c0\ub9cc\n\uc815\uc0c1\uc5d0 \uc624\ub974\uba74\n\ub113\uc740 \uc138\uc0c1\uc774 \ubcf4\uc778\ub2e4\n\ub3c4\uc804\uc758 \uac00\uce58", author: "\uc791\uc790 \ubbf8\uc0c1" },
            { title: "\ubaa8\ub798\uac00 \uc313\uc774\uba74", content: "\ubaa8\ub798\uac00 \uc313\uc774\uba74\n\uc5b8\ub355\uc774 \ub418\uace0\n\uadf8 \uacfc\uc815\uc774\n\uc778\ub0b4\uc640 \uac19\ub2e4\n\uc791\uc740 \uac83\uc758 \ud798", author: "\uc791\uc790 \ubbf8\uc0c1" },
            { title: "\uc5f0\ubabb\uc5d0 \ub3cc\uc744 \ub358\uc9c0\uba74", content: "\uc5f0\ubabb\uc5d0 \ub3cc\uc744 \ub358\uc9c0\uba74\n\ud30c\ubb38\uc774 \uc77c\uace0\n\uadf8 \ud30c\ubb38\uc774\n\uba40\ub9ac \ud37c\uc838\ub098\uac04\ub2e4\n\uc601\ud5a5\uc758 \ud798", author: "\uc791\uc790 \ubbf8\uc0c1" },
            { title: "\ub098\ubb47\uac00\uc9c0\uc5d0 \ub208\uc774 \uc313\uc774\uba74", content: "\ub098\ubb47\uac00\uc9c0\uc5d0 \ub208\uc774 \uc313\uc774\uba74\n\uc544\ub984\ub2e4\uc6b4 \ud48d\uacbd\uc774 \ub418\uace0\n\uadf8 \uc544\ub984\ub2e4\uc6c0\uc5d0\n\ub9c8\uc74c\uc774 \ud3c9\uc628\ud574\uc9c4\ub2e4\n\uc21c\uac04\uc758 \uc544\ub984\ub2e4\uc6c0", author: "\uc791\uc790 \ubbf8\uc0c1" },
            { title: "\uc0c8\uac00 \uc9c0\uc800\uadc0\uba74", content: "\uc0c8\uac00 \uc9c0\uc800\uadc0\uba74\n\uc544\uce68\uc774 \uc624\uace0\n\uadf8 \uc18c\ub9ac\uc5d0\n\ub9c8\uc74c\uc774 \uae68\uc5b4\ub09c\ub2e4\n\uc0dd\uba85\uc758 \uc18c\ub9ac", author: "\uc791\uc790 \ubbf8\uc0c1" },
            { title: "\ubb3c\uace0\uae30\uac00 \ud5e4\uc5c4\uce58\uba74", content: "\ubb3c\uace0\uae30\uac00 \ud5e4\uc5c4\uce58\uba74\n\ubb3c\uacb0\uc774 \uc77c\uace0\n\uadf8 \uc790\uc720\ub85c\uc6c0\uc5d0\n\ub9c8\uc74c\uc774 \ub530\ub77c\uac04\ub2e4\n\uc790\uc5f0\uc758 \ub9ac\ub4ec", author: "\uc791\uc790 \ubbf8\uc0c1" },
            { title: "\ud574\uac00 \uc9c0\uba74", content: "\ud574\uac00 \uc9c0\uba74\n\ubc24\uc774 \uc624\uace0\n\uadf8 \ubc24\uc5d0\n\ubcc4\uc774 \ube5b\ub09c\ub2e4\n\uc5b4\ub460 \uc18d \ube5b", author: "\uc791\uc790 \ubbf8\uc0c1" },
            { title: "\uc78e\uc774 \ub5a8\uc5b4\uc9c0\uba74", content: "\uc78e\uc774 \ub5a8\uc5b4\uc9c0\uba74\n\ub545\uc5d0 \ub2ff\uace0\n\uadf8 \uc78e\uc774\n\uac70\ub984\uc774 \ub41c\ub2e4\n\uc21c\ud658\uc758 \uc758\ubbf8", author: "\uc791\uc790 \ubbf8\uc0c1" },
            { title: "\uad6c\ub984\uc774 \ud758\ub7ec\uac00\uba74", content: "\uad6c\ub984\uc774 \ud758\ub7ec\uac00\uba74\n\ud558\ub298\uc774 \ubcf4\uc774\uace0\n\uadf8 \ud558\ub298 \uc544\ub798\n\uc6b0\ub9ac\uac00 \uc0b4\uc544\uac04\ub2e4\n\uc790\uc720\ub86d\uac8c", author: "\uc791\uc790 \ubbf8\uc0c1" },
            { title: "\ubc8c\uc774 \uaf43\uc744 \ucc3e\uc73c\uba74", content: "\ubc8c\uc774 \uaf43\uc744 \ucc3e\uc73c\uba74\n\uafc0\uc744 \ub9cc\ub4e4\uace0\n\uadf8 \ub178\ub825\uc774\n\ub2ec\ucf64\ud55c \uacb0\uacfc\ub97c \ub9cc\ub4e0\ub2e4\n\ub178\ub825\uc758 \uac00\uce58", author: "\uc791\uc790 \ubbf8\uc0c1" },
            { title: "\uac1c\uc6b8\uc774 \ud750\ub974\uba74", content: "\uac1c\uc6b8\uc774 \ud750\ub974\uba74\n\uac15\uc774 \ub418\uace0\n\uadf8 \uac15\uc774\n\ubc14\ub2e4\ub85c \uac04\ub2e4\n\uc791\uc740 \uac83\uc758 \ud798", author: "\uc791\uc790 \ubbf8\uc0c1" },
            { title: "\ud587\uc0b4\uc774 \ube44\ucd94\uba74", content: "\ud587\uc0b4\uc774 \ube44\ucd94\uba74\n\uadf8\ub9bc\uc790\uac00 \uc0dd\uae30\uace0\n\uadf8 \uadf8\ub9bc\uc790\uac00\n\uc544\ub984\ub2e4\uc6c0\uc744 \ub9cc\ub4e0\ub2e4\n\ub300\ube44\uc758 \ubbf8", author: "\uc791\uc790 \ubbf8\uc0c1" },
            { title: "\uc0c8\uac00 \ub465\uc9c0\ub97c \ub9cc\ub4e4\uba74", content: "\uc0c8\uac00 \ub465\uc9c0\ub97c \ub9cc\ub4e4\uba74\n\uc54c\uc744 \ub0b3\uace0\n\uadf8 \uc54c\uc5d0\uc11c\n\uc0c8 \uc0dd\uba85\uc774 \ud0dc\uc5b4\ub09c\ub2e4\n\uc0dd\uba85\uc758 \uc21c\ud658", author: "\uc791\uc790 \ubbf8\uc0c1" },
            { title: "\ub098\ubb34\uc5d0 \uc5f4\ub9e4\uac00 \ub9fa\ud788\uba74", content: "\ub098\ubb34\uc5d0 \uc5f4\ub9e4\uac00 \ub9fa\ud788\uba74\n\uadf8 \uc5f4\ub9e4\uac00\n\uc0c8\ub85c\uc6b4 \uc0dd\uba85\uc744 \ub9cc\ub4e0\ub2e4\n\uc21c\ud658\uc758 \uc544\ub984\ub2e4\uc6c0", author: "\uc791\uc790 \ubbf8\uc0c1" },
            { title: "\uc0c8\ubcbd \uacf5\uae30\uac00 \ub9d1\uc73c\uba74", content: "\uc0c8\ubcbd \uacf5\uae30\uac00 \ub9d1\uc73c\uba74\n\ub9c8\uc74c\ub3c4 \ub9d1\uc544\uc9c0\uace0\n\uadf8 \ub9d1\uc74c \uc18d\uc5d0\n\uc0c8\ub85c\uc6b4 \ud558\ub8e8\uac00 \uc2dc\uc791\ub41c\ub2e4\n\uae68\ub057\ud55c \uc2dc\uc791", author: "\uc791\uc790 \ubbf8\uc0c1" },
            { title: "\ubc14\uc704\uac00 \uae4e\uc774\uba74", content: "\ubc14\uc704\uac00 \uae4e\uc774\uba74\n\uc870\uac01\uc774 \ub418\uace0\n\uadf8 \uc870\uac01\uc774\n\uc608\uc220\uc774 \ub41c\ub2e4\n\ubcc0\ud654\uc758 \ud798", author: "\uc791\uc790 \ubbf8\uc0c1" },
            { title: "\uc0c8\uac00 \ub0a0\uc544\uac00\uba74", content: "\uc0c8\uac00 \ub0a0\uc544\uac00\uba74\n\ud558\ub298\uc774 \ub113\uc5b4\uc9c0\uace0\n\uadf8 \ub113\uc74c\uc5d0\n\ub9c8\uc74c\uc774 \ub530\ub77c\uac04\ub2e4\n\uc790\uc720\uc758 \uc758\ubbf8", author: "\uc791\uc790 \ubbf8\uc0c1" },
            { title: "\uac15\ubb3c\uc774 \ud750\ub974\uba74", content: "\uac15\ubb3c\uc774 \ud750\ub974\uba74\n\ubc14\ub2e4\ub85c \uac00\uace0\n\uadf8 \uc5ec\uc815\uc774\n\uc778\uc0dd\uacfc \uac19\ub2e4\n\ub05d\uc5c6\ub294 \uc5ec\ud589", author: "\uc791\uc790 \ubbf8\uc0c1" },
            { title: "\ubcc4\uc774 \ubc18\uc9dd\uc774\uba74", content: "\ubcc4\uc774 \ubc18\uc9dd\uc774\uba74\n\ubc24\uc774 \uc544\ub984\ub2e4\uc6cc\uc9c0\uace0\n\uadf8 \uc544\ub984\ub2e4\uc6c0\uc5d0\n\ub9c8\uc74c\uc774 \ud3c9\uc628\ud574\uc9c4\ub2e4\n\ubc24\uc758 \uc120\ubb3c", author: "\uc791\uc790 \ubbf8\uc0c1" },
            { title: "\uaf43\uc774 \ud53c\uba74", content: "\uaf43\uc774 \ud53c\uba74\n\ud5a5\uae30\uac00 \ud37c\uc9c0\uace0\n\uadf8 \ud5a5\uae30\uc5d0\n\ub9c8\uc74c\uc774 \uc124\ub808\uc778\ub2e4\n\ubd04\uc758 \uae30\uc068", author: "\uc791\uc790 \ubbf8\uc0c1" },
            { title: "\ube44\uac00 \ub0b4\ub9ac\uba74", content: "\ube44\uac00 \ub0b4\ub9ac\uba74\n\ub545\uc774 \ucd95\ucd95\ud574\uc9c0\uace0\n\uadf8 \ub545\uc5d0\uc11c\n\uc0c8\uc2f9\uc774 \ub3cb\uc544\ub09c\ub2e4\n\uc0dd\uba85\uc758 \ud0c4\uc0dd", author: "\uc791\uc790 \ubbf8\uc0c1" },
            { title: "\ubc14\ub78c\uc774 \ubd88\uba74", content: "\ubc14\ub78c\uc774 \ubd88\uba74\n\ub098\ubb47\uc78e\uc774 \ud754\ub4e4\ub9ac\uace0\n\uadf8 \ud754\ub4e4\ub9bc\uc774\n\uc790\uc5f0\uc758 \ub178\ub798\uac00 \ub41c\ub2e4\n\ubc14\ub78c\uc758 \uc120\uc728", author: "\uc791\uc790 \ubbf8\uc0c1" },
            { title: "\ud587\uc0b4\uc774 \ube44\ucd94\uba74", content: "\ud587\uc0b4\uc774 \ube44\ucd94\uba74\n\uadf8\ub9bc\uc790\uac00 \uc0dd\uae30\uace0\n\uadf8 \uadf8\ub9bc\uc790\uac00\n\uc544\ub984\ub2e4\uc6c0\uc744 \ub9cc\ub4e0\ub2e4\n\ube5b\uacfc \uadf8\ub9bc\uc790", author: "\uc791\uc790 \ubbf8\uc0c1" },
            { title: "\uad6c\ub984\uc774 \ud758\ub7ec\uac00\uba74", content: "\uad6c\ub984\uc774 \ud758\ub7ec\uac00\uba74\n\ud558\ub298\uc774 \ubcf4\uc774\uace0\n\uadf8 \ud558\ub298 \uc544\ub798\n\uc6b0\ub9ac\uac00 \uc0b4\uc544\uac04\ub2e4\n\uc790\uc720\ub86d\uac8c", author: "\uc791\uc790 \ubbf8\uc0c1" },
            { title: "\uc0c8\uac00 \uc9c0\uc800\uadc0\uba74", content: "\uc0c8\uac00 \uc9c0\uc800\uadc0\uba74\n\uc544\uce68\uc774 \uc624\uace0\n\uadf8 \uc18c\ub9ac\uc5d0\n\ub9c8\uc74c\uc774 \uae68\uc5b4\ub09c\ub2e4\n\uc0dd\uba85\uc758 \uc18c\ub9ac", author: "\uc791\uc790 \ubbf8\uc0c1" },
            { title: "\ubb3c\uace0\uae30\uac00 \ud5e4\uc5c4\uce58\uba74", content: "\ubb3c\uace0\uae30\uac00 \ud5e4\uc5c4\uce58\uba74\n\ubb3c\uacb0\uc774 \uc77c\uace0\n\uadf8 \uc790\uc720\ub85c\uc6c0\uc5d0\n\ub9c8\uc74c\uc774 \ub530\ub77c\uac04\ub2e4\n\uc790\uc5f0\uc758 \ub9ac\ub4ec", author: "\uc791\uc790 \ubbf8\uc0c1" },
            { title: "\ud574\uac00 \uc9c0\uba74", content: "\ud574\uac00 \uc9c0\uba74\n\ubc24\uc774 \uc624\uace0\n\uadf8 \ubc24\uc5d0\n\ubcc4\uc774 \ube5b\ub09c\ub2e4\n\uc5b4\ub460 \uc18d \ube5b", author: "\uc791\uc790 \ubbf8\uc0c1" },
            { title: "\uc78e\uc774 \ub5a8\uc5b4\uc9c0\uba74", content: "\uc78e\uc774 \ub5a8\uc5b4\uc9c0\uba74\n\ub545\uc5d0 \ub2ff\uace0\n\uadf8 \uc78e\uc774\n\uac70\ub984\uc774 \ub41c\ub2e4\n\uc21c\ud658\uc758 \uc758\ubbf8", author: "\uc791\uc790 \ubbf8\uc0c1" },
            { title: "\ubc8c\uc774 \uaf43\uc744 \ucc3e\uc73c\uba74", content: "\ubc8c\uc774 \uaf43\uc744 \ucc3e\uc73c\uba74\n\uafc0\uc744 \ub9cc\ub4e4\uace0\n\uadf8 \ub178\ub825\uc774\n\ub2ec\ucf64\ud55c \uacb0\uacfc\ub97c \ub9cc\ub4e0\ub2e4\n\ub178\ub825\uc758 \uac00\uce58", author: "\uc791\uc790 \ubbf8\uc0c1" },
            { title: "\uac1c\uc6b8\uc774 \ud750\ub974\uba74", content: "\uac1c\uc6b8\uc774 \ud750\ub974\uba74\n\uac15\uc774 \ub418\uace0\n\uadf8 \uac15\uc774\n\ubc14\ub2e4\ub85c \uac04\ub2e4\n\uc791\uc740 \uac83\uc758 \ud798", author: "\uc791\uc790 \ubbf8\uc0c1" },
            { title: "\uc0c8\uac00 \ub465\uc9c0\ub97c \ub9cc\ub4e4\uba74", content: "\uc0c8\uac00 \ub465\uc9c0\ub97c \ub9cc\ub4e4\uba74\n\uc54c\uc744 \ub0b3\uace0\n\uadf8 \uc54c\uc5d0\uc11c\n\uc0c8 \uc0dd\uba85\uc774 \ud0dc\uc5b4\ub09c\ub2e4\n\uc0dd\uba85\uc758 \uc21c\ud658", author: "\uc791\uc790 \ubbf8\uc0c1" },
            { title: "\ub208\uc774 \ub0b4\ub9ac\uba74", content: "\ub208\uc774 \ub0b4\ub9ac\uba74\n\uc138\uc0c1\uc774 \ud558\uc597\uac8c \ubcc0\ud558\uace0\n\uadf8 \uc21c\uc218\ud568\uc5d0\n\ub9c8\uc74c\uc774 \uc815\ud654\ub41c\ub2e4\n\uc0c8\ub85c\uc6b4 \uc2dc\uc791", author: "\uc791\uc790 \ubbf8\uc0c1" },
            { title: "\ub098\ubb34\uac00 \uc790\ub77c\uba74", content: "\ub098\ubb34\uac00 \uc790\ub77c\uba74\n\ubfcc\ub9ac\uac00 \uae4a\uc5b4\uc9c0\uace0\n\uadf8 \ubfcc\ub9ac\ub85c\n\uacac\uace0\ud574\uc9c4\ub2e4\n\uc131\uc7a5\uc758 \ud798", author: "\uc791\uc790 \ubbf8\uc0c1" },
            { title: "\ubb34\uc9c0\uac1c\uac00 \ub728\uba74", content: "\ubb34\uc9c0\uac1c\uac00 \ub728\uba74\n\ube44\uac00 \uadf8\uce58\uace0\n\uadf8 \uc544\ub984\ub2e4\uc6c0\uc5d0\n\ub9c8\uc74c\uc774 \ud658\ud574\uc9c4\ub2e4\n\ud76c\ub9dd\uc758 \uc2e0\ud638", author: "\uc791\uc790 \ubbf8\uc0c1" },
        ],
        zodiacSigns: [
            { name: "염소자리", dates: "12.22~1.19", element: "Earth" },
            { name: "물병자리", dates: "1.20~2.18", element: "Air" },
            { name: "물고기자리", dates: "2.19~3.20", element: "Water" },
            { name: "양자리", dates: "3.21~4.19", element: "Fire" },
            { name: "황소자리", dates: "4.20~5.20", element: "Earth" },
            { name: "쌍둥이자리", dates: "5.21~6.21", element: "Air" },
            { name: "게자리", dates: "6.22~7.22", element: "Water" },
            { name: "사자자리", dates: "7.23~8.22", element: "Fire" },
            { name: "처녀자리", dates: "8.23~9.22", element: "Earth" },
            { name: "천칭자리", dates: "9.23~10.22", element: "Air" },
            { name: "전갈자리", dates: "10.23~11.22", element: "Water" },
            { name: "사수자리", dates: "11.23~12.21", element: "Fire" }
        ],
        tarotCards: [
            { name: "광대", description: "자유, 모험, 새로운 시작 (0)", type: "dynamic" },
            { name: "마법사", description: "창조, 수완, 의지 (I)", type: "active" },
            { name: "여사제", description: "지혜, 직관, 신비 (II)", type: "static" },
            { name: "여황제", description: "풍요, 여성성, 자연 (III)", type: "nurturing" },
            { name: "황제", description: "권위, 안정, 리더십 (IV)", type: "stable" },
            { name: "교황", description: "전통, 가르침, 신념 (V)", type: "mental" },
            { name: "연인", description: "사랑, 조화, 선택 (VI)", type: "social" },
            { name: "전차", description: "승리, 진행, 자기통제 (VII)", type: "dynamic" },
            { name: "힘", description: "용기, 인내, 내면의 힘 (VIII)", type: "active" },
            { name: "은둔자", description: "탐구, 사색, 홀로 있음 (IX)", type: "static" },
            { name: "운명의 수레바퀴", description: "변화, 흐름, 기회 (X)", type: "transform" },
            { name: "정의", description: "공정, 균형, 책임 (XI)", type: "mental" },
            { name: "매달린 사람", description: "희생, 새로운 관점 (XII)", type: "static" },
            { name: "죽음", description: "끝, 새로운 시작, 변화 (XIII)", type: "transform" },
            { name: "절제", description: "조화, 균형, 인내 (XIV)", type: "stable" },
            { name: "악마", description: "속박, 욕망, 물질 (XV)", type: "dynamic" },
            { name: "탑", description: "붕괴, 갑작스런 변화 (XVI)", type: "transform" },
            { name: "별", description: "희망, 영감, 평온 (XVII)", type: "mental" },
            { name: "달", description: "불안, 환상, 잠재의식 (XVIII)", type: "static" },
            { name: "태양", description: "성공, 기쁨, 활력 (XIX)", type: "active" },
            { name: "심판", description: "부활, 보상, 각성 (XX)", type: "transform" },
            { name: "세계", description: "완성, 성취, 통합 (XXI)", type: "stable" }
        ],
        flowers: [
            { name: "벚꽃", meaning: "순수하고 아름다운 사랑을 상징합니다. 새로운 시작을 의미합니다.", image: "./img/image.png", emoji: "🌸" },
            { name: "튤립", meaning: "완벽한 사랑과 명예를 나타냅니다. 진정한 사랑을 의미합니다.", image: "./img/image.png", emoji: "🌷" },
            { name: "라벤더", meaning: "평온과 치유를 상징합니다. 마음의 안정을 가져다줍니다.", image: "./img/image.png", emoji: "💜" },
            { name: "히아신스", meaning: "인내와 끈기를 나타냅니다. 꾸준한 노력이 결실을 맺을 것입니다.", image: "./img/image.png", emoji: "🌺" },
            { name: "수선화", meaning: "자존심과 자부심을 상징합니다. 자신을 사랑하세요.", image: "./img/image.png", emoji: "🌼" },
            { name: "프리지아", meaning: "순수한 사랑과 우정을 나타냅니다. 소중한 관계를 의미합니다.", image: "./img/image.png", emoji: "🌻" },
            { name: "해바라기", meaning: "긍정과 희망을 상징합니다. 밝은 에너지가 넘치는 하루입니다.", image: "./img/image.png", emoji: "🌻" },
            { name: "장미", meaning: "사랑과 열정을 나타냅니다. 깊은 감정을 느낄 수 있습니다.", image: "./img/image.png", emoji: "🌹" },
            { name: "해당화", meaning: "아름다움과 우아함을 나타냅니다. 자신의 매력을 발휘하세요.", image: "./img/image.png", emoji: "🌺" },
            { name: "수국", meaning: "진심과 감사함을 상징합니다. 주변에 감사하는 마음을 가져보세요.", image: "./img/image.png", emoji: "💙" },
            { name: "백합", meaning: "순수와 고귀함을 나타냅니다. 품격 있는 하루입니다.", image: "./img/image.png", emoji: "🤍" },
            { name: "국화", meaning: "장수와 건강을 상징합니다. 안정적인 하루를 보낼 수 있습니다.", image: "./img/image.png", emoji: "🌼" },
            { name: "코스모스", meaning: "순수한 사랑과 조화를 나타냅니다. 균형 잡힌 하루입니다.", image: "./img/image.png", emoji: "🌺" },
            { name: "들국화", meaning: "소박함과 진실함을 상징합니다. 자연스러운 하루입니다.", image: "./img/image.png", emoji: "🌼" },
            { name: "봉선화", meaning: "끈기와 인내를 나타냅니다. 꾸준한 노력이 필요합니다.", image: "./img/image.png", emoji: "🌺" },
            { name: "금잔화", meaning: "희망과 긍정을 상징합니다. 밝은 미래를 기대하세요.", image: "./img/image.png", emoji: "🌻" },
            { name: "거베라", meaning: "행복과 기쁨을 나타냅니다. 즐거운 하루가 될 것입니다.", image: "./img/image.png", emoji: "🌺" },
            { name: "동백꽃", meaning: "진실한 사랑과 헌신을 상징합니다. 깊은 감정을 느낄 수 있습니다.", image: "./img/image.png", emoji: "🌺" },
            { name: "포인세티아", meaning: "축복과 행복을 상징합니다. 따뜻한 하루입니다.", image: "./img/image.png", emoji: "🌺" },
            { name: "크리스마스 로즈", meaning: "희망과 새로운 시작을 나타냅니다. 밝은 미래가 기다립니다.", image: "./img/image.png", emoji: "🌹" },
            { name: "카멜리아", meaning: "완벽함과 이상을 상징합니다. 높은 목표를 향해 나아가세요.", image: "./img/image.png", emoji: "🌺" },
            { name: "겨울 장미", meaning: "인내와 끈기를 나타냅니다. 어려움을 이겨낼 힘이 있습니다.", image: "./img/image.png", emoji: "🌹" },
        ],
        colors: [
            { name: "\ud558\ub298\uc0c9", hex: "#87CEEB" },
            { name: "\ubc14\ub2e4\uc0c9", hex: "#4682B4" },
            { name: "\ube68\uac04\uc0c9", hex: "#FF6B6B" },
            { name: "\ucd08\ub85d\uc0c9", hex: "#51CF66" },
            { name: "\ub178\ub780\uc0c9", hex: "#FFD93D" },
            { name: "\uc740\uc0c9", hex: "#C0C0C0" },
            { name: "\uae08\uc0c9", hex: "#FFD700" },
            { name: "\ubca0\uc774\uc9c0\uc0c9", hex: "#F5DEB3" },
            { name: "\ubd84\ud64d\uc0c9", hex: "#FFB6C1" },
            { name: "\uc9c4\ud55c \ube68\uac04\uc0c9", hex: "#DC143C" },
            { name: "\ubcf4\ub77c\uc0c9", hex: "#9370DB" },
            { name: "\uac08\uc0c9", hex: "#8B4513" },
            { name: "\uc5f0\ub450\uc0c9", hex: "#90EE90" },
            { name: "\ub77c\ubca4\ub354", hex: "#E6E6FA" },
            { name: "\uc5d0\uba54\ub784\ub4dc", hex: "#50C878" },
            { name: "\ucf54\ub784", hex: "#FF7F50" },
            { name: "\uc8fc\ud669\uc0c9", hex: "#FF8C00" },
            { name: "\ubc84\uac74\ub514", hex: "#800020" },
            { name: "\uc62c\ub9ac\ube0c", hex: "#808000" },
            { name: "\ub124\uc774\ube44", hex: "#000080" },
            { name: "\uc544\uc774\uc2a4 \ube14\ub8e8", hex: "#B0E0E6" },
            { name: "\ud654\uc774\ud2b8", hex: "#FFFFFF" },
            { name: "\ud551\ud06c", hex: "#FF69B4" },
            { name: "\ud68c\uc0c9", hex: "#808080" },
            { name: "\ud30c\ub780\uc0c9", hex: "#4169E1" },
            { name: "\uac80\uc740\uc0c9", hex: "#000000" },
            { name: "\uccad\ub85d\uc0c9", hex: "#40E0D0" },
            { name: "\uc9c4\ud55c \ube68\uac04\uc0c9", hex: "#8B0000" },
            { name: "\uc8fc\ud669\uc0c9", hex: "#FF4500" },
        ],
        beverages: [
            { name: "\uc5d0\uc2a4\ud504\ub808\uc18c", image: "https://images.unsplash.com/photo-1610889556283-7d84814d4203?w=800", description: "\uc9c4\ud55c \ub9db\uacfc \uac15\ub82c\ud55c \uce74\ud398\uc778\uc73c\ub85c \ud558\ub8e8\ub97c \uc2dc\uc791\ud558\uc138\uc694.", emoji: "\u2615" },
            { name: "\uc544\uba54\ub9ac\uce74\ub178", image: "https://images.unsplash.com/photo-1572490122747-3968b75cc699?w=800", description: "\uae54\ub054\ud558\uace0 \ubd80\ub4dc\ub7ec\uc6b4 \ub9db\uc73c\ub85c \ud558\ub8e8\ub97c \ud3b8\uc548\ud558\uac8c \uc2dc\uc791\ud558\uc138\uc694.", emoji: "\u2615" },
            { name: "\uce74\ud398\ub77c\ub5bc", image: "https://images.unsplash.com/photo-1610889556283-7d84814d4203?w=800", description: "\ubd80\ub4dc\ub7ec\uc6b4 \uc6b0\uc720\uc640 \ud568\uaed8\ud558\ub294 \ub530\ub73b\ud55c \ud55c\uc794\uc785\ub2c8\ub2e4.", emoji: "\u2615" },
            { name: "\uce74\ud478\uce58\ub178", image: "https://images.unsplash.com/photo-1541167760496-1628856ab772?w=800", description: "\ud3fc \ubc00\ud06c\uc758 \ubd80\ub4dc\ub7ec\uc6c0\uacfc \ucee4\ud53c\uc758 \uc9c4\ud55c \ub9db\uc774 \uc870\ud654\ub86d\uc2b5\ub2c8\ub2e4.", emoji: "\u2615" },
            { name: "\uce74\ub77c\uba5c \ub9c8\ud0a4\uc544\ud1a0", image: "https://images.unsplash.com/photo-1610889556283-7d84814d4203?w=800", description: "\ub2ec\ucf64\ud55c \uce74\ub77c\uba5c\uacfc \ud568\uaed8\ud558\ub294 \ud2b9\ubcc4\ud55c \ud558\ub8e8\ub97c \ub9cc\ub4e4\uc5b4\ubcf4\uc138\uc694.", emoji: "\u2615" },
            { name: "\ubc14\ub2d0\ub77c \ub77c\ub5bc", image: "https://images.unsplash.com/photo-1517701604599-bb29b5dd7359?w=800", description: "\uc740\uc740\ud55c \ubc14\ub2d0\ub77c \ud5a5\uc73c\ub85c \ub9c8\uc74c\uc744 \ub2ec\ub798\uc8fc\ub294 \ud55c\uc794\uc785\ub2c8\ub2e4.", emoji: "\u2615" },
            { name: "\ucf5c\ub4dc\ube0c\ub8e8", image: "https://images.unsplash.com/photo-1550923508-2c2aeec95cb8?w=800", description: "\uc2dc\uc6d0\ud558\uace0 \uae54\ub054\ud55c \ub9db\uc73c\ub85c \uc0c1\ucf8c\ud55c \ud558\ub8e8\ub97c \uc2dc\uc791\ud558\uc138\uc694.", emoji: "\u2615" },
            { name: "\uce74\ud398\ubaa8\uce74", image: "https://images.unsplash.com/photo-1550923508-2c2aeec95cb8?w=800", description: "\ucd08\ucf5c\ub9bf\uacfc \ucee4\ud53c\uc758 \ub2ec\ucf64\ud55c \uc870\ud569\uc73c\ub85c \uae30\ubd84\uc744 \uc88b\uac8c \ub9cc\ub4e4\uc5b4\uc90d\ub2c8\ub2e4.", emoji: "\u2615" },
            { name: "\ud50c\ub7ab \ud654\uc774\ud2b8", image: "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=800", description: "\uc9c4\ud55c \uc5d0\uc2a4\ud504\ub808\uc18c\uc640 \ubd80\ub4dc\ub7ec\uc6b4 \uc6b0\uc720\uc758 \uc644\ubcbd\ud55c \uade0\ud615\uc785\ub2c8\ub2e4.", emoji: "\u2615" },
            { name: "\uc544\uc774\uc2a4 \uc544\uba54\ub9ac\uce74\ub178", image: "https://images.unsplash.com/photo-1559496417-e7f25cb247f3?w=800", description: "\uc2dc\uc6d0\ud558\uac8c \ub9c8\uc2dc\ub294 \uae54\ub054\ud55c \ucee4\ud53c\ub85c \uc0c1\ucf8c\ud568\uc744 \ub290\uaef4\ubcf4\uc138\uc694.", emoji: "\u2615" },
            { name: "\ub354\uce58\ucee4\ud53c", image: "https://images.unsplash.com/photo-1550923508-2c2aeec95cb8?w=800", description: "\ubd80\ub4dc\ub7fd\uace0 \uae4a\uc740 \ub9db\uc73c\ub85c \uc5ec\uc720\ub85c\uc6b4 \uc2dc\uac04\uc744 \uc990\uae30\uc138\uc694.", emoji: "\u2615" },
            { name: "\uce74\ud398\uc624\ub808", image: "https://images.unsplash.com/photo-1582235967735-3b9815041065?w=800", description: "\uc6b0\uc720\uc640 \ucee4\ud53c\uc758 \ubd80\ub4dc\ub7ec\uc6b4 \uc870\ud654\ub85c \ub530\ub73b\ud55c \ud558\ub8e8\ub97c \ubcf4\ub0b4\uc138\uc694.", emoji: "\u2615" },
            { name: "\uc544\uc774\uc2a4 \ub77c\ub5bc", image: "https://images.unsplash.com/photo-1582235967735-3b9815041065?w=800", description: "\uc2dc\uc6d0\ud558\uace0 \ubd80\ub4dc\ub7ec\uc6b4 \uc6b0\uc720 \ucee4\ud53c\ub85c \uc0c1\ucf8c\ud55c \ud558\ub8e8\ub97c \ubcf4\ub0b4\uc138\uc694.", emoji: "\u2615" },
            { name: "\ub3cc\uccb4 \ub77c\ub5bc", image: "https://images.unsplash.com/photo-1550923508-2c2aeec95cb8?w=800", description: "\ub2ec\ucf64\ud55c \uc5f0\uc720\uc640 \ud568\uaed8\ud558\ub294 \ubd80\ub4dc\ub7ec\uc6b4 \ud55c\uc794\uc785\ub2c8\ub2e4.", emoji: "\u2615" },
            { name: "\ud654\uc774\ud2b8 \ucd08\ucf5c\ub9bf \ubaa8\uce74", image: "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=800", description: "\ubd80\ub4dc\ub7ec\uc6b4 \ud654\uc774\ud2b8 \ucd08\ucf5c\ub9bf\uacfc \ucee4\ud53c\uc758 \ub2ec\ucf64\ud55c \ub9cc\ub0a8\uc785\ub2c8\ub2e4.", emoji: "\u2615" },
            { name: "\ud5e4\uc774\uc990\ub11b \ub77c\ub5bc", image: "https://images.unsplash.com/photo-1517701604599-bb29b5dd7359?w=800", description: "\uace0\uc18c\ud55c \ud5e4\uc774\uc990\ub11b \ud5a5\uc73c\ub85c \ub530\ub73b\ud55c \ud558\ub8e8\ub97c \uc2dc\uc791\ud558\uc138\uc694.", emoji: "\u2615" },
            { name: "\uc544\uc774\uc2a4 \uce74\ud478\uce58\ub178", image: "https://images.unsplash.com/photo-1559496417-e7f25cb247f3?w=800", description: "\uc2dc\uc6d0\ud55c \ud3fc \ubc00\ud06c\uc640 \ud568\uaed8\ud558\ub294 \uc0c1\ucf8c\ud55c \ud55c\uc794\uc785\ub2c8\ub2e4.", emoji: "\u2615" },
            { name: "\uce74\ub77c\uba5c \ud504\ub77c\ud478\uce58\ub178", image: "https://images.unsplash.com/photo-1610889556283-7d84814d4203?w=800", description: "\ub2ec\ucf64\ud55c \uce74\ub77c\uba5c\uacfc \ud568\uaed8\ud558\ub294 \uc2dc\uc6d0\ud55c \ud55c\uc794\uc785\ub2c8\ub2e4.", emoji: "\u2615" },
            { name: "\ubc14\ub2d0\ub77c \ud504\ub77c\ud478\uce58\ub178", image: "https://images.unsplash.com/photo-1550923508-2c2aeec95cb8?w=800", description: "\uc740\uc740\ud55c \ubc14\ub2d0\ub77c \ud5a5\uc758 \uc2dc\uc6d0\ud55c \ud55c\uc794\uc73c\ub85c \uae30\ubd84\uc744 \uc804\ud658\ud558\uc138\uc694.", emoji: "\u2615" },
            { name: "\uc544\ud3ec\uac00\ud1a0", image: "https://images.unsplash.com/photo-1550923508-2c2aeec95cb8?w=800", description: "\uc544\uc774\uc2a4\ud06c\ub9bc\uacfc \uc5d0\uc2a4\ud504\ub808\uc18c\uc758 \ub2ec\ucf64\ud55c \uc870\ud569\uc785\ub2c8\ub2e4.", emoji: "\u2615" },
            { name: "\ub9ac\uc2a4\ud2b8\ub808\ud1a0", image: "https://images.unsplash.com/photo-1550923508-2c2aeec95cb8?w=800", description: "\uc5d0\uc2a4\ud504\ub808\uc18c\ubcf4\ub2e4 \ub354 \uc9c4\ud558\uace0 \uac15\ub82c\ud55c \ub9db\uc744 \uc990\uaca8\ubcf4\uc138\uc694.", emoji: "\u2615" },
            { name: "\ub871 \ube14\ub799", image: "https://images.unsplash.com/photo-1559496417-e7f25cb247f3?w=800", description: "\uc5d0\uc2a4\ud504\ub808\uc18c\uc5d0 \ub728\uac70\uc6b4 \ubb3c\uc744 \ubd80\uc740 \uae54\ub054\ud55c \ucee4\ud53c\uc785\ub2c8\ub2e4.", emoji: "\u2615" },
            { name: "\ub9c8\ud0a4\uc544\ud1a0", image: "https://images.unsplash.com/photo-1559496417-e7f25cb247f3?w=800", description: "\uc5d0\uc2a4\ud504\ub808\uc18c\uc5d0 \uc6b0\uc720 \uac70\ud488\uc744 \uc0b4\uc9dd \uc5b9\uc740 \uc6b0\uc544\ud55c \ud55c\uc794\uc785\ub2c8\ub2e4.", emoji: "\u2615" },
            { name: "\ucf58 \ud30c\ub098", image: "https://images.unsplash.com/photo-1559496417-e7f25cb247f3?w=800", description: "\uc5d0\uc2a4\ud504\ub808\uc18c\uc5d0 \ud718\ud551 \ud06c\ub9bc\uc744 \uc62c\ub9b0 \ub2ec\ucf64\ud55c \ud55c\uc794\uc785\ub2c8\ub2e4.", emoji: "\u2615" },
            { name: "\ube44\uc5d4\ub098 \ucee4\ud53c", image: "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=800", description: "\uc5d0\uc2a4\ud504\ub808\uc18c\uc5d0 \ud718\ud551 \ud06c\ub9bc\uc744 \uc62c\ub9b0 \uc6b0\uc544\ud55c \ud55c\uc794\uc785\ub2c8\ub2e4.", emoji: "\u2615" },
            { name: "\uc544\uc774\uc2a4 \uce74\ub77c\uba5c \ub9c8\ud0a4\uc544\ud1a0", image: "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=800", description: "\uc2dc\uc6d0\ud55c \uce74\ub77c\uba5c\uacfc \ud568\uaed8\ud558\ub294 \uc0c1\ucf8c\ud55c \ud55c\uc794\uc785\ub2c8\ub2e4.", emoji: "\u2615" },
            { name: "\uc544\uc774\uc2a4 \ubc14\ub2d0\ub77c \ub77c\ub5bc", image: "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=800", description: "\uc2dc\uc6d0\ud55c \ubc14\ub2d0\ub77c \ud5a5\uc73c\ub85c \uc0c1\ucf8c\ud55c \ud558\ub8e8\ub97c \ubcf4\ub0b4\uc138\uc694.", emoji: "\u2615" },
            { name: "\uc544\uc774\uc2a4 \uce74\ud398\ubaa8\uce74", image: "https://images.unsplash.com/photo-1559496417-e7f25cb247f3?w=800", description: "\uc2dc\uc6d0\ud55c \ucd08\ucf5c\ub9bf \ucee4\ud53c\ub85c \ub2ec\ucf64\ud55c \ud558\ub8e8\ub97c \uc990\uae30\uc138\uc694.", emoji: "\u2615" },
            { name: "\uce74\ud398 \ube0c\ub808\ubca0", image: "https://images.unsplash.com/photo-1572490122747-3968b75cc699?w=800", description: "\uc5d0\uc2a4\ud504\ub808\uc18c\uc5d0 \uc6b0\uc720\uc640 \ud06c\ub9bc\uc744 \ub123\uc740 \ubd80\ub4dc\ub7ec\uc6b4 \ud55c\uc794\uc785\ub2c8\ub2e4.", emoji: "\u2615" },
            { name: "\uc544\uc774\ub9ac\uc2dc \ucee4\ud53c", image: "https://images.unsplash.com/photo-1610889556283-7d84814d4203?w=800", description: "\uc704\uc2a4\ud0a4\uc640 \ud06c\ub9bc\uc774 \ub4e4\uc5b4\uac04 \ud2b9\ubcc4\ud55c \ud55c\uc794\uc785\ub2c8\ub2e4.", emoji: "\u2615" },
            { name: "\ud56b\ucd08\ucf54", image: "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=800", description: "\ub530\ub73b\ud558\uace0 \ub2ec\ucf64\ud55c \ucd08\ucf5c\ub9bf\uc73c\ub85c \ub9c8\uc74c\uc744 \ub2ec\ub798\uc8fc\ub294 \ud55c\uc794\uc785\ub2c8\ub2e4.", emoji: "\u2615" },
            { name: "\ucd08\ucf54\ub77c\ub5bc", image: "https://images.unsplash.com/photo-1610889556283-7d84814d4203?w=800", description: "\ubd80\ub4dc\ub7ec\uc6b4 \uc6b0\uc720\uc640 \uc9c4\ud55c \ucd08\ucf5c\ub9bf\uc758 \ub2ec\ucf64\ud55c \uc870\ud569\uc785\ub2c8\ub2e4.", emoji: "\u2615" },
            { name: "\uc544\uc774\uc2a4 \ucd08\ucf54\ub77c\ub5bc", image: "https://images.unsplash.com/photo-1541167760496-1628856ab772?w=800", description: "\uc2dc\uc6d0\ud55c \ucd08\ucf5c\ub9bf \uc6b0\uc720\ub85c \uc0c1\ucf8c\ud55c \ud558\ub8e8\ub97c \ubcf4\ub0b4\uc138\uc694.", emoji: "\u2615" },
            { name: "\ud654\uc774\ud2b8 \ucd08\ucf54", image: "https://images.unsplash.com/photo-1517701604599-bb29b5dd7359?w=800", description: "\ubd80\ub4dc\ub7fd\uace0 \ub2ec\ucf64\ud55c \ud654\uc774\ud2b8 \ucd08\ucf5c\ub9bf\uc73c\ub85c \ud2b9\ubcc4\ud55c \ud55c\uc794\uc744 \uc990\uae30\uc138\uc694.", emoji: "\u2615" },
            { name: "\ub2e4\ud06c \ucd08\ucf54", image: "https://images.unsplash.com/photo-1572490122747-3968b75cc699?w=800", description: "\uc9c4\ud558\uace0 \uae4a\uc740 \ub2e4\ud06c \ucd08\ucf5c\ub9bf\uc758 \ud48d\ubd80\ud55c \ub9db\uc744 \ub290\uaef4\ubcf4\uc138\uc694.", emoji: "\u2615" },
            { name: "\ubbfc\ud2b8 \ucd08\ucf54", image: "https://images.unsplash.com/photo-1559496417-e7f25cb247f3?w=800", description: "\uc0c1\ucf8c\ud55c \ubbfc\ud2b8\uc640 \ub2ec\ucf64\ud55c \ucd08\ucf5c\ub9bf\uc758 \uc870\ud654\ub85c\uc6b4 \ud55c\uc794\uc785\ub2c8\ub2e4.", emoji: "\u2615" },
            { name: "\ubc14\ub2d0\ub77c \ucd08\ucf54", image: "https://images.unsplash.com/photo-1610889556283-7d84814d4203?w=800", description: "\uc740\uc740\ud55c \ubc14\ub2d0\ub77c\uc640 \ucd08\ucf5c\ub9bf\uc758 \ubd80\ub4dc\ub7ec\uc6b4 \ub9cc\ub0a8\uc785\ub2c8\ub2e4.", emoji: "\u2615" },
            { name: "\uce74\ub77c\uba5c \ucd08\ucf54", image: "https://images.unsplash.com/photo-1550923508-2c2aeec95cb8?w=800", description: "\ub2ec\ucf64\ud55c \uce74\ub77c\uba5c\uacfc \ucd08\ucf5c\ub9bf\uc758 \ub2ec\ucf64\ud55c \uc870\ud569\uc785\ub2c8\ub2e4.", emoji: "\u2615" },
            { name: "\ud5e4\uc774\uc990\ub11b \ucd08\ucf54", image: "https://images.unsplash.com/photo-1550923508-2c2aeec95cb8?w=800", description: "\uace0\uc18c\ud55c \ud5e4\uc774\uc990\ub11b\uacfc \ucd08\ucf5c\ub9bf\uc758 \ub530\ub73b\ud55c \ud55c\uc794\uc785\ub2c8\ub2e4.", emoji: "\u2615" },
            { name: "\uc624\ub808\uc624 \ucd08\ucf54", image: "https://images.unsplash.com/photo-1517701604599-bb29b5dd7359?w=800", description: "\ubc14\uc0ad\ud55c \uc624\ub808\uc624\uc640 \ucd08\ucf5c\ub9bf\uc758 \ub2ec\ucf64\ud55c \ud55c\uc794\uc785\ub2c8\ub2e4.", emoji: "\u2615" },
            { name: "\ub9c8\uc2dc\uba5c\ub85c \ucd08\ucf54", image: "https://images.unsplash.com/photo-1541167760496-1628856ab772?w=800", description: "\ubd80\ub4dc\ub7ec\uc6b4 \ub9c8\uc2dc\uba5c\ub85c\uc640 \ucd08\ucf5c\ub9bf\uc758 \ub2ec\ucf64\ud55c \uc870\ud569\uc785\ub2c8\ub2e4.", emoji: "\u2615" },
            { name: "\uc544\uc774\uc2a4 \ud654\uc774\ud2b8 \ucd08\ucf54", image: "https://images.unsplash.com/photo-1541167760496-1628856ab772?w=800", description: "\uc2dc\uc6d0\ud55c \ud654\uc774\ud2b8 \ucd08\ucf5c\ub9bf\uc73c\ub85c \uc0c1\ucf8c\ud55c \ud558\ub8e8\ub97c \ubcf4\ub0b4\uc138\uc694.", emoji: "\u2615" },
            { name: "\uc544\uc774\uc2a4 \ubbfc\ud2b8 \ucd08\ucf54", image: "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=800", description: "\uc2dc\uc6d0\ud55c \ubbfc\ud2b8 \ucd08\ucf5c\ub9bf\uc73c\ub85c \uae30\ubd84\uc744 \uc804\ud658\ud558\uc138\uc694.", emoji: "\u2615" },
            { name: "\ucd08\ucf54 \ud504\ub77c\ud478\uce58\ub178", image: "https://images.unsplash.com/photo-1517701604599-bb29b5dd7359?w=800", description: "\uc2dc\uc6d0\ud55c \ucd08\ucf5c\ub9bf \ud504\ub77c\ud478\uce58\ub178\ub85c \ub2ec\ucf64\ud55c \ud558\ub8e8\ub97c \uc990\uae30\uc138\uc694.", emoji: "\u2615" },
            { name: "\ub354\ube14 \ucd08\ucf54", image: "https://images.unsplash.com/photo-1610889556283-7d84814d4203?w=800", description: "\uc9c4\ud55c \ucd08\ucf5c\ub9bf \ub450 \ubc30\ub85c \ub354\uc6b1 \ud48d\ubd80\ud55c \ub9db\uc744 \uc990\uaca8\ubcf4\uc138\uc694.", emoji: "\u2615" },
            { name: "\ucf54\ucf54\uc544", image: "https://images.unsplash.com/photo-1582235967735-3b9815041065?w=800", description: "\ub530\ub73b\ud558\uace0 \ub2ec\ucf64\ud55c \ucf54\ucf54\uc544\ub85c \ud3b8\uc548\ud55c \ud558\ub8e8\ub97c \ubcf4\ub0b4\uc138\uc694.", emoji: "\u2615" },
            { name: "\uc544\uc774\uc2a4 \ucf54\ucf54\uc544", image: "https://images.unsplash.com/photo-1541167760496-1628856ab772?w=800", description: "\uc2dc\uc6d0\ud55c \ucf54\ucf54\uc544\ub85c \uc0c1\ucf8c\ud55c \ud558\ub8e8\ub97c \uc2dc\uc791\ud558\uc138\uc694.", emoji: "\u2615" },
            { name: "\ub179\ucc28", image: "https://images.unsplash.com/photo-1564890369478-c5af4696f001?w=800", description: "\uc2e0\uc120\ud558\uace0 \uae54\ub054\ud55c \ub9db\uc73c\ub85c \ub9c8\uc74c\uc744 \uc815\ud654\uc2dc\ucf1c\uc90d\ub2c8\ub2e4.", emoji: "\ud83c\udf75" },
            { name: "\ud64d\ucc28", image: "https://images.unsplash.com/photo-1627435601361-ec25f5b1d0e5?w=800", description: "\ub530\ub73b\ud558\uace0 \uc9c4\ud55c \ub9db\uc73c\ub85c \ud558\ub8e8\ub97c \ud3b8\uc548\ud558\uac8c \uc2dc\uc791\ud558\uc138\uc694.", emoji: "\ud83c\udf75" },
            { name: "\uc6b0\ub871\ucc28", image: "https://images.unsplash.com/photo-1576092762791-2f9a907e7e82?w=800", description: "\uc740\uc740\ud55c \ud5a5\uacfc \uae4a\uc740 \ub9db\uc73c\ub85c \uc5ec\uc720\ub85c\uc6b4 \uc2dc\uac04\uc744 \uc990\uae30\uc138\uc694.", emoji: "\ud83c\udf75" },
            { name: "\uc790\uc2a4\ubbfc\ucc28", image: "https://images.unsplash.com/photo-1576092762791-2f9a907e7e82?w=800", description: "\ud5a5\uae0b\ud55c \uaf43\ud5a5\uae30\ub85c \ub9c8\uc74c\uc744 \ub2ec\ub798\uc8fc\ub294 \ud55c\uc794\uc785\ub2c8\ub2e4.", emoji: "\ud83c\udf75" },
            { name: "\uce90\ubaa8\ub9c8\uc77c", image: "https://images.unsplash.com/photo-1597481499750-3e6b22637e12?w=800", description: "\ubd80\ub4dc\ub7fd\uace0 \uc9c4\uc815 \ud6a8\uacfc\uac00 \uc788\ub294 \ucc28\ub85c \ud3b8\uc548\ud55c \ud558\ub8e8\ub97c \ubcf4\ub0b4\uc138\uc694.", emoji: "\ud83c\udf75" },
            { name: "\ud398\ud37c\ubbfc\ud2b8", image: "https://images.unsplash.com/photo-1597481499750-3e6b22637e12?w=800", description: "\uc0c1\ucf8c\ud55c \ubbfc\ud2b8 \ud5a5\uc73c\ub85c \uae30\ubd84\uc744 \uc804\ud658\uc2dc\ucf1c\uc90d\ub2c8\ub2e4.", emoji: "\ud83c\udf75" },
            { name: "\ud788\ube44\uc2a4\ucee4\uc2a4", image: "https://images.unsplash.com/photo-1544787219-7f47ccb76574?w=800", description: "\uc0c8\ucf64\ub2ec\ucf64\ud55c \ub9db\uc73c\ub85c \ud65c\ub825\uc744 \ubd88\uc5b4\ub123\uc5b4\uc90d\ub2c8\ub2e4.", emoji: "\ud83c\udf75" },
            { name: "\uc5bc\uadf8\ub808\uc774", image: "https://images.unsplash.com/photo-1576092762791-2f9a907e7e82?w=800", description: "\uc740\uc740\ud55c \ubca0\ub974\uac00\ubabb \ud5a5\uc73c\ub85c \uc6b0\uc544\ud55c \ud558\ub8e8\ub97c \uc2dc\uc791\ud558\uc138\uc694.", emoji: "\ud83c\udf75" },
            { name: "\ub8e8\uc774\ubcf4\uc2a4", image: "https://images.unsplash.com/photo-1597481499750-3e6b22637e12?w=800", description: "\ubd80\ub4dc\ub7fd\uace0 \ub2ec\ucf64\ud55c \ub9db\uc73c\ub85c \uc2a4\ud2b8\ub808\uc2a4\ub97c \ud480\uc5b4\uc90d\ub2c8\ub2e4.", emoji: "\ud83c\udf75" },
            { name: "\ub77c\ubca4\ub354", image: "https://images.unsplash.com/photo-1606189912808-410a71944810?w=800", description: "\ud3c9\uc628\ud55c \ud5a5\uc73c\ub85c \ub9c8\uc74c\uc744 \uc9c4\uc815\uc2dc\ucf1c\uc90d\ub2c8\ub2e4.", emoji: "\ud83c\udf75" },
            { name: "\ub85c\uc988\ud799", image: "https://images.unsplash.com/photo-1544787219-7f47ccb76574?w=800", description: "\ube44\ud0c0\ubbfc\uc774 \ud48d\ubd80\ud55c \uc0c8\ucf64\ud55c \ub9db\uc73c\ub85c \uac74\uac15\ud55c \ud558\ub8e8\ub97c \ubcf4\ub0b4\uc138\uc694.", emoji: "\ud83c\udf75" },
            { name: "\ub300\ucd94\ucc28", image: "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?w=800", description: "\ub2ec\ucf64\ud558\uace0 \ub530\ub73b\ud55c \ub9db\uc73c\ub85c \ubab8\uc744 \ub530\ub73b\ud558\uac8c \ud574\uc90d\ub2c8\ub2e4.", emoji: "\ud83c\udf75" },
            { name: "\uc0dd\uac15\ucc28", image: "https://images.unsplash.com/photo-1576092762791-2f9a907e7e82?w=800", description: "\ub530\ub73b\ud558\uace0 \uc790\uadf9\uc801\uc778 \ub9db\uc73c\ub85c \ubab8\uc744 \ub530\ub73b\ud558\uac8c \ud574\uc90d\ub2c8\ub2e4.", emoji: "\ud83c\udf75" },
            { name: "\uc720\uc790\ucc28", image: "https://images.unsplash.com/photo-1597481499750-3e6b22637e12?w=800", description: "\uc0c8\ucf64\ub2ec\ucf64\ud55c \ub9db\uc73c\ub85c \uae30\ubd84\uc744 \uc0c1\ucf8c\ud558\uac8c \ub9cc\ub4e4\uc5b4\uc90d\ub2c8\ub2e4.", emoji: "\ud83c\udf75" },
            { name: "\ubcf4\uc774\ucc28", image: "https://images.unsplash.com/photo-1627435601361-ec25f5b1d0e5?w=800", description: "\uae4a\uace0 \uc9c4\ud55c \ub9db\uc73c\ub85c \uc2dc\uac04\uc744 \uc5ec\uc720\ub86d\uac8c \uc990\uae30\uc138\uc694.", emoji: "\ud83c\udf75" },
            { name: "\ubc31\ucc28", image: "https://images.unsplash.com/photo-1597481499750-3e6b22637e12?w=800", description: "\uc740\uc740\ud558\uace0 \ubd80\ub4dc\ub7ec\uc6b4 \ub9db\uc73c\ub85c \ub9c8\uc74c\uc744 \ud3c9\uc628\ud558\uac8c \ud574\uc90d\ub2c8\ub2e4.", emoji: "\ud83c\udf75" },
            { name: "\ud669\ucc28", image: "https://images.unsplash.com/photo-1564890369478-c5af4696f001?w=800", description: "\ub4dc\ubb3c\uace0 \uadc0\ud55c \ucc28\ub85c \ud2b9\ubcc4\ud55c \ud558\ub8e8\ub97c \ub9cc\ub4e4\uc5b4\uc90d\ub2c8\ub2e4.", emoji: "\ud83c\udf75" },
            { name: "\ub2e4\uc990\ub9c1", image: "https://images.unsplash.com/photo-1606189912808-410a71944810?w=800", description: "\ud5a5\uae0b\ud558\uace0 \uae54\ub054\ud55c \ub9db\uc73c\ub85c \uc6b0\uc544\ud55c \ud558\ub8e8\ub97c \uc2dc\uc791\ud558\uc138\uc694.", emoji: "\ud83c\udf75" },
            { name: "\uc5bc\uc479", image: "https://images.unsplash.com/photo-1564890369478-c5af4696f001?w=800", description: "\uc740\uc740\ud55c \uaf43\ud5a5\uae30\ub85c \ub9c8\uc74c\uc744 \ub2ec\ub798\uc8fc\ub294 \ud55c\uc794\uc785\ub2c8\ub2e4.", emoji: "\ud83c\udf75" },
            { name: "\uc815\uad00\uc74c", image: "https://images.unsplash.com/photo-1544787219-7f47ccb76574?w=800", description: "\uae4a\uace0 \uc9c4\ud55c \ub9db\uc73c\ub85c \uc5ec\uc720\ub85c\uc6b4 \uc2dc\uac04\uc744 \uc990\uae30\uc138\uc694.", emoji: "\ud83c\udf75" },
            { name: "\uc6a9\uc815\ucc28", image: "https://images.unsplash.com/photo-1544787219-7f47ccb76574?w=800", description: "\uc2e0\uc120\ud558\uace0 \uae54\ub054\ud55c \ub9db\uc73c\ub85c \ub9c8\uc74c\uc744 \uc815\ud654\uc2dc\ucf1c\uc90d\ub2c8\ub2e4.", emoji: "\ud83c\udf75" },
            { name: "\ubc31\ud638\uc740\uce68", image: "https://images.unsplash.com/photo-1606189912808-410a71944810?w=800", description: "\uc740\uc740\ud558\uace0 \ubd80\ub4dc\ub7ec\uc6b4 \ub9db\uc73c\ub85c \ud3c9\uc628\ud55c \ud558\ub8e8\ub97c \ubcf4\ub0b4\uc138\uc694.", emoji: "\ud83c\udf75" },
            { name: "\uc6a9\uc815\ub179\ucc28", image: "https://images.unsplash.com/photo-1544787219-7f47ccb76574?w=800", description: "\uc2e0\uc120\ud558\uace0 \uae54\ub054\ud55c \ub9db\uc73c\ub85c \uc0c1\ucf8c\ud55c \ud558\ub8e8\ub97c \uc2dc\uc791\ud558\uc138\uc694.", emoji: "\ud83c\udf75" },
            { name: "\uc9c4\uc8fc\ucc28", image: "https://images.unsplash.com/photo-1597481499750-3e6b22637e12?w=800", description: "\ub465\uadfc \uacf5 \ubaa8\uc591\uc758 \ucc28\ub85c \ud2b9\ubcc4\ud55c \ud55c\uc794\uc744 \uc990\uae30\uc138\uc694.", emoji: "\ud83c\udf75" },
            { name: "\ub3d9\uc815\ucd98", image: "https://images.unsplash.com/photo-1627435601361-ec25f5b1d0e5?w=800", description: "\ubd04\uc5d0 \ub530\ub294 \uc2e0\uc120\ud55c \ucc28\ub85c \ud65c\ub825\uc744 \ubd88\uc5b4\ub123\uc5b4\uc90d\ub2c8\ub2e4.", emoji: "\ud83c\udf75" },
            { name: "\uc728\ubb34\ucc28", image: "https://images.unsplash.com/photo-1606189912808-410a71944810?w=800", description: "\uace0\uc18c\ud558\uace0 \ubd80\ub4dc\ub7ec\uc6b4 \ub9db\uc73c\ub85c \ubab8\uc744 \ub530\ub73b\ud558\uac8c \ud574\uc90d\ub2c8\ub2e4.", emoji: "\ud83c\udf75" },
            { name: "\uc625\uc218\uc218\ucc28", image: "https://images.unsplash.com/photo-1564890369478-c5af4696f001?w=800", description: "\uace0\uc18c\ud55c \uc625\uc218\uc218 \ud5a5\uc73c\ub85c \ud3b8\uc548\ud55c \ud558\ub8e8\ub97c \ubcf4\ub0b4\uc138\uc694.", emoji: "\ud83c\udf75" },
            { name: "\ud604\ubbf8\ucc28", image: "https://images.unsplash.com/photo-1576092762791-2f9a907e7e82?w=800", description: "\uace0\uc18c\ud558\uace0 \ub530\ub73b\ud55c \ub9db\uc73c\ub85c \ubab8\uc744 \ub530\ub73b\ud558\uac8c \ud574\uc90d\ub2c8\ub2e4.", emoji: "\ud83c\udf75" },
            { name: "\ub465\uae00\ub808\ucc28", image: "https://images.unsplash.com/photo-1627435601361-ec25f5b1d0e5?w=800", description: "\ub2ec\ucf64\ud558\uace0 \ubd80\ub4dc\ub7ec\uc6b4 \ub9db\uc73c\ub85c \ub9c8\uc74c\uc744 \ub2ec\ub798\uc8fc\ub294 \ud55c\uc794\uc785\ub2c8\ub2e4.", emoji: "\ud83c\udf75" },
            { name: "\uc218\uc815\uacfc", image: "https://images.unsplash.com/photo-1597481499750-3e6b22637e12?w=800", description: "\ub2ec\ucf64\ud558\uace0 \uc2dc\uc6d0\ud55c \uc804\ud1b5 \uc74c\ub8cc\ub85c \uc0c1\ucf8c\ud55c \ud558\ub8e8\ub97c \ubcf4\ub0b4\uc138\uc694.", emoji: "\ud83c\udf75" },
            { name: "\uc2dd\ud61c", image: "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?w=800", description: "\ub2ec\ucf64\ud558\uace0 \uc2dc\uc6d0\ud55c \uc804\ud1b5 \uc74c\ub8cc\ub85c \uc5ec\uc720\ub85c\uc6b4 \uc2dc\uac04\uc744 \uc990\uae30\uc138\uc694.", emoji: "\ud83c\udf75" },
            { name: "\ub9e4\uc2e4\ucc28", image: "https://images.unsplash.com/photo-1564890369478-c5af4696f001?w=800", description: "\uc0c8\ucf64\ub2ec\ucf64\ud55c \ub9db\uc73c\ub85c \uae30\ubd84\uc744 \uc0c1\ucf8c\ud558\uac8c \ub9cc\ub4e4\uc5b4\uc90d\ub2c8\ub2e4.", emoji: "\ud83c\udf75" },
            { name: "\uc624\ubbf8\uc790\ucc28", image: "https://images.unsplash.com/photo-1627435601361-ec25f5b1d0e5?w=800", description: "\uc0c8\ucf64\ub2ec\ucf64\ud55c \ub9db\uc73c\ub85c \ud65c\ub825\uc744 \ubd88\uc5b4\ub123\uc5b4\uc90d\ub2c8\ub2e4.", emoji: "\ud83c\udf75" },
            { name: "\ubaa8\uacfc\ucc28", image: "https://images.unsplash.com/photo-1627435601361-ec25f5b1d0e5?w=800", description: "\uc740\uc740\ud55c \ud5a5\uacfc \ub2ec\ucf64\ud55c \ub9db\uc73c\ub85c \ub9c8\uc74c\uc744 \ub2ec\ub798\uc8fc\ub294 \ud55c\uc794\uc785\ub2c8\ub2e4.", emoji: "\ud83c\udf75" },
            { name: "\uac10\uc78e\ucc28", image: "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?w=800", description: "\ubd80\ub4dc\ub7fd\uace0 \uae54\ub054\ud55c \ub9db\uc73c\ub85c \ud3b8\uc548\ud55c \ud558\ub8e8\ub97c \ubcf4\ub0b4\uc138\uc694.", emoji: "\ud83c\udf75" },
            { name: "\uad6c\uae30\uc790\ucc28", image: "https://images.unsplash.com/photo-1576092762791-2f9a907e7e82?w=800", description: "\ub2ec\ucf64\ud558\uace0 \ub530\ub73b\ud55c \ub9db\uc73c\ub85c \uac74\uac15\ud55c \ud558\ub8e8\ub97c \ubcf4\ub0b4\uc138\uc694.", emoji: "\ud83c\udf75" },
            { name: "\uc778\uc0bc\ucc28", image: "https://images.unsplash.com/photo-1576092762791-2f9a907e7e82?w=800", description: "\ub530\ub73b\ud558\uace0 \uc9c4\ud55c \ub9db\uc73c\ub85c \ud65c\ub825\uc744 \ubd88\uc5b4\ub123\uc5b4\uc90d\ub2c8\ub2e4.", emoji: "\ud83c\udf75" },
            { name: "\ud64d\uc0bc\ucc28", image: "https://images.unsplash.com/photo-1597481499750-3e6b22637e12?w=800", description: "\ub530\ub73b\ud558\uace0 \uc9c4\ud55c \ub9db\uc73c\ub85c \uac74\uac15\ud55c \ud558\ub8e8\ub97c \uc2dc\uc791\ud558\uc138\uc694.", emoji: "\ud83c\udf75" },
            { name: "\ub2f9\uadc0\ucc28", image: "https://images.unsplash.com/photo-1544787219-7f47ccb76574?w=800", description: "\ub530\ub73b\ud558\uace0 \ubd80\ub4dc\ub7ec\uc6b4 \ub9db\uc73c\ub85c \ubab8\uc744 \ub530\ub73b\ud558\uac8c \ud574\uc90d\ub2c8\ub2e4.", emoji: "\ud83c\udf75" },
            { name: "\uc465\ucc28", image: "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?w=800", description: "\uc740\uc740\ud55c \uc465 \ud5a5\uc73c\ub85c \ub9c8\uc74c\uc744 \uc9c4\uc815\uc2dc\ucf1c\uc8fc\ub294 \ud55c\uc794\uc785\ub2c8\ub2e4.", emoji: "\ud83c\udf75" },
            { name: "\ubc15\ud558\ucc28", image: "https://images.unsplash.com/photo-1576092762791-2f9a907e7e82?w=800", description: "\uc0c1\ucf8c\ud55c \ubbfc\ud2b8 \ud5a5\uc73c\ub85c \uae30\ubd84\uc744 \uc804\ud658\uc2dc\ucf1c\uc90d\ub2c8\ub2e4.", emoji: "\ud83c\udf75" },
            { name: "\ub808\ubaac\uadf8\ub77c\uc2a4", image: "https://images.unsplash.com/photo-1627435601361-ec25f5b1d0e5?w=800", description: "\uc0c1\ucf8c\ud55c \ub808\ubaac \ud5a5\uc73c\ub85c \ud65c\ub825\uc744 \ubd88\uc5b4\ub123\uc5b4\uc90d\ub2c8\ub2e4.", emoji: "\ud83c\udf75" },
            { name: "\uc9c4\uc800\ub808\ubaac", image: "https://images.unsplash.com/photo-1606189912808-410a71944810?w=800", description: "\ub530\ub73b\ud558\uace0 \uc0c1\ucf8c\ud55c \ub9db\uc73c\ub85c \ubab8\uc744 \ub530\ub73b\ud558\uac8c \ud574\uc90d\ub2c8\ub2e4.", emoji: "\ud83c\udf75" },
            { name: "\uc720\uce7c\ub9bd\ud22c\uc2a4", image: "https://images.unsplash.com/photo-1564890369478-c5af4696f001?w=800", description: "\uc0c1\ucf8c\ud55c \ud5a5\uc73c\ub85c \uae30\ubd84\uc744 \uc804\ud658\uc2dc\ucf1c\uc90d\ub2c8\ub2e4.", emoji: "\ud83c\udf75" },
            { name: "\ub808\ubaac\ubc24", image: "https://images.unsplash.com/photo-1576092762791-2f9a907e7e82?w=800", description: "\uc740\uc740\ud55c \ub808\ubaac \ud5a5\uc73c\ub85c \ub9c8\uc74c\uc744 \ub2ec\ub798\uc8fc\ub294 \ud55c\uc794\uc785\ub2c8\ub2e4.", emoji: "\ud83c\udf75" },
            { name: "\ub85c\uc988\ub9c8\ub9ac", image: "https://images.unsplash.com/photo-1564890369478-c5af4696f001?w=800", description: "\ud5a5\uae0b\ud55c \ud5c8\ube0c \ud5a5\uc73c\ub85c \ud65c\ub825\uc744 \ubd88\uc5b4\ub123\uc5b4\uc90d\ub2c8\ub2e4.", emoji: "\ud83c\udf75" },
            { name: "\ud0c0\uc784", image: "https://images.unsplash.com/photo-1576092762791-2f9a907e7e82?w=800", description: "\uc740\uc740\ud55c \ud5c8\ube0c \ud5a5\uc73c\ub85c \ud3b8\uc548\ud55c \ud558\ub8e8\ub97c \ubcf4\ub0b4\uc138\uc694.", emoji: "\ud83c\udf75" },
            { name: "\uc138\uc774\uc9c0", image: "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?w=800", description: "\ubd80\ub4dc\ub7fd\uace0 \uc9c4\uc815 \ud6a8\uacfc\uac00 \uc788\ub294 \ucc28\ub85c \ub9c8\uc74c\uc744 \ud3c9\uc628\ud558\uac8c \ud574\uc90d\ub2c8\ub2e4.", emoji: "\ud83c\udf75" },
        ],
        lifePathNumbers: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 22, 33, 44, 55, 66, 77, 88, 99],
        birthElements: { "봄": "Spring", "여름": "Summer", "가을": "Autumn", "겨울": "Winter" },
        luckyItems: [
            "거울", "텀블러", "모자", "안경", "다이어리", "이어폰", "손수건", "향수", "시계",
            "반지", "목걸이", "책", "펜", "우산", "운동화", "백팩", "지갑", "립밤",
            "마스크", "스카프", "장갑", "양말", "카메라", "노트북", "달력", "화분", "쿠션",
            "초콜릿", "사탕", "껌", "비타민", "물티슈", "보조배터리", "충전기", "키링", "썬글라스",
            "핸드크림", "키링", "네잎클로버"
        ],
        fashionItems: [
            "깔끔한 화이트 셔츠", "편안한 오버핏 맨투맨", "시크한 블랙 자켓", "캐주얼한 데님 팬츠",
            "따뜻한 니트 조끼", "활동적인 트레이닝 셋업", "포근한 가디건", "세련된 트렌치 코트",
            "미니멀한 슬랙스", "귀여운 체크 셔츠", "강렬한 레드 포인트", "차분한 베이지 톤온톤"
        ],
        actionVerbs: {
            dynamic: ["걷기", "달리기", "여행 계획하기", "새로운 곳 방문하기"],
            active: ["운동하기", "청소하기", "큰 소리로 웃기", "친구 만나기"],
            static: ["명상하기", "일기 쓰기", "독서하기", "음악 감상하기"],
            nurturing: ["화분 물주기", "요리하기", "선물하기", "반신욕하기"],
            stable: ["가계부 정리하기", "계획 세우기", "저축하기", "일찍 잠들기"],
            mental: ["공부하기", "다큐멘터리 보기", "글쓰기", "전시회 관람하기"],
            social: ["연락하기", "칭찬하기", "경청하기", "모임 참석하기"],
            transform: ["짐 정리하기", "오래된 물건 버리기", "머리 스타일 바꾸기", "새로운 시도하기"]
        },
        avoidList: [
            "늦잠", "과식", "충동구매", "말다툼", "성급한 결론", "무리한 운동", "음주",
            "뒷담화", "약속 지각", "밤샘", "차가운 음료", "불필요한 논쟁", "미루기",
            "부정적인 생각", "감정적 대응", "자신을 비하", "떠넘기기", "숨기기"
        ]
    },

    // --- Initialization ---
    init: function () {
        this.loadBirthday();
        this.updateDateDisplay();
        this.startDailyRefresh();

        if (this.state.birthDate) {
            this.renderRecommendations(this.state.birthDate);
        } else {
            document.getElementById('result-container').classList.add('hidden');
        }
    },

    // --- Daily Refresh ---
    startDailyRefresh: function () {
        // Store the current day string to detect change
        let lastDay = new Date().toDateString();
        setInterval(() => {
            const now = new Date();
            const currentDay = now.toDateString();
            if (currentDay !== lastDay) {
                lastDay = currentDay;
                if (this.state.birthDate) {
                    this.renderRecommendations(this.state.birthDate);
                }
            }
        }, 60 * 1000); // check every minute
    },

    updateDateDisplay: function () {
        const today = new Date();
        const days = ["일", "월", "화", "수", "목", "금", "토"];
        const formattedDate = `${today.getFullYear()}년 ${today.getMonth() + 1}월 ${today.getDate()}일 ${days[today.getDay()]}요일`;
        document.getElementById('current-date').innerText = formattedDate;
    },

    // --- Core Logic ---

    // 1. Calculate Calendar & Date validation
    saveBirthday: function () {
        // Expected format: YYYYMMDD (8 digits)
        const input = document.getElementById('birth-date').value.trim();

        // Validation regex for 8 digits
        if (!/^\d{8}$/.test(input)) {
            alert('생년월일 8자리를 정확히 입력해주세요. (예: 19900101)');
            return;
        }

        const y = parseInt(input.substring(0, 4), 10);
        const m = parseInt(input.substring(4, 6), 10);
        const d = parseInt(input.substring(6, 8), 10);

        // Basic date validity check
        const dateObj = new Date(y, m - 1, d);
        if (dateObj.getFullYear() !== y || dateObj.getMonth() + 1 !== m || dateObj.getDate() !== d) {
            alert('유효하지 않은 날짜입니다.');
            return;
        }

        // Bounds check (optional, but reasonable)
        if (y < 1900 || y > new Date().getFullYear()) {
            alert('연도를 확인해주세요.');
            return;
        }
        this.state.birthDate = input;
        localStorage.setItem('user_birthday_v2', input); // Changed key to avoid conflict with old format
        this.renderRecommendations(input);
    },

    loadBirthday: function () {
        const saved = localStorage.getItem('user_birthday_v2');
        if (saved) {
            this.state.birthDate = saved;
            document.getElementById('birth-date').value = saved;
            this.renderRecommendations(saved);
        } else {
            // Fallback to check old format if user revisits
            // But simple reset is cleaner
            document.getElementById('result-container').classList.add('hidden');
        }
    },

    resetData: function () {
        if (confirm('설정을 초기화하시겠습니까?')) {
            localStorage.removeItem('user_birthday_v2');
            location.reload();
        }
    },


    // Helper: Valid Zodiac Calculation
    getZodiac: function (m, d) {
        // Arrays organized by month start. 
        // 1.20~, 2.19~, 3.21~, 4.20~, 5.21~, 6.22~, 7.23~, 8.23~, 9.23~, 10.23~, 11.23~, 12.22~
        // Simple logic:
        if ((m == 1 && d >= 20) || (m == 2 && d <= 18)) return this.data.zodiacSigns.find(z => z.name === "물병자리");
        if ((m == 2 && d >= 19) || (m == 3 && d <= 20)) return this.data.zodiacSigns.find(z => z.name === "물고기자리");
        if ((m == 3 && d >= 21) || (m == 4 && d <= 19)) return this.data.zodiacSigns.find(z => z.name === "양자리");
        if ((m == 4 && d >= 20) || (m == 5 && d <= 20)) return this.data.zodiacSigns.find(z => z.name === "황소자리");
        if ((m == 5 && d >= 21) || (m == 6 && d <= 21)) return this.data.zodiacSigns.find(z => z.name === "쌍둥이자리");
        if ((m == 6 && d >= 22) || (m == 7 && d <= 22)) return this.data.zodiacSigns.find(z => z.name === "게자리");
        if ((m == 7 && d >= 23) || (m == 8 && d <= 22)) return this.data.zodiacSigns.find(z => z.name === "사자자리");
        if ((m == 8 && d >= 23) || (m == 9 && d <= 22)) return this.data.zodiacSigns.find(z => z.name === "처녀자리");
        if ((m == 9 && d >= 23) || (m == 10 && d <= 22)) return this.data.zodiacSigns.find(z => z.name === "천칭자리");
        if ((m == 10 && d >= 23) || (m == 11 && d <= 22)) return this.data.zodiacSigns.find(z => z.name === "전갈자리");
        if ((m == 11 && d >= 23) || (m == 12 && d <= 21)) return this.data.zodiacSigns.find(z => z.name === "사수자리");
        return this.data.zodiacSigns.find(z => z.name === "염소자리"); // 12.22 ~ 1.19
    },

    // Helper: Season Calculation
    getSeasonElement: function (m) {
        // Simple meteorological season in Korea
        if (m >= 3 && m <= 5) return "봄";
        if (m >= 6 && m <= 8) return "여름";
        if (m >= 9 && m <= 11) return "가을";
        return "겨울"; // 12, 1, 2
    },

    // Helper: Life Path Calculation (Numerology)
    calculateLifePath: function (y, m, d) {
        // Sum all digits of date string
        let sum = 0;
        const dateStr = "" + y + (m < 10 ? "0" + m : m) + (d < 10 ? "0" + d : d);

        for (let char of dateStr) {
            sum += parseInt(char, 10);
        }

        // Reduce to single digit or Master Number (11, 22, 33)
        // Simple Loop
        while (sum > 9 && sum !== 11 && sum !== 22 && sum !== 33) {
            let tempSum = 0;
            const sumStr = sum.toString();
            for (let char of sumStr) {
                tempSum += parseInt(char, 10);
            }
            sum = tempSum;
        }
        return sum;
    },

    // Helper: Birth Tarot Calculation (Standard "Birth Card")
    // Method: Sum 4 groups (XX + XX + XX + XX from YYYYMMDD) or just sum YYYY+MM+DD
    // Common method: YYYY + MM + DD. Reduce result to <= 21.
    calculateBirthTarot: function (y, m, d) {
        const sum = y + m + d;

        // Flatten
        function reduceTo21(num) {
            if (num <= 21) return num;
            let tempSum = 0;
            num.toString().split('').forEach(n => tempSum += parseInt(n));
            return reduceTo21(tempSum);
        }

        const cardNum = reduceTo21(sum);

        // Special case: The Fool is 0, but usually in birth cards people map 22 to 0 or 0 is handled differently. 
        // Our array has "0: Fool".
        // 22 often reduces to 4 (Emperor), but if we want to include Fool(0) we need specific logic.
        // For simplicity in this app context: match array index.
        // If result is 22 -> 0 (Fool) is common variation or just 2+2=4.
        // Let's stick strictly to array indices 0-21.

        return this.data.tarotCards[cardNum] || this.data.tarotCards[0];
    },

    generateHash: function (combinedStr) {
        // combinedStr = birthday (YYYY-MM-DD) + today (YYYYMMDD)
        return combinedStr
            .split("")
            .reduce((acc, char) => acc + char.charCodeAt(0), 0);
    },

    getSelection: function (array, hash) {
        return array[hash % array.length];
    },

    // --- Rendering ---
    renderRecommendations: function (dateStr) {
        // dateStr is "YYYYMMDD"
        const y = parseInt(dateStr.substring(0, 4), 10);
        const m = parseInt(dateStr.substring(4, 6), 10);
        const d = parseInt(dateStr.substring(6, 8), 10);

        // Combine birthday with today's date (YYYYMMDD) for daily variation
        const today = new Date();
        const todayStr = today.toISOString().slice(0, 10).replace(/-/g, "");
        const combined = dateStr + todayStr;
        const hash = this.generateHash(combined);
        const { data } = this;

        // Default Images
        const defaultImages = {
            beverage: "https://images.unsplash.com/photo-1556679343-c7306c1976bc?w=800",
            flower: "https://images.unsplash.com/photo-1507646227500-4d3899666d85?w=800"
        };
        const setBgWithFallback = (elementId, imgUrl, defaultUrl) => {
            const el = document.getElementById(elementId);
            const img = new Image();
            img.onload = () => { el.style.backgroundImage = `url('${imgUrl}')`; };
            img.onerror = () => { el.style.backgroundImage = `url('${defaultUrl}')`; };
            el.style.backgroundImage = `url('${defaultUrl}')`;
            if (imgUrl && imgUrl !== defaultUrl) { img.src = imgUrl; }
        };

        // UI Open
        document.getElementById('setup-section').classList.add('hidden');
        document.getElementById('result-container').classList.remove('hidden');
        document.getElementById('result-container').style.display = 'flex';

        // 1. Precise Analysis
        const zodiac = this.getZodiac(m, d);
        const seasonName = this.getSeasonElement(m);
        const lifePathNum = this.calculateLifePath(y, m, d);
        const tarot = this.calculateBirthTarot(y, m, d);

        document.getElementById('res-zodiac').innerText = zodiac.name;
        document.getElementById('res-zodiac-date').innerText = zodiac.dates;

        document.getElementById('res-tarot').innerText = tarot.name;
        document.getElementById('res-tarot-desc').innerText = tarot.description;

        document.getElementById('res-lifepath').innerText = lifePathNum;
        document.getElementById('res-element').innerText = seasonName;

        // 2. Quote (Poem) - Keep hashed
        const poem = this.getSelection(data.poems, hash);
        const quoteContainer = document.getElementById('quote-container');
        quoteContainer.innerHTML = '';
        poem.content.split('\n').forEach(line => {
            const p = document.createElement('p');
            p.className = 'quote-line';
            p.innerText = line;
            quoteContainer.appendChild(p);
        });
        const authorP = document.createElement('p');
        authorP.className = 'quote-author';
        authorP.innerText = `- ${poem.author} -`;
        quoteContainer.appendChild(authorP);

        // 3. Colors (3 Recommendations) - Keep hashed
        const cLen = data.colors.length;
        const color1 = data.colors[hash % cLen];
        const color2 = data.colors[(hash + 1) % cLen];
        const color3 = data.colors[(hash + 2) % cLen];

        const renderColor = (idx, colorObj) => {
            document.getElementById(`color-box-${idx}`).style.backgroundColor = colorObj.hex;
            document.getElementById(`color-name-${idx}`).innerText = colorObj.name;
            document.getElementById(`color-hex-${idx}`).innerText = colorObj.hex;
        };
        renderColor(1, color1);
        renderColor(2, color2);
        renderColor(3, color3);

        // 4. Beverage - Keep hashed
        const beverage = this.getSelection(data.beverages, hash);
        document.getElementById('beverage-name').innerText = (beverage.emoji ? beverage.emoji + " " : "") + beverage.name;
        const bevDesc = document.getElementById('beverage-desc');
        if (bevDesc) bevDesc.innerText = beverage.description || "";
        setBgWithFallback('beverage-img', beverage.image, defaultImages.beverage);

        // 5. Flower - Keep hashed
        const flower = this.getSelection(data.flowers, hash);
        document.getElementById('flower-name').innerText = (flower.emoji ? flower.emoji + " " : "") + flower.name;
        document.getElementById('flower-meaning').innerText = flower.meaning;
        setBgWithFallback('flower-img', flower.image, defaultImages.flower);

        // --- NEW FEATURES ---

        // 6. Lucky Number (1-45) - Daily varying
        const todayFn = new Date();
        // Use hash of birthday + today's date for variation
        const dailyHash = hash + todayFn.getDate() + todayFn.getMonth() + todayFn.getFullYear();
        const luckyNum = (dailyHash) % 45 + 1;
        document.getElementById('res-lucky-num').innerText = luckyNum;

        // 7. Golden Time
        const isEventLifePath = lifePathNum % 2 === 0;
        const goldenTime = isEventLifePath ? "오후 2시" : "오전 10시";
        document.getElementById('res-golden-time').innerText = goldenTime;

        // 8. Lucky Direction
        let direction = "동쪽";
        if (zodiac.element === "Fire") direction = "남쪽";
        else if (zodiac.element === "Water") direction = "서쪽";
        else if (zodiac.element === "Earth") direction = "북쪽";
        else direction = "동쪽"; // Air
        document.getElementById('res-direction').innerText = direction;
        document.getElementById('res-direction-desc').innerText = `${direction}에서 행운이 찾아옵니다`;

        // 9. Lucky Item
        const luckyItem = this.getSelection(data.luckyItems, dailyHash); // Make it daily
        document.getElementById('res-item').innerText = luckyItem;
        document.getElementById('res-item-desc').innerText = `${luckyItem}을(를) 챙기세요`;

        // 10. Fashion Point
        const fashion = this.getSelection(data.fashionItems, dailyHash); // Make it daily
        document.getElementById('res-fashion').innerText = fashion;

        // 11. Action Verb (Based on Tarot Type)
        const tarotType = tarot.type || "static";
        const actionList = data.actionVerbs[tarotType] || data.actionVerbs["static"];
        const action = actionList[dailyHash % actionList.length]; // Make it daily
        document.getElementById('res-action').innerText = action;

        // 12. Best Partner (Simple Logic: Next Zodiac index)
        const zIdx = data.zodiacSigns.findIndex(z => z.name === zodiac.name);
        // Triplicity/Compatibility logic (very simplified here)
        // Fire(0,4,8) <-> Air(1,5,9) ?? Simple +4 is same element. 
        // Let's just use +4 (same element) for affinity
        const partnerIdx = (zIdx + 4) % 12;
        const partner = data.zodiacSigns[partnerIdx];
        document.getElementById('res-partner').innerText = partner ? partner.name : "염소자리";

        // 13. Avoid (Hash + Day)
        const avoid = this.getSelection(data.avoidList, dailyHash);
        document.getElementById('res-avoid').innerText = avoid;
    }
};

window.onload = function () {
    app.init();
};
