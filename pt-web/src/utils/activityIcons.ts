const activityIcons: Record<string, string> = {
  sunrise: "/images/activities/sunrise.svg",
  sunset: "/images/activities/sunset.svg",
  photographyworkshops: "/images/activities/photographyWorkshops.svg",
  editingpostprocessingsessions: "/images/activities/editingPostProcessingSessions.svg",
  culturalexperiences: "/images/activities/culturalExperience.svg",
  hobbitonmoviesettour: "/images/activities/hobbitonMovieSetTour.svg",
  specialovernightstay: "/images/activities/specialOvernightStay.svg",
  geothermalparksaccesshotsprings: "/images/activities/geothermalParksAccessHotSprings.svg",
  boatcoastalphotography: "/images/activities/boatCoastalPhotography.svg",
  flamingobirdlifeshoots: "/images/activities/flamingoBirdLifeShoots.svg",
  wildhorsephotosessions: "/images/activities/wildHorsesPhotoSessions.svg",
  extrahorse: "/images/activities/extraHorse.svg",
  landscapephotography: "/images/activities/landscapePhotography.svg",
  authenticryokanstayspecialovernightstay: "/images/activities/authenticRyokanStaySpecialOvernightStay.svg",
  wildlifenature: "/images/activities/wildlifeNature.svg",
  default: "/images/flagRoundBlue.svg",
};

export function getActivityIcon(iconName: string): string {
  if (!iconName) {
    return activityIcons.default;
  }

  return activityIcons[iconName.toLowerCase()] || activityIcons.default;
}

export {activityIcons};
