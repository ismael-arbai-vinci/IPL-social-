import { validateEmail } from '../src/emailValidator';

describe('Email Validator - TDD Approach', () => {
  
  describe('Validation du symbole @', () => {
    test('devrait rejeter un email sans @', () => {
      expect(validateEmail('testexample.com')).toBe(false);
    });

    test('devrait rejeter un email avec plusieurs @', () => {
      expect(validateEmail('test@@example.com')).toBe(false);
      expect(validateEmail('te@st@example.com')).toBe(false);
    });

    test('devrait accepter un email avec exactement un @', () => {
      expect(validateEmail('test@example.com')).toBe(true);
    });
  });

  describe('Validation du point dans le nom de domaine', () => {
    test('devrait rejeter un email sans point dans le domaine', () => {
      expect(validateEmail('test@examplecom')).toBe(false);
    });

    test('devrait accepter un email avec un point dans le domaine', () => {
      expect(validateEmail('test@example.com')).toBe(true);
    });

    test('devrait accepter un email avec plusieurs points dans le domaine', () => {
      expect(validateEmail('test@mail.example.com')).toBe(true);
      expect(validateEmail('test@sub.domain.example.com')).toBe(true);
    });

    test('devrait rejeter un email si le point est le dernier caractère', () => {
      expect(validateEmail('test@example.')).toBe(false);
      expect(validateEmail('test@example.com.')).toBe(false);
    });
  });

  describe('Validation des espaces', () => {
    test('devrait rejeter un email contenant des espaces', () => {
      expect(validateEmail('test @example.com')).toBe(false);
      expect(validateEmail('test@ example.com')).toBe(false);
      expect(validateEmail('test@example .com')).toBe(false);
      expect(validateEmail(' test@example.com')).toBe(false);
      expect(validateEmail('test@example.com ')).toBe(false);
    });

    test('devrait accepter un email sans espace', () => {
      expect(validateEmail('test@example.com')).toBe(true);
    });
  });

  describe('Validation du texte avant et après @', () => {
    test('devrait rejeter un email sans texte avant @', () => {
      expect(validateEmail('@example.com')).toBe(false);
    });

    test('devrait rejeter un email sans texte après @', () => {
      expect(validateEmail('test@')).toBe(false);
    });

    test('devrait accepter un email avec du texte avant et après @', () => {
      expect(validateEmail('test@example.com')).toBe(true);
      expect(validateEmail('a@b.c')).toBe(true);
    });
  });

  describe('Cas limites et edge cases', () => {
    test('devrait rejeter une chaîne vide', () => {
      expect(validateEmail('')).toBe(false);
    });

    test('devrait rejeter null ou undefined', () => {
      expect(validateEmail(null as any)).toBe(false);
      expect(validateEmail(undefined as any)).toBe(false);
    });

    test('devrait accepter des emails valides courants', () => {
      expect(validateEmail('john.doe@example.com')).toBe(true);
      expect(validateEmail('jane_doe@mail.example.org')).toBe(true);
      expect(validateEmail('user123@test.co.uk')).toBe(true);
    });

    test('devrait rejeter des emails invalides courants', () => {
      expect(validateEmail('notanemail')).toBe(false);
      expect(validateEmail('@example.com')).toBe(false);
      expect(validateEmail('test@')).toBe(false);
      expect(validateEmail('test@domain')).toBe(false);
    });
  });
});