export function mappingCategoryName(categories, categoryId) {
  const category = categories.find(cat => cat.id === categoryId);
  return category ? category.name : 'Unknown Category';
}