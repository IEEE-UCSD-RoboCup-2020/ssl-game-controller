export const matchProceedingEvents = [
    {
        name: 'Prepared for kickoff or penalty kick',
        component: 'Prepared',
        type: 'auto'
    },
    {
        name: 'No progress in game',
        component: 'NoProgressInGame',
        type: 'auto'
    },
    {
        name: 'Placement failed',
        component: 'PlacementFailed',
        type: 'auto'
    },
    {
        name: 'Placement succeeded',
        component: 'PlacementSucceeded',
        type: 'auto'
    },
    {
        name: 'Too many robots',
        component: 'TooManyRobots',
        type: 'auto'
    },
];
export const ballLeftFieldEvents = [
    {
        name: 'via touch line',
        component: 'BallLeftFieldTouchLine',
        type: 'auto'
    },
    {
        name: 'via goal line',
        component: 'BallLeftFieldGoalLine',
        type: 'auto'
    },
    {
        name: 'Possible Goal (autoRef detection)',
        component: 'PossibleGoal',
        type: 'auto'
    },
    {
        name: 'Goal (valid goal, approved by referee)',
        component: 'Goal',
        type: 'manual'
    },
    {
        name: 'Indirect Goal',
        component: 'IndirectGoal',
        type: 'auto'
    },
    {
        name: 'Chipped Goal',
        component: 'ChippedGoal',
        type: 'auto'
    },
];
export const minorOffenseEvents = [
    {
        name: 'Ball was kicked aimlessly',
        component: 'AimlessKick',
        type: 'auto'
    },
    {
        name: 'Attacker failed to kick ball in time',
        component: 'KickTimeout',
        type: 'auto'
    },
    {
        name: 'Keeper held the ball too long',
        component: 'KeeperHeldBall',
        type: 'auto'
    },
    {
        name: 'Attacker double touched ball',
        component: 'AttackerDoubleTouchedBall',
        type: 'auto'
    },
    {
        name: 'Attacker was in opponent defense area while touching the ball',
        component: 'AttackerTouchedBallInDefenseArea',
        type: 'auto'
    },
    {
        name: 'Ball was dribbled too far',
        component: 'BotDribbledBallTooFar',
        type: 'auto'
    },
    {
        name: 'Ball was kicked too fast',
        component: 'BotKickedBallTooFast',
        type: 'auto'
    },
];
export const foulEvents = [
    {
        name: 'Attacker was too close to defense area during free kick',
        component: 'AttackerTooCloseToDefenseArea',
        type: 'auto'
    },
    {
        name: 'Opponent bot interfered ball placement procedure',
        component: 'BotInterferedPlacement',
        type: 'auto'
    },
    {
        name: 'Two bots crashed with similar speeds',
        component: 'BotCrashDrawn',
        type: 'auto'
    },
    {
        name: 'Bot crashed into another bot',
        component: 'BotCrashUnique',
        type: 'auto'
    },
    {
        name: 'Bot crashed into another bot - decided to continue',
        component: 'BotCrashUniqueSkipped',
        type: 'auto'
    },
    {
        name: 'One bot pushed another one',
        component: 'BotPushedBot',
        type: 'auto'
    },
    {
        name: 'One bot pushed another one - decided to continue',
        component: 'BotPushedBotSkipped',
        type: 'auto'
    },
    {
        name: 'Bot held ball deliberately',
        component: 'BotHeldBallDeliberately',
        type: 'auto'
    },
    {
        name: 'A bot tipped over',
        component: 'BotTippedOver',
        type: 'manual'
    },
    {
        name: 'Robot too fast during stop',
        component: 'BotTooFastInStop',
        type: 'auto'
    },
    {
        name: 'Defender was too close to kick point',
        component: 'DefenderTooCloseToKickPoint',
        type: 'auto'
    },
    {
        name: 'Defender touched ball while partially inside defense area',
        component: 'DefenderInDefenseAreaPartially',
        type: 'auto'
    },
    {
        name: 'Defender touched ball in defense area',
        component: 'DefenderInDefenseArea',
        type: 'auto'
    },
    {
        name: 'Attacker touched opponent defender in defense area',
        component: 'AttackerTouchedOpponentInDefenseArea',
        type: 'auto'
    },
    {
        name: 'Attacker touched opponent defender in defense area - decided to continue',
        component: 'AttackerTouchedOpponentInDefenseAreaSkipped',
        type: 'auto'
    },
];
export const repeatedEvents = [
    {
        name: 'Multiple cards',
        component: 'MultipleCards',
        type: 'auto'
    },
    {
        name: 'Multiple placement failures',
        component: 'MultiplePlacementFailures',
        type: 'auto'
    },
    {
        name: 'Multiple fouls',
        component: 'MultipleFouls',
        type: 'auto'
    },
];
export const unsportingBehaviorEvents = [
    {
        name: 'Minor unsporting behavior',
        component: 'UnsportingBehaviorMinor',
        type: 'manual'
    },
    {
        name: 'Major unsporting behavior',
        component: 'UnsportingBehaviorMajor',
        type: 'manual'
    },
];
