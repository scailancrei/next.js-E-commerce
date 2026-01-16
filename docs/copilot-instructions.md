# Guía de Desarrollo - NEXTJS-E-COMMERCE

## Propósito

Este documento guía el desarrollo y sirve como referencia para GitHub Copilot y desarrolladores.

## React Best Practices

Consultar siempre: `docs/react-best-practices/`

### Componentes

- Usar functional components con TypeScript
- Seguir patrones en `react-best-practices/components.md`
- Props siempre tipadas con interfaces
- Implementar PropTypes o TypeScript

### Hooks

- Consultar `react-best-practices/hooks.md`
- Preferir hooks personalizados para lógica reutilizable
- Documentar dependencias de useEffect

### Estado

- Ver `react-best-practices/state-management.md`
- Minimizar re-renders innecesarios
- Usar Context API para estado global simple
- Considerar Zustand/Redux para apps complejas

## Convenciones de Código

### Naming

- Componentes: PascalCase (`UserProfile.tsx`)
- Hooks: camelCase con prefijo use (`useAuth.ts`)
- Utils: camelCase (`formatDate.ts`)
- Constantes: UPPER_SNAKE_CASE

### Estructura de Archivos

```
src/
├── components/     # Componentes reutilizables
├── hooks/          # Custom hooks
├── pages/          # Páginas/rutas
├── utils/          # Funciones auxiliares
└── types/          # TypeScript types/interfaces
```

### Testing

- Tests junto a archivos: `Component.test.tsx`
- Cobertura mínima: 80%
- Usar React Testing Library

## Antes de Commitear

- [ ] Código sin errores de TypeScript
- [ ] Tests pasando
- [ ] Linter sin warnings
- [ ] Componentes documentados
