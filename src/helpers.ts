interface GlobalControlLevel {
    level: number;
    progress: number;
    progressTotal: number;
}

interface CPU {
    limit: number;
    tickLimit: number;
    bucket: number;

    /**
     * Get amount of CPU time used from the beginning of the current game tick. Always returns 0 in the Simulation mode.
     */
    getUsed(): number;
}

/**
 * An array describing the creep’s body. Each element contains the following properties:
 */
interface BodyPartDefinition {
    /**
     * If the body part is boosted, this property specifies the mineral type which is used for boosting. One of the RESOURCE_* constants.
     */
    boost: string;
    /**
     * One of the body part types constants.
     */
    type: string;
    /**
     * The remaining amount of hit points of this body part.
     */
    hits: number;
}
interface Owner {
    username: string;
}
interface ReservationDefinition {
    username: string,
    ticksToEnd: number
}
interface StoreDefinition {
    [resource: string]: number;
    energy?: number;
    power?: number;
}

interface LookAtResultWithPos {
    x: number;
    y: number;
    type: string;
    creep?: Creep;
    terrain?: string;
    structure?: Structure;
    flag?: Flag;
    energy?: Resource;
    exit?: any;
    source?: Source;
}
interface LookAtResult {
    type: string;
    constructionSite?: ConstructionSite;
    creep?: Creep;
    energy?: Resource;
    exit?: any;
    flag?: Flag;
    source?: Source;
    structure?: Structure;
    terrain?: string;
}


interface LookAtResultMatrix {
    [coord: number]: LookAtResultMatrix|LookAtResult[]
}

interface FindPathOpts {
    ignoreCreeps?: boolean;
    ignoreDestructibleStructures?: boolean;
    ignoreRoads?: boolean;
    ignore?: any[]|RoomPosition[];
    avoid?: any[]|RoomPosition[];
    maxOps?: number;
    heuristicWeight?: number;
    serialize?: boolean;
    maxRooms?: number;
}

interface MoveToOpts {
    reusePath?: number;
    noPathFinding?: boolean;
}

interface PathStep {
    x: number;
    dx: number;
    y: number;
    dy: number;
    direction: number;
}

/**
 * An object with survival game info
 */
interface SurvivalGameInfo {
    /**
     * Current score.
     */
    score: number;
    /**
     * Time to the next wave of invaders.
     */
    timeToWave: number;
    /**
     * The number of the next wave.
     */
    wave: number;
}
